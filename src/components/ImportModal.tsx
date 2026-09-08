import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  FolderPlus,
  Link2,
  Check,
  AlertCircle,
  FolderOpen,
} from 'lucide-react';
import { CategoryInfo, Snippet, ThemeMode } from '../types';

interface ImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportSnippets: (snippets: Snippet[]) => void;
  categories: CategoryInfo[];
  theme: ThemeMode;
}

export const ImportModal: React.FC<ImportModalProps> = ({
  isOpen,
  onClose,
  onImportSnippets,
  categories,
}) => {
  if (!isOpen) return null;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState<'upload' | 'path' | 'info'>('upload');
  const [customPath, setCustomPath] = useState('public/snippets/bottoni/mio-bottone.html');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || 'bottoni');
  const [pathStatus, setPathStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [importedCount, setImportedCount] = useState<number | null>(null);

  // Read files uploaded directly
  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newSnippets: Snippet[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.name.endsWith('.html') && !file.name.endsWith('.htm')) continue;

      try {
        const text = await file.text();

        let detectedCategory = selectedCategory;
        if ((file as any).webkitRelativePath) {
          const parts = (file as any).webkitRelativePath.split('/');
          if (parts.length > 2) {
            const catPart = parts[parts.length - 2].toLowerCase();
            const matched = categories.find((c) => c.id === catPart);
            if (matched) detectedCategory = matched.id;
          }
        }

        const titleFromName = file.name
          .replace(/\.(html|htm)$/i, '')
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (l: string) => l.toUpperCase());

        newSnippets.push({
          id: `file-${Date.now()}-${i}`,
          title: titleFromName,
          category: detectedCategory,
          code: text,
          filePath: (file as any).webkitRelativePath || `public/snippets/${detectedCategory}/${file.name}`,
          isCustom: true,
          createdAt: Date.now(),
        });
      } catch (err) {
        console.error('Errore lettura file:', file.name, err);
      }
    }

    if (newSnippets.length > 0) {
      setImportedCount(newSnippets.length);
      onImportSnippets(newSnippets);
      setTimeout(() => {
        onClose();
        setImportedCount(null);
      }, 1500);
    }
  };

  // Fetch from public path
  const handleFetchFromPath = async () => {
    if (!customPath.trim()) return;

    setPathStatus('loading');
    setErrorMessage('');

    try {
      let fetchUrl = customPath.trim();
      if (fetchUrl.startsWith('public/')) {
        fetchUrl = '/' + fetchUrl.substring(7);
      }
      if (!fetchUrl.startsWith('/')) {
        fetchUrl = '/' + fetchUrl;
      }

      const res = await fetch(fetchUrl);
      if (!res.ok) {
        throw new Error(`File non trovato su ${fetchUrl} (Stato HTTP ${res.status})`);
      }

      const htmlContent = await res.text();
      const fileName = customPath.split('/').pop() || 'snippet.html';
      const cleanTitle = fileName
        .replace(/\.html$/i, '')
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());

      const newSnippet: Snippet = {
        id: `linked-${Date.now()}`,
        title: cleanTitle,
        category: selectedCategory,
        code: htmlContent,
        filePath: customPath.trim(),
        isCustom: true,
        createdAt: Date.now(),
      };

      onImportSnippets([newSnippet]);
      setPathStatus('success');

      setTimeout(() => {
        onClose();
        setPathStatus('idle');
      }, 1200);
    } catch (err: any) {
      setPathStatus('error');
      setErrorMessage(err.message || 'Impossibile leggere il file specificato.');
    }
  };

  return (
    <div
      id="import-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
    >
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden text-slate-900">
        {/* Header */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-teal-600 text-white shadow-xs">
              <FolderPlus size={16} />
            </span>
            <h2 className="text-base font-bold text-slate-900">Importa Frammenti HTML</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-slate-200 text-xs font-semibold bg-slate-50">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2.5 px-4 text-center border-b-2 transition-colors ${
              activeTab === 'upload'
                ? 'border-teal-600 text-teal-700 font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Carica File HTML
          </button>
          <button
            onClick={() => setActiveTab('path')}
            className={`flex-1 py-2.5 px-4 text-center border-b-2 transition-colors ${
              activeTab === 'path'
                ? 'border-teal-600 text-teal-700 font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Collega Percorso Public
          </button>
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-2.5 px-4 text-center border-b-2 transition-colors ${
              activeTab === 'info'
                ? 'border-teal-600 text-teal-700 font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Guida Cartelle
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {activeTab === 'upload' && (
            <div>
              <p className="text-xs mb-3 text-slate-600 leading-relaxed">
                Trascina o seleziona uno o più file <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">.html</code> dal tuo computer. I file verranno inseriti nel contenitore con l'anteprima dal vivo.
              </p>

              <div className="mb-3">
                <label className="block text-xs font-semibold mb-1 text-slate-700">
                  Categoria di destinazione predefinita:
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 outline-none"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Drag & drop dropzone */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFiles(e.dataTransfer.files);
                }}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-teal-600 rounded-xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-teal-50/30 group"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".html,.htm"
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                />
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-slate-100 group-hover:bg-teal-100 flex items-center justify-center text-slate-500 group-hover:text-teal-700 transition-colors">
                  <Upload size={20} />
                </div>
                <p className="text-xs font-semibold text-slate-800 mb-1">
                  Trascina qui i tuoi file HTML oppure clicca per sfogliare
                </p>
                <p className="text-[11px] text-slate-500">
                  Supporta selezioni multiple e file con script/stili inclusi
                </p>
              </div>

              {importedCount !== null && (
                <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <Check size={16} />
                  <span>
                    Importati con successo <strong>{importedCount}</strong> snippet!
                  </span>
                </div>
              )}
            </div>
          )}

          {activeTab === 'path' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-600 leading-relaxed">
                Se hai posizionato un file nella cartella <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">public/</code> del progetto, inseriscine il percorso per leggerlo e includerlo nel catalogo.
              </p>

              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-700">
                  Percorso relativo del file HTML:
                </label>
                <div className="relative">
                  <Link2
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    value={customPath}
                    onChange={(e) => setCustomPath(e.target.value)}
                    placeholder="public/snippets/bottoni/mio-bottone.html"
                    className="w-full pl-9 pr-3 py-2 text-xs font-mono rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-700">
                  Categoria associata:
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 outline-none"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleFetchFromPath}
                  disabled={pathStatus === 'loading' || !customPath.trim()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-colors disabled:opacity-50 flex items-center gap-1.5 shadow-xs"
                >
                  {pathStatus === 'loading' ? 'Lettura in corso...' : 'Carica & Aggiungi'}
                </button>

                {pathStatus === 'success' && (
                  <span className="text-xs text-emerald-700 flex items-center gap-1 font-semibold">
                    <Check size={14} /> File caricato!
                  </span>
                )}
              </div>

              {pathStatus === 'error' && (
                <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle size={14} />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          )}

          {activeTab === 'info' && (
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                <FolderOpen size={18} className="text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    Come organizzare i tuoi file HTML
                  </h4>
                  <p>
                    I tuoi frammenti HTML risiedono nella cartella <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-[11px] text-slate-800">public/snippets/</code> suddivisi per cartelle tematiche.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 text-slate-100 font-mono text-[11px] space-y-1">
                <div className="text-teal-400">public/snippets/</div>
                <div className="pl-4">├── bottoni/mio-pulsante.html</div>
                <div className="pl-4">├── schede/card-profilo.html</div>
                <div className="pl-4">├── layout/griglia-moderna.html</div>
                <div className="pl-4">├── animazioni/effetto-pulse.html</div>
                <div className="pl-4">├── form/campo-ricerca.html</div>
                <div className="pl-4">├── modali/dialog-avviso.html</div>
                <div className="pl-4">├── menu/menu-dropdown.html</div>
                <div className="pl-4">├── header/header-app.html</div>
                <div className="pl-4">└── hero/hero-landing.html</div>
              </div>

              <p>
                Non è richiesto alcun file JSON o server di configurazione: l'applicazione indicizza e mostra direttamente ciascun file con anteprima isolata in iframe.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
