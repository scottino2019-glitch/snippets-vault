import React, { useState, useEffect } from 'react';
import { X, Plus, Folder } from 'lucide-react';
import { CategoryInfo, Snippet, ThemeMode } from '../types';

interface NewSnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (snippet: Snippet) => void;
  categories: CategoryInfo[];
  theme: ThemeMode;
}

const DEFAULT_TEMPLATE = `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 14px 24px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.06);
      font-size: 15px;
      font-weight: 600;
      color: #0f172a;
    }
  </style>
</head>
<body>
  <div class="badge">
    <span>✨ Nuovo Elemento HTML</span>
  </div>
</body>
</html>`;

export const NewSnippetModal: React.FC<NewSnippetModalProps> = ({
  isOpen,
  onClose,
  onSave,
  categories,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]?.id || 'bottoni');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState(DEFAULT_TEMPLATE);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !code.trim()) return;

    const newSnippet: Snippet = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category,
      code,
      description: description.trim() || undefined,
      isCustom: true,
      createdAt: Date.now(),
      filePath: `public/snippets/${category}/${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.html`,
    };

    onSave(newSnippet);
    onClose();
  };

  return (
    <div
      id="new-snippet-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
    >
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden text-slate-900">
        {/* Header */}
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-teal-600 text-white shadow-xs">
              <Plus size={16} />
            </span>
            <h2 className="text-base font-bold text-slate-900">
              Aggiungi Nuovo Snippet al Contenitore
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
          <div className="p-4 sm:p-5 space-y-3 shrink-0 border-b border-slate-200 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Title */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-700">
                  Titolo Snippet *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Es. Pulsante Gradiente Moderno"
                  className="w-full px-3 py-2 text-xs md:text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 outline-none transition-all"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-slate-700">
                  Categoria (Sottocartella in public/snippets/) *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs md:text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 outline-none transition-all"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-semibold mb-1 text-slate-700">
                Descrizione o note (opzionale)
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Breve nota sulle proprietà o uso dello snippet..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 outline-none transition-all"
              />
            </div>
          </div>

          {/* Code & Live Preview */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-slate-100">
            {/* HTML textarea */}
            <div className="h-full flex flex-col border-r border-slate-200 bg-white">
              <div className="px-3 py-1.5 border-b border-slate-200 text-xs font-mono font-semibold text-slate-600 bg-slate-50">
                Codice HTML
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="w-full flex-1 p-3 font-mono text-xs leading-relaxed outline-none resize-none border-0 bg-slate-50/50 text-slate-900"
                placeholder="Incolla qui il codice HTML completo..."
              />
            </div>

            {/* Live preview */}
            <div className="h-full flex flex-col bg-white">
              <div className="px-3 py-1.5 border-b border-slate-200 text-xs font-mono font-semibold text-slate-600 bg-slate-50">
                Anteprima Immediata
              </div>
              <div className="flex-1 overflow-hidden bg-white">
                <iframe
                  title="Nuovo Snippet Anteprima"
                  srcDoc={code}
                  sandbox="allow-scripts"
                  className="w-full h-full border-0 block"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Folder size={13} />
              Salvato in <code className="font-mono font-semibold text-slate-700">public/snippets/{category}/</code>
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              >
                Annulla
              </button>
              <button
                type="submit"
                disabled={!title.trim() || !code.trim()}
                className="px-4 py-1.5 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white transition-colors disabled:opacity-40 shadow-xs"
              >
                Aggiungi al Contenitore
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
