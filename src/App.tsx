import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Snippet, SnippetCategory, SnippetType, NeutralTheme } from './types';
import { DEFAULT_SNIPPETS } from './data/defaultSnippets';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { SnippetCard } from './components/SnippetCard';
import { SnippetDetailModal } from './components/SnippetDetailModal';
import { AddSnippetModal } from './components/AddSnippetModal';
import { PublicFolderGuideModal } from './components/PublicFolderGuideModal';
import { parseFileToSnippet, scanDroppedItems } from './utils/fileParser';
import { SearchX, FolderUp, Plus, RefreshCw, Sparkles, UploadCloud, Trash2, AlertTriangle } from 'lucide-react';

const STORAGE_CUSTOM_KEY = 'snippet_vault_custom_snippets';
const STORAGE_FAVORITES_KEY = 'snippet_vault_favorites';
const STORAGE_DELETED_KEY = 'snippet_vault_deleted_snippets';
const STORAGE_THEME_KEY = 'snippet_vault_neutral_theme';

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<NeutralTheme>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_THEME_KEY) as NeutralTheme;
      return saved || 'warm-neutral';
    } catch {
      return 'warm-neutral';
    }
  });

  // Keep html data-theme attribute in sync
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    try {
      localStorage.setItem(STORAGE_THEME_KEY, currentTheme);
    } catch {
      // ignore
    }
  }, [currentTheme]);

  const [snippets, setSnippets] = useState<Snippet[]>(() => {
    try {
      const storedCustom = localStorage.getItem(STORAGE_CUSTOM_KEY);
      const storedFavorites = localStorage.getItem(STORAGE_FAVORITES_KEY);
      const storedDeleted = localStorage.getItem(STORAGE_DELETED_KEY);
      const favoritesList: string[] = storedFavorites ? JSON.parse(storedFavorites) : [];
      const deletedList: string[] = storedDeleted ? JSON.parse(storedDeleted) : [];

      const initialCustom: Snippet[] = storedCustom ? JSON.parse(storedCustom) : [];
      
      const combined = [...DEFAULT_SNIPPETS, ...initialCustom]
        .filter((s) => !deletedList.includes(s.id))
        .map((s) => ({
          ...s,
          favorite: favoritesList.includes(s.id) || s.favorite,
        }));
      return combined;
    } catch {
      return DEFAULT_SNIPPETS;
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SnippetCategory | 'all'>('all');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  // Modals and loading state
  const [activeDetailSnippet, setActiveDetailSnippet] = useState<Snippet | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [snippetToDelete, setSnippetToDelete] = useState<Snippet | null>(null);
  const [isRescanning, setIsRescanning] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Hidden file inputs
  const folderInputRef = useRef<HTMLInputElement>(null);
  const filesInputRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Sync favorites to localStorage
  useEffect(() => {
    try {
      const favoriteIds = snippets.filter((s) => s.favorite).map((s) => s.id);
      localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(favoriteIds));
    } catch (e) {
      console.error(e);
    }
  }, [snippets]);

  // Sync custom snippets to localStorage
  const saveCustomSnippets = (updatedList: Snippet[]) => {
    try {
      const customOnes = updatedList.filter((s) => s.isCustom);
      localStorage.setItem(STORAGE_CUSTOM_KEY, JSON.stringify(customOnes));
    } catch (e) {
      console.error(e);
    }
  };

  // Automated Public Snippets Scanner (Zero-configuration)
  const loadPublicSnippets = useCallback(async (isManual = false) => {
    if (isManual) setIsRescanning(true);
    try {
      // 1. Try automatic filesystem scan endpoint (Vite auto-scanner)
      let scannedSnippets: Snippet[] = [];
      try {
        const scanRes = await fetch('/api/scan-snippets');
        if (scanRes.ok) {
          const scanData = await scanRes.json();
          if (scanData.success && Array.isArray(scanData.snippets) && scanData.snippets.length > 0) {
            scannedSnippets = scanData.snippets;
          }
        }
      } catch {
        // Fallback to static manifest if api is not reachable
      }

      // 2. Fallback to /snippets/manifest.json if API returned nothing
      if (scannedSnippets.length === 0) {
        try {
          const res = await fetch('/snippets/manifest.json');
          if (res.ok) {
            const manifest = await res.json();
            if (manifest && Array.isArray(manifest.snippets)) {
              scannedSnippets = await Promise.all(
                manifest.snippets.map(async (item: any) => {
                  let code = item.code || '';
                  if (!code && item.path) {
                    try {
                      const codeRes = await fetch(item.path);
                      if (codeRes.ok) code = await codeRes.text();
                    } catch {
                      // ignore
                    }
                  }
                  if (!code) {
                    const match = DEFAULT_SNIPPETS.find((d) => d.id === item.id);
                    if (match) code = match.code;
                  }
                  return {
                    ...item,
                    code: code || '<!-- Componente vuoto -->'
                  } as Snippet;
                })
              );
            }
          }
        } catch {
          // fallback
        }
      }

      // If we got snippets from public, merge with custom user snippets
      if (scannedSnippets.length > 0) {
        setSnippets((prev) => {
          const customSnippets = prev.filter((s) => s.isCustom);
          
          // Deduplicate by ID: scanned takes precedence, then default if missing
          const existingIds = new Set(scannedSnippets.map((s) => s.id));
          const nonOverlappingDefaults = DEFAULT_SNIPPETS.filter((d) => !existingIds.has(d.id));

          const storedDeleted = localStorage.getItem(STORAGE_DELETED_KEY);
          const deletedList: string[] = storedDeleted ? JSON.parse(storedDeleted) : [];

          const merged = [...scannedSnippets, ...nonOverlappingDefaults, ...customSnippets]
            .filter((s) => !deletedList.includes(s.id));
          
          const storedFavorites = localStorage.getItem(STORAGE_FAVORITES_KEY);
          const favoritesList: string[] = storedFavorites ? JSON.parse(storedFavorites) : [];
          return merged.map((s) => ({
            ...s,
            favorite: favoritesList.includes(s.id) || s.favorite,
          }));
        });

        if (isManual) {
          showToast(`Trovati e caricati ${scannedSnippets.length} file da /public/snippets/!`);
        }
      } else if (isManual) {
        showToast('Nessun file trovato in /public/snippets/. Trascina i file o carica una cartella!');
      }
    } catch (err) {
      console.error('Error during auto-scan:', err);
      if (isManual) showToast('Errore durante la scansione automatica');
    } finally {
      setIsRescanning(false);
    }
  }, []);

  // Initial auto-scan on startup
  useEffect(() => {
    loadPublicSnippets(false);
  }, [loadPublicSnippets]);

  // Handle folder upload from native directory picker
  const handleFolderInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      const parsedList: Snippet[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const relativePath = (file as any).webkitRelativePath || file.name;
        const parsed = await parseFileToSnippet(file, relativePath);
        if (parsed) {
          parsedList.push(parsed);
        }
      }

      if (parsedList.length > 0) {
        setSnippets((prev) => {
          const updated = [...parsedList, ...prev];
          saveCustomSnippets(updated);
          return updated;
        });
        showToast(`Caricati con successo ${parsedList.length} snippet dalla cartella!`);
      } else {
        showToast('Nessun file compatibile (.html, .jsx, .tsx) trovato nella cartella');
      }
    } catch (err) {
      console.error(err);
      showToast('Errore durante la lettura della cartella');
    } finally {
      e.target.value = '';
    }
  };

  // Handle individual files upload
  const handleFilesInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      const parsedList: Snippet[] = [];
      for (let i = 0; i < files.length; i++) {
        const parsed = await parseFileToSnippet(files[i]);
        if (parsed) parsedList.push(parsed);
      }

      if (parsedList.length > 0) {
        setSnippets((prev) => {
          const updated = [...parsedList, ...prev];
          saveCustomSnippets(updated);
          return updated;
        });
        showToast(`Aggiunti ${parsedList.length} nuovi snippet!`);
      }
    } catch (err) {
      console.error(err);
      showToast('Errore durante il caricamento dei file');
    } finally {
      e.target.value = '';
    }
  };

  // Drag and drop event handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDraggingOver) setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.contains(e.relatedTarget as Node)) return;
    setIsDraggingOver(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);

    try {
      const droppedSnippets = await scanDroppedItems(e.dataTransfer);
      if (droppedSnippets.length > 0) {
        setSnippets((prev) => {
          const updated = [...droppedSnippets, ...prev];
          saveCustomSnippets(updated);
          return updated;
        });
        showToast(`Fantastico! Importati ${droppedSnippets.length} snippet trascinati!`);
      } else {
        showToast('Nessun file HTML o React (.html, .jsx, .tsx) riconosciuto');
      }
    } catch (err) {
      console.error('Error handling drop:', err);
      showToast('Errore durante l\'importazione dei file trascinati');
    }
  };

  // Toggle favorite
  const handleToggleFavorite = (id: string) => {
    setSnippets((prev) =>
      prev.map((s) => (s.id === id ? { ...s, favorite: !s.favorite } : s))
    );
  };

  // Add new single snippet manually
  const handleAddSnippet = (newSnippet: Snippet) => {
    setSnippets((prev) => {
      const updated = [newSnippet, ...prev];
      saveCustomSnippets(updated);
      return updated;
    });
    showToast(`Snippet "${newSnippet.title}" aggiunto al contenitore!`);
  };

  // Prompt delete modal (works for custom and default snippets)
  const handlePromptDelete = (id: string) => {
    const target = snippets.find((s) => s.id === id);
    if (target) {
      setSnippetToDelete(target);
    }
  };

  const handleConfirmDelete = () => {
    if (!snippetToDelete) return;
    const targetId = snippetToDelete.id;
    const targetTitle = snippetToDelete.title;

    setSnippets((prev) => {
      const updated = prev.filter((s) => s.id !== targetId);
      saveCustomSnippets(updated);
      return updated;
    });

    try {
      const storedDeleted = localStorage.getItem(STORAGE_DELETED_KEY);
      const deletedList: string[] = storedDeleted ? JSON.parse(storedDeleted) : [];
      if (!deletedList.includes(targetId)) {
        deletedList.push(targetId);
        localStorage.setItem(STORAGE_DELETED_KEY, JSON.stringify(deletedList));
      }
    } catch (e) {
      console.error('Failed to store deleted snippet id:', e);
    }

    if (activeDetailSnippet?.id === targetId) {
      setActiveDetailSnippet(null);
    }

    setSnippetToDelete(null);
    showToast(`Snippet "${targetTitle}" rimosso con successo.`);
  };

  // Update snippet (from code editor in modal)
  const handleUpdateSnippet = (updated: Snippet) => {
    setSnippets((prev) => {
      const newList = prev.map((s) => (s.id === updated.id ? updated : s));
      saveCustomSnippets(newList);
      return newList;
    });
    setActiveDetailSnippet(updated);
    showToast('Modifiche salvate con successo!');
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    snippets.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, [snippets]);

  // Favorites count
  const favoritesCount = useMemo(() => {
    return snippets.filter((s) => s.favorite).length;
  }, [snippets]);

  // Filtered snippets according to search query, category, type, and favorites
  const filteredSnippets = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return snippets.filter((snippet) => {
      if (showFavoritesOnly && !snippet.favorite) {
        return false;
      }

      if (selectedCategory !== 'all' && snippet.category !== selectedCategory) {
        return false;
      }

      if (query) {
        const matchTitle = snippet.title.toLowerCase().includes(query);
        const matchDesc = snippet.description?.toLowerCase().includes(query);
        const matchTags = snippet.tags.some((t) => t.toLowerCase().includes(query));
        const matchCategory = snippet.category.toLowerCase().includes(query);
        const matchPath = snippet.path?.toLowerCase().includes(query);
        const matchCode = snippet.code.toLowerCase().includes(query);

        if (!matchTitle && !matchDesc && !matchTags && !matchCategory && !matchPath && !matchCode) {
          return false;
        }
      }

      return true;
    });
  }, [snippets, searchQuery, selectedCategory, showFavoritesOnly]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setShowFavoritesOnly(false);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        backgroundColor: 'var(--app-bg)',
        color: 'var(--text-main)',
      }}
      className="min-h-screen flex flex-col font-sans transition-colors duration-200 relative"
    >
      {/* Hidden File Inputs for Directory & Multiple Files Picker */}
      <input
        ref={folderInputRef}
        type="file"
        {...({ webkitdirectory: '', directory: '' } as any)}
        multiple
        className="hidden"
        onChange={handleFolderInputChange}
      />
      <input
        ref={filesInputRef}
        type="file"
        multiple
        accept=".html,.htm,.jsx,.tsx,.js"
        className="hidden"
        onChange={handleFilesInputChange}
      />

      {/* Drag & Drop Fullscreen Overlay */}
      {isDraggingOver && (
        <div className="fixed inset-0 z-50 bg-stone-900/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-white animate-in fade-in duration-150 pointer-events-none">
          <div className="w-20 h-20 rounded-3xl bg-white/15 border-2 border-white/40 border-dashed flex items-center justify-center mb-5 animate-bounce">
            <UploadCloud className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Rilascia i tuoi file o la cartella qui</h2>
          <p className="text-sm text-stone-300 max-w-md text-center">
            Leggeremo automaticamente tutti i file HTML e React (.html, .jsx, .tsx) organizzandoli in categorie con anteprima live!
          </p>
        </div>
      )}

      {/* Top Navigation Bar */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalSnippets={snippets.length}
        filteredCount={filteredSnippets.length}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenGuideModal={() => setIsGuideModalOpen(true)}
        onTriggerFolderUpload={() => folderInputRef.current?.click()}
        onRescanPublic={() => loadPublicSnippets(true)}
        isRescanning={isRescanning}
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Category & Tech Filters */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          showFavoritesOnly={showFavoritesOnly}
          onToggleFavoritesOnly={() => setShowFavoritesOnly((prev) => !prev)}
          favoritesCount={favoritesCount}
          categoryCounts={categoryCounts}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
        />

        {/* Snippets Grid / List */}
        {filteredSnippets.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                : 'flex flex-col gap-2.5'
            }
          >
            {filteredSnippets.map((snippet) => (
              <SnippetCard
                key={snippet.id}
                snippet={snippet}
                viewMode={viewMode}
                onOpenDetail={(s) => setActiveDetailSnippet(s)}
                onToggleFavorite={handleToggleFavorite}
                onDelete={handlePromptDelete}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div 
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)',
            }}
            className="flex flex-col items-center justify-center p-12 border rounded-2xl text-center shadow-2xs my-8"
          >
            <div 
              style={{
                backgroundColor: 'var(--toolbar-bg)',
                color: 'var(--text-subtle)',
              }}
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
            >
              <SearchX className="w-6 h-6" />
            </div>
            <h3 
              style={{ color: 'var(--text-main)' }}
              className="text-base font-bold mb-1"
            >
              Nessuno snippet trovato
            </h3>
            <p 
              style={{ color: 'var(--text-muted)' }}
              className="text-xs max-w-md mb-5"
            >
              Nessun componente corrisponde ai criteri di ricerca attuali. Prova a modificare la parola chiave o azzera i filtri.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <button
                onClick={handleClearFilters}
                style={{
                  backgroundColor: 'var(--toolbar-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-main)',
                }}
                className="px-4 py-2 text-xs font-semibold rounded-xl border transition hover:opacity-90"
              >
                Azzera Filtri
              </button>
              <button
                onClick={() => folderInputRef.current?.click()}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-main)',
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition hover:opacity-90"
              >
                <FolderUp className="w-3.5 h-3.5" />
                Carica Cartella
              </button>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-stone-100 bg-stone-800 hover:bg-stone-700 rounded-xl transition shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                Crea Nuovo Snippet
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Floating Quick Actions Bar on Bottom Right */}
      <div className="fixed bottom-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={() => folderInputRef.current?.click()}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-main)',
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl shadow-lg border transition active:scale-95 hover:opacity-90"
          title="Carica una cartella di snippet dal tuo computer"
        >
          <FolderUp className="w-3.5 h-3.5 text-stone-500" />
          <span className="hidden sm:inline">Importa Cartella</span>
        </button>

        <button
          onClick={() => loadPublicSnippets(true)}
          disabled={isRescanning}
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-main)',
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl shadow-lg border transition active:scale-95 disabled:opacity-50 hover:opacity-90"
          title="Rileva modifiche ai file nella cartella /public/snippets/"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRescanning ? 'animate-spin text-stone-700' : 'text-stone-500'}`} />
          <span className="hidden sm:inline">Rileva /public</span>
        </button>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div 
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-main)',
          }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 text-xs font-semibold rounded-xl shadow-xl border animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modals */}
      {activeDetailSnippet && (
        <SnippetDetailModal
          snippet={activeDetailSnippet}
          onClose={() => setActiveDetailSnippet(null)}
          onUpdateSnippet={handleUpdateSnippet}
          onDeleteSnippet={handlePromptDelete}
        />
      )}

      {isAddModalOpen && (
        <AddSnippetModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAddSnippet={handleAddSnippet}
        />
      )}

      {isGuideModalOpen && (
        <PublicFolderGuideModal
          isOpen={isGuideModalOpen}
          onClose={() => setIsGuideModalOpen(false)}
          onReloadPublic={() => loadPublicSnippets(true)}
          onTriggerFolderUpload={() => folderInputRef.current?.click()}
          isReloading={isRescanning}
        />
      )}

      {/* Delete Confirmation Modal */}
      {snippetToDelete && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 cursor-pointer"
          onClick={() => setSnippetToDelete(null)}
        >
          <div 
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)',
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl shadow-2xl border p-6 flex flex-col gap-4 animate-in zoom-in-95 duration-150 cursor-default"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                <Trash2 className="w-5 h-5" />
              </div>
              <div>
                <h3 style={{ color: 'var(--text-main)' }} className="text-base font-bold">
                  Eliminare questo snippet?
                </h3>
                <p style={{ color: 'var(--text-muted)' }} className="text-xs mt-1 leading-relaxed">
                  Sei sicuro di voler rimuovere <strong className="font-semibold">{snippetToDelete.title}</strong>? Questa azione rimuoverà lo snippet dal tuo archivio.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 mt-2">
              <button
                type="button"
                onClick={() => setSnippetToDelete(null)}
                style={{
                  backgroundColor: 'var(--toolbar-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-main)',
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold border hover:opacity-80 transition cursor-pointer"
              >
                Annulla
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition cursor-pointer shadow-xs active:scale-95"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Elimina definitivamente</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
