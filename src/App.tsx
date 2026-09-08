/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Boxes,
  Plus,
  FolderDown,
  RotateCcw,
} from 'lucide-react';
import { Snippet, ThemeMode, LayoutMode } from './types';
import { CATEGORIES, INITIAL_SNIPPETS } from './data/defaultSnippets';
import { Header } from './components/Header';
import { SnippetCard } from './components/SnippetCard';
import { SnippetPreviewModal } from './components/SnippetPreviewModal';
import { NewSnippetModal } from './components/NewSnippetModal';
import { ImportModal } from './components/ImportModal';

const STORAGE_KEY = 'html_snippet_studio_items_v3';
const THEME_KEY = 'html_snippet_studio_theme_v3';
const LAYOUT_KEY = 'html_snippet_studio_layout';

export default function App() {
  // Theme state: defaults to 'light' (Luce Chiara, fresco e riposante) or 'sky' (Azzurro Ghiaccio)
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === 'sky' ? 'sky' : 'light';
  });

  // Layout mode: 'grid' (2 columns) | 'stack' (1 wide column)
  const [layoutMode, setLayoutMode] = useState<LayoutMode>(() => {
    const saved = localStorage.getItem(LAYOUT_KEY);
    return saved === 'stack' ? 'stack' : 'grid';
  });

  // Apply data-theme attribute to root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(LAYOUT_KEY, layoutMode);
  }, [layoutMode]);

  // Snippets list state
  const [snippets, setSnippets] = useState<Snippet[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge any newly introduced default snippets (e.g. menu, header, hero) if missing
          const existingIds = new Set(parsed.map((item: Snippet) => item.id));
          const missingDefaults = INITIAL_SNIPPETS.filter((d) => !existingIds.has(d.id));
          if (missingDefaults.length > 0) {
            const merged = [...parsed, ...missingDefaults];
            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            } catch {
              // ignore storage quota errors
            }
            return merged;
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Impossibile caricare da localStorage, uso i predefiniti:', e);
    }
    return INITIAL_SNIPPETS;
  });

  // Search & category filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Expanded modal preview
  const [expandedSnippet, setExpandedSnippet] = useState<Snippet | null>(null);

  // Creation & Import modals
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  // Undo delete notification
  const [deletedNotice, setDeletedNotice] = useState<{
    snippet: Snippet;
    index: number;
  } | null>(null);

  // Save snippets to localStorage
  const persistSnippets = (updated: Snippet[]) => {
    setSnippets(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Errore salvataggio localStorage:', e);
    }
  };

  // Keyboard shortcut for fast search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const input = document.getElementById('search-input');
        input?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered snippets
  const filteredSnippets = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return snippets.filter((item) => {
      if (selectedCategory && item.category !== selectedCategory) {
        return false;
      }
      if (!query) return true;
      const inTitle = item.title.toLowerCase().includes(query);
      const inDesc = item.description?.toLowerCase().includes(query);
      const inPath = item.filePath?.toLowerCase().includes(query);
      const inTags = item.tags?.some((t) => t.toLowerCase().includes(query));
      const inCode = item.code.toLowerCase().includes(query);
      return inTitle || inDesc || inPath || inTags || inCode;
    });
  }, [snippets, searchQuery, selectedCategory]);

  // Handlers
  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'sky' : 'light'));
  };

  const handleAddSnippet = (newSnippet: Snippet) => {
    const updated = [newSnippet, ...snippets];
    persistSnippets(updated);
  };

  const handleImportSnippets = (newItems: Snippet[]) => {
    const updated = [...newItems, ...snippets];
    persistSnippets(updated);
  };

  const handleDeleteSnippet = (id: string) => {
    const index = snippets.findIndex((s) => s.id === id);
    const target = snippets[index];
    if (!target) return;

    const updated = snippets.filter((s) => s.id !== id);
    persistSnippets(updated);

    if (expandedSnippet?.id === id) {
      setExpandedSnippet(null);
    }

    setDeletedNotice({ snippet: target, index });
    setTimeout(() => {
      setDeletedNotice((current) => (current?.snippet.id === id ? null : current));
    }, 6000);
  };

  const handleUndoDelete = () => {
    if (!deletedNotice) return;
    const { snippet, index } = deletedNotice;
    const updated = [...snippets];
    updated.splice(index, 0, snippet);
    persistSnippets(updated);
    setDeletedNotice(null);
  };

  const isSky = theme === 'sky';

  return (
    <div
      id="app-container-root"
      className={`min-h-screen flex flex-col transition-colors duration-200 ${
        isSky ? 'bg-[#1b3a5b]' : 'bg-[#234b75]'
      } text-slate-900`}
    >
      {/* 1. Header with search, categories, and controls */}
      <Header
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        layoutMode={layoutMode}
        onChangeLayoutMode={setLayoutMode}
        onOpenNewSnippetModal={() => setIsNewModalOpen(true)}
        onOpenImportModal={() => setIsImportModalOpen(true)}
        snippetCount={filteredSnippets.length}
        totalSnippetCount={snippets.length}
      />

      {/* 2. Main Container Workspace */}
      <main
        id="snippets-main-container"
        className="flex-1 max-w-[1700px] w-full mx-auto px-4 sm:px-6 py-6 flex flex-col"
      >
        {/* Undo Toast Notification */}
        {deletedNotice && (
          <div className="mb-4 flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-slate-900 text-white shadow-lg animate-in slide-in-from-top duration-200">
            <span className="text-xs">
              Snippet <strong>"{deletedNotice.snippet.title}"</strong> eliminato dal contenitore.
            </span>
            <button
              onClick={handleUndoDelete}
              className="flex items-center gap-1 text-xs font-bold text-teal-400 hover:text-teal-300 underline"
            >
              <RotateCcw size={13} />
              Ripristina
            </button>
          </div>
        )}

        {/* Snippets Container (Grid or Stack) */}
        {filteredSnippets.length > 0 ? (
          <div
            className={
              layoutMode === 'grid'
                ? 'grid grid-cols-1 lg:grid-cols-2 gap-6'
                : 'flex flex-col gap-6 max-w-5xl mx-auto w-full'
            }
          >
            {filteredSnippets.map((snippet) => {
              const category = CATEGORIES.find((c) => c.id === snippet.category);
              return (
                <SnippetCard
                  key={snippet.id}
                  snippet={snippet}
                  category={category}
                  theme={theme}
                  layoutMode={layoutMode}
                  onDelete={handleDeleteSnippet}
                  onExpandPreview={(s) => setExpandedSnippet(s)}
                />
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-slate-200 bg-white my-8 shadow-xs">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border border-slate-200 bg-slate-50 text-slate-500">
              <Boxes size={28} />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Nessun frammento HTML trovato
            </h3>
            <p className="text-xs text-slate-500 max-w-md mb-5 leading-relaxed">
              {searchQuery || selectedCategory
                ? 'Nessuno snippet corrisponde ai criteri di ricerca impostati. Prova a modificare i termini di ricerca o azzerare i filtri.'
                : 'Il contenitore è al momento vuoto. Aggiungi il tuo primo frammento HTML o importa file dalla cartella.'}
            </p>
            <div className="flex items-center gap-3">
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery('');
                  }}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                >
                  Azzera filtri
                </button>
              )}
              <button
                onClick={() => setIsNewModalOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-xs"
              >
                <Plus size={14} className="stroke-[2.5]" />
                <span>Aggiungi Nuovo Snippet</span>
              </button>
              <button
                onClick={() => setIsImportModalOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
              >
                <FolderDown size={14} className="text-teal-600" />
                <span>Importa File HTML</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 3. Fullscreen / Responsive Preview Modal */}
      <SnippetPreviewModal
        snippet={expandedSnippet}
        category={CATEGORIES.find((c) => c.id === expandedSnippet?.category)}
        theme={theme}
        onClose={() => setExpandedSnippet(null)}
      />

      {/* 4. New Snippet Modal */}
      <NewSnippetModal
        isOpen={isNewModalOpen}
        onClose={() => setIsNewModalOpen(false)}
        onSave={handleAddSnippet}
        categories={CATEGORIES}
        theme={theme}
      />

      {/* 5. Import Files Modal */}
      <ImportModal
        isOpen={isImportModalOpen}
        onClose={() => setIsImportModalOpen(false)}
        onImportSnippets={handleImportSnippets}
        categories={CATEGORIES}
        theme={theme}
      />
    </div>
  );
}
