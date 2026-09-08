import React, { useState, useMemo, useEffect } from 'react';
import { X, Upload, Plus, Code2, Sparkles, Check } from 'lucide-react';
import { Snippet, SnippetCategory } from '../types';
import { CATEGORIES_CONFIG, getCategoryConfig } from '../data/defaultSnippets';
import { generateIframeDoc } from '../utils/previewRunner';

interface AddSnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSnippet: (snippet: Snippet) => void;
}

export const AddSnippetModal: React.FC<AddSnippetModalProps> = ({
  isOpen,
  onClose,
  onAddSnippet,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<SnippetCategory>('buttons');
  const [tagsInput, setTagsInput] = useState('custom, ui');
  const [code, setCode] = useState('<button class="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-semibold shadow-md transition active:scale-95 cursor-pointer">\n  ✨ Nuovo Componente\n</button>');
  const [isDragOver, setIsDragOver] = useState(false);

  // Close on Escape key press
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

  // Live mini preview in modal
  const iframeDoc = useMemo(() => {
    if (!isOpen) return '';
    return generateIframeDoc(code, 'html', false);
  }, [code, isOpen]);

  const selectedCatTheme = getCategoryConfig(category);

  if (!isOpen) return null;

  const handleFileUpload = (file: File) => {
    // Title from file name
    const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    setTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));

    const reader = new FileReader();
    reader.onload = (e) => {
      let text = e.target?.result as string;
      if (text) {
        text = text.replace(/\bclassName=/g, 'class=');
        setCode(text);
      }
    };
    reader.readAsText(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !code.trim()) return;

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);

    const newSnippet: Snippet = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      category,
      type: 'html',
      tags: tags.length > 0 ? tags : ['html', 'snippet'],
      code: code.trim(),
      path: `/snippets/${category}/${title.toLowerCase().replace(/\s+/g, '-')}.html`,
      isCustom: true,
      createdAt: new Date().toISOString().split('T')[0],
      favorite: false,
    };

    onAddSnippet(newSnippet);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--border-color)',
          borderTopColor: selectedCatTheme.hex,
          borderTopWidth: '4px',
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl shadow-2xl border flex flex-col max-h-[90vh] overflow-hidden cursor-default transition-all"
      >
        {/* Header */}
        <div 
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-subtle)',
          }}
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
        >
          <div className="flex items-center gap-2.5">
            <div 
              style={{
                backgroundColor: `${selectedCatTheme.hex}20`,
                color: selectedCatTheme.hex,
              }}
              className="w-8 h-8 rounded-xl flex items-center justify-center"
            >
              <Plus className="w-5 h-5" />
            </div>
            <div>
              <h2 
                style={{ color: 'var(--text-main)' }}
                className="text-base font-bold"
              >
                Aggiungi Snippet HTML
              </h2>
              <p 
                style={{ color: 'var(--text-muted)' }}
                className="text-xs"
              >
                Crea o incolla un nuovo componente HTML con Tailwind CSS
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            style={{ color: 'var(--text-muted)' }}
            className="p-2 hover:opacity-80 rounded-xl transition cursor-pointer"
            title="Chiudi (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          
          {/* Title & Description */}
          <div className="space-y-4">
            <div>
              <label 
                style={{ color: 'var(--text-main)' }}
                className="block text-xs font-bold mb-1.5"
              >
                Titolo Snippet *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Es. Pulsante Fluttuante, Scheda Statistiche..."
                style={{
                  backgroundColor: 'var(--input-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-main)',
                }}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </div>

            <div>
              <label 
                style={{ color: 'var(--text-main)' }}
                className="block text-xs font-bold mb-1.5"
              >
                Descrizione Breve
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Breve spiegazione del componente o del suo utilizzo..."
                style={{
                  backgroundColor: 'var(--input-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-main)',
                }}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-stone-400"
              />
            </div>
          </div>

          {/* Category selection with individual distinct colors */}
          <div>
            <label 
              style={{ color: 'var(--text-main)' }}
              className="block text-xs font-bold mb-2 flex items-center justify-between"
            >
              <span>Categoria e Colore Tematico *</span>
              <span className={`inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md border ${selectedCatTheme.badgeClass}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${selectedCatTheme.badgeDot}`}></span>
                Colore: {selectedCatTheme.shortLabel}
              </span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CATEGORIES_CONFIG.filter((c) => c.id !== 'all').map((cat) => {
                const isSelected = category === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id as SnippetCategory)}
                    style={isSelected ? {
                      borderColor: cat.hex,
                      boxShadow: `0 0 0 1px ${cat.hex}`,
                    } : {
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-main)',
                    }}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition cursor-pointer text-xs font-medium ${
                      isSelected ? `${cat.badgeClass} font-bold` : 'hover:opacity-80'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${cat.badgeDot} shrink-0`}></span>
                    <span className="truncate">{cat.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tags */}
          <div>
            <label 
              style={{ color: 'var(--text-main)' }}
              className="block text-xs font-bold mb-1.5"
            >
              Tag (separati da virgola)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="button, glow, primary, tailwind"
              style={{
                backgroundColor: 'var(--input-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-main)',
              }}
              className="w-full px-3.5 py-2 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-stone-400 font-mono"
            />
          </div>

          {/* Dropzone for file */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragOver(false);
              if (e.dataTransfer.files?.[0]) handleFileUpload(e.dataTransfer.files[0]);
            }}
            style={{
              backgroundColor: isDragOver ? 'var(--toolbar-bg)' : 'var(--input-bg)',
              borderColor: isDragOver ? selectedCatTheme.hex : 'var(--border-color)',
            }}
            className="border-2 border-dashed rounded-2xl p-4 text-center transition cursor-pointer"
            onClick={() => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = '.html,.htm';
              input.onchange = (ev: any) => {
                if (ev.target.files?.[0]) handleFileUpload(ev.target.files[0]);
              };
              input.click();
            }}
          >
            <Upload className="w-5 h-5 mx-auto mb-1 opacity-70" />
            <p style={{ color: 'var(--text-main)' }} className="text-xs font-medium">
              Trascina un file <strong className="underline">.html</strong> qui oppure clicca per caricarlo
            </p>
          </div>

          {/* Code input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label 
                style={{ color: 'var(--text-main)' }}
                className="block text-xs font-bold"
              >
                Codice HTML &amp; Tailwind *
              </label>
              <span style={{ color: 'var(--text-subtle)' }} className="text-[11px]">
                Supporta classi Tailwind ed elementi HTML5 nativi
              </span>
            </div>
            <textarea
              required
              rows={7}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="<div class=&quot;p-4 bg-white rounded-xl shadow&quot;>...</div>"
              className="w-full p-3.5 bg-[#0f172a] text-slate-100 font-mono text-xs rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-stone-400 resize-y"
            />
          </div>

          {/* Live Preview in Modal */}
          <div>
            <label 
              style={{ color: 'var(--text-main)' }}
              className="block text-xs font-bold mb-1.5"
            >
              Anteprima Istantanea
            </label>
            <div 
              style={{ borderColor: 'var(--border-color)' }}
              className="h-32 w-full rounded-xl overflow-hidden border bg-slate-50 relative"
            >
              <iframe
                srcDoc={iframeDoc}
                title="Mini Preview"
                sandbox="allow-scripts"
                className="w-full h-full border-0 pointer-events-none"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div 
            style={{ borderColor: 'var(--border-subtle)' }}
            className="pt-4 border-t flex items-center justify-end gap-2.5"
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: 'var(--toolbar-bg)',
                color: 'var(--text-main)',
                borderColor: 'var(--border-color)',
              }}
              className="px-4 py-2 text-xs font-semibold rounded-xl border transition hover:opacity-80 cursor-pointer"
            >
              Annulla
            </button>
            <button
              type="submit"
              disabled={!title.trim() || !code.trim()}
              style={{
                backgroundColor: selectedCatTheme.hex,
                color: '#ffffff',
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-xl shadow-sm transition hover:opacity-90 disabled:opacity-50 cursor-pointer active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Aggiungi Snippet</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
