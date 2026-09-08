import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Sun, 
  Moon, 
  RotateCw, 
  Code2, 
  Eye, 
  Save,
  Trash2,
  Tag
} from 'lucide-react';
import { Snippet } from '../types';
import { generateIframeDoc } from '../utils/previewRunner';
import { getCategoryConfig } from '../data/defaultSnippets';

interface SnippetDetailModalProps {
  snippet: Snippet | null;
  onClose: () => void;
  onUpdateSnippet?: (updated: Snippet) => void;
  onDeleteSnippet?: (id: string) => void;
}

export const SnippetDetailModal: React.FC<SnippetDetailModalProps> = ({
  snippet,
  onClose,
  onUpdateSnippet,
  onDeleteSnippet,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'split'>('split');
  const [editedCode, setEditedCode] = useState(snippet ? snippet.code : '');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isDarkPreview, setIsDarkPreview] = useState(false);
  const [copied, setCopied] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync edited code if snippet changes
  useEffect(() => {
    if (snippet) {
      setEditedCode(snippet.code);
    }
  }, [snippet]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const categoryTheme = snippet ? getCategoryConfig(snippet.category) : null;

  const iframeSrcDoc = useMemo(() => {
    if (!snippet) return '';
    return generateIframeDoc(editedCode, 'html', isDarkPreview);
  }, [editedCode, isDarkPreview, refreshKey, snippet]);

  if (!snippet || !categoryTheme) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(editedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = `${snippet.id}.html`;
    const blob = new Blob([editedCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleSave = () => {
    if (onUpdateSnippet) {
      onUpdateSnippet({
        ...snippet,
        code: editedCode,
      });
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2000);
    }
  };

  const viewportWidthClass = {
    desktop: 'w-full',
    tablet: 'w-[768px] max-w-full',
    mobile: 'w-[375px] max-w-full',
  }[viewport];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--border-color)',
          borderTopColor: categoryTheme.hex,
          borderTopWidth: '4px',
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl rounded-2xl shadow-2xl border flex flex-col max-h-[92vh] overflow-hidden cursor-default"
      >
        
        {/* Header */}
        <div 
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-subtle)',
          }}
          className="flex items-center justify-between px-5 py-3.5 border-b shrink-0 flex-wrap gap-2"
        >
          <div className="flex items-center gap-3">
            {/* Category colored badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border ${categoryTheme.badgeClass}`}
            >
              <span className={`w-2 h-2 rounded-full ${categoryTheme.badgeDot}`}></span>
              {categoryTheme.name}
            </span>

            <span 
              style={{
                backgroundColor: 'var(--toolbar-bg)',
                color: 'var(--text-muted)',
              }}
              className="px-2 py-0.5 rounded text-[11px] font-mono"
            >
              HTML
            </span>

            <div>
              <h2 
                style={{ color: 'var(--text-main)' }}
                className="text-base font-bold"
              >
                {snippet.title}
              </h2>
              {snippet.path && (
                <p 
                  style={{ color: 'var(--text-subtle)' }}
                  className="text-xs font-mono"
                >
                  {snippet.path}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab selector */}
            <div 
              style={{
                backgroundColor: 'var(--toolbar-bg)',
                borderColor: 'var(--border-color)',
              }}
              className="hidden sm:flex items-center p-1 rounded-xl border"
            >
              <button
                type="button"
                onClick={() => setActiveTab('split')}
                style={activeTab === 'split' ? {
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--text-main)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                } : {
                  color: 'var(--text-muted)',
                }}
                className="px-3 py-1 text-xs font-semibold rounded-lg transition cursor-pointer"
              >
                Diviso (Split)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                style={activeTab === 'preview' ? {
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--text-main)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                } : {
                  color: 'var(--text-muted)',
                }}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Anteprima
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                style={activeTab === 'code' ? {
                  backgroundColor: 'var(--card-bg)',
                  color: 'var(--text-main)',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                } : {
                  color: 'var(--text-muted)',
                }}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition cursor-pointer"
              >
                <Code2 className="w-3.5 h-3.5" />
                Codice
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-stone-800 text-stone-100 hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiato!' : 'Copia'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              style={{ color: 'var(--text-muted)' }}
              className="p-2 hover:opacity-80 rounded-xl transition cursor-pointer"
              title="Scarica file .html"
            >
              <Download className="w-4 h-4" />
            </button>

            {onDeleteSnippet && (
              <button
                type="button"
                onClick={() => {
                  onDeleteSnippet(snippet.id);
                  onClose();
                }}
                className="p-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition cursor-pointer"
                title="Elimina snippet"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              style={{ color: 'var(--text-muted)' }}
              className="p-2 hover:opacity-80 rounded-xl transition cursor-pointer ml-1"
              title="Chiudi finestra (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
          
          {/* Preview Section */}
          {(activeTab === 'preview' || activeTab === 'split') && (
            <div 
              style={{ borderColor: 'var(--border-subtle)' }}
              className={`flex flex-col flex-1 min-h-[360px] md:min-h-0 ${
                activeTab === 'split' ? 'border-b md:border-b-0 md:border-r' : ''
              }`}
            >
              {/* Preview Controls Toolbar */}
              <div 
                style={{
                  backgroundColor: 'var(--toolbar-bg)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-muted)',
                }}
                className="flex items-center justify-between px-4 py-2 border-b text-xs shrink-0"
              >
                {/* Viewport switcher */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setViewport('desktop')}
                    style={viewport === 'desktop' ? {
                      backgroundColor: 'var(--card-bg)',
                      color: 'var(--text-main)',
                    } : {}}
                    className="p-1.5 rounded-lg transition hover:opacity-80 cursor-pointer"
                    title="Visualizzazione Desktop (100%)"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('tablet')}
                    style={viewport === 'tablet' ? {
                      backgroundColor: 'var(--card-bg)',
                      color: 'var(--text-main)',
                    } : {}}
                    className="p-1.5 rounded-lg transition hover:opacity-80 cursor-pointer"
                    title="Visualizzazione Tablet (768px)"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('mobile')}
                    style={viewport === 'mobile' ? {
                      backgroundColor: 'var(--card-bg)',
                      color: 'var(--text-main)',
                    } : {}}
                    className="p-1.5 rounded-lg transition hover:opacity-80 cursor-pointer"
                    title="Visualizzazione Mobile (375px)"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Dark / Refresh */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setIsDarkPreview(!isDarkPreview)}
                    className="p-1.5 rounded-lg hover:opacity-80 transition cursor-pointer flex items-center gap-1"
                    title={isDarkPreview ? 'Passa a sfondo chiaro' : 'Passa a sfondo scuro'}
                  >
                    {isDarkPreview ? <Sun className="w-3.5 h-3.5 text-amber-500" /> : <Moon className="w-3.5 h-3.5" />}
                    <span className="text-[11px] hidden sm:inline">
                      {isDarkPreview ? 'Chiaro' : 'Scuro'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setRefreshKey((k) => k + 1)}
                    className="p-1.5 rounded-lg hover:opacity-80 transition cursor-pointer flex items-center gap-1"
                    title="Ricarica canvas"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span className="text-[11px] hidden sm:inline">Ricarica</span>
                  </button>
                </div>
              </div>

              {/* Iframe Viewport Container */}
              <div 
                style={{
                  backgroundColor: isDarkPreview ? '#090d16' : '#f1f5f9',
                }}
                className="flex-1 overflow-auto flex items-center justify-center p-4 transition-colors"
              >
                <div 
                  className={`${viewportWidthClass} h-full min-h-[320px] transition-all duration-300 rounded-xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-800 bg-transparent flex flex-col`}
                >
                  <iframe
                    key={`modal-iframe-${snippet.id}-${refreshKey}-${isDarkPreview ? 'dark' : 'light'}`}
                    srcDoc={iframeSrcDoc}
                    title={snippet.title}
                    sandbox="allow-scripts allow-modals"
                    className="w-full flex-1 border-0"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Code Section */}
          {(activeTab === 'code' || activeTab === 'split') && (
            <div className="flex flex-col flex-1 min-h-[300px] md:min-h-0 bg-[#0f172a] text-slate-100 font-mono text-xs">
              
              {/* Code Toolbar */}
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-slate-400 shrink-0">
                <span className="font-sans font-semibold text-slate-300 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${categoryTheme.badgeDot}`}></span>
                  snippet.html (Modifica in tempo reale)
                </span>
                <div className="flex items-center gap-2">
                  {onUpdateSnippet && (
                    <button
                      type="button"
                      onClick={handleSave}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-sans font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition cursor-pointer"
                    >
                      {savedSuccess ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Salvato!</span>
                        </>
                      ) : (
                        <>
                          <Save className="w-3 h-3" />
                          <span>Salva</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Code Textarea Editor */}
              <textarea
                value={editedCode}
                onChange={(e) => setEditedCode(e.target.value)}
                spellCheck={false}
                placeholder="Incolla o modifica qui il codice HTML e Tailwind..."
                className="flex-1 w-full p-4 bg-transparent text-slate-200 resize-none focus:outline-none font-mono leading-relaxed selection:bg-indigo-500/30 overflow-auto"
              />
            </div>
          )}
        </div>

        {/* Footer info & tags */}
        <div 
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border-subtle)',
          }}
          className="px-5 py-3 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span style={{ color: 'var(--text-muted)' }} className="font-medium flex items-center gap-1">
              <Tag className="w-3 h-3" />
              Tag:
            </span>
            {snippet.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: 'var(--toolbar-bg)',
                  color: 'var(--text-muted)',
                }}
                className="px-2 py-0.5 rounded-md font-mono text-[11px]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              style={{
                backgroundColor: 'var(--toolbar-bg)',
                color: 'var(--text-main)',
                borderColor: 'var(--border-color)',
              }}
              className="px-3.5 py-1.5 rounded-xl border text-xs font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Chiudi
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
