import React, { useEffect } from 'react';
import { X, Folder, RefreshCw, Sparkles, FolderUp, CheckCircle2, Layers } from 'lucide-react';

interface PublicFolderGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReloadPublic: () => void;
  onTriggerFolderUpload: () => void;
  isReloading: boolean;
}

export const PublicFolderGuideModal: React.FC<PublicFolderGuideModalProps> = ({
  isOpen,
  onClose,
  onReloadPublic,
  onTriggerFolderUpload,
  isReloading,
}) => {
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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200 cursor-pointer"
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--border-color)',
        }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl shadow-2xl border flex flex-col max-h-[90vh] overflow-hidden cursor-default"
      >
        
        {/* Header */}
        <div 
          style={{ borderColor: 'var(--border-subtle)' }}
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-stone-800 text-stone-100 flex items-center justify-center">
              <Folder className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 
                  style={{ color: 'var(--text-main)' }}
                  className="text-base font-bold"
                >
                  Caricamento Snippet Semplice
                </h2>
                <span 
                  style={{
                    backgroundColor: 'var(--toolbar-bg)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-main)',
                  }}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                >
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  Nessun manifest richiesto
                </span>
              </div>
              <p 
                style={{ color: 'var(--text-muted)' }}
                className="text-xs"
              >
                Non serve scrivere codice di configurazione né file JSON
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ color: 'var(--text-muted)' }}
            className="p-1.5 hover:opacity-80 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 text-xs leading-relaxed">
          
          {/* Quick Explanation Banner */}
          <div 
            style={{
              backgroundColor: 'var(--toolbar-bg)',
              borderColor: 'var(--border-color)',
            }}
            className="p-4 border rounded-xl space-y-1.5"
          >
            <div 
              style={{ color: 'var(--text-main)' }}
              className="flex items-center gap-2 font-bold text-sm"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Rilevamento Automatico al 100%
            </div>
            <p 
              style={{ color: 'var(--text-muted)' }}
              className="text-xs"
            >
              I file caricati vengono scansionati automaticamente dal sistema. Il titolo viene ricavato dal nome del file, la categoria dalla cartella o dai tag, e l&apos;anteprima viene generata istantaneamente.
            </p>
          </div>

          {/* 2 Ways to add snippets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Method 1 */}
            <div 
              style={{
                backgroundColor: 'var(--input-bg)',
                borderColor: 'var(--border-subtle)',
              }}
              className="p-4 rounded-xl border flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div 
                  style={{ color: 'var(--text-main)' }}
                  className="flex items-center gap-2 font-bold text-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center text-xs">1</span>
                  Copia in <code className="text-xs font-mono font-bold">/public/snippets/</code>
                </div>
                <p 
                  style={{ color: 'var(--text-muted)' }}
                  className="text-xs"
                >
                  Trascina o incolla i tuoi file <code className="font-mono">.html</code> dentro la cartella <code className="font-mono">public/snippets/</code> dell&apos;app.
                </p>
              </div>
              <div 
                style={{ borderColor: 'var(--border-subtle)' }}
                className="pt-3 mt-3 border-t"
              >
                <button
                  onClick={onReloadPublic}
                  disabled={isReloading}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-100 transition active:scale-95 disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isReloading ? 'animate-spin' : ''}`} />
                  <span>{isReloading ? 'Scansione in corso...' : 'Rileva File da /public Ora'}</span>
                </button>
              </div>
            </div>

            {/* Method 2 */}
            <div 
              style={{
                backgroundColor: 'var(--input-bg)',
                borderColor: 'var(--border-subtle)',
              }}
              className="p-4 rounded-xl border flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div 
                  style={{ color: 'var(--text-main)' }}
                  className="flex items-center gap-2 font-bold text-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-stone-800 text-stone-100 flex items-center justify-center text-xs">2</span>
                  Importa o Trascina Cartella
                </div>
                <p 
                  style={{ color: 'var(--text-muted)' }}
                  className="text-xs"
                >
                  Seleziona un&apos;intera cartella con decine o centinaia di snippet dal tuo computer, oppure trascinala direttamente sulla schermata dell&apos;app!
                </p>
              </div>
              <div 
                style={{ borderColor: 'var(--border-subtle)' }}
                className="pt-3 mt-3 border-t"
              >
                <button
                  onClick={() => {
                    onClose();
                    onTriggerFolderUpload();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-100 transition active:scale-95"
                >
                  <FolderUp className="w-3.5 h-3.5" />
                  <span>Carica Cartella dal Computer</span>
                </button>
              </div>
            </div>

          </div>

          {/* Directory Tree Example */}
          <div className="space-y-2">
            <span 
              style={{ color: 'var(--text-main)' }}
              className="font-bold flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-stone-600" />
              Come organizzare le cartelle per le categorie:
            </span>
            <div className="p-3.5 bg-[#1a1b1e] text-stone-200 rounded-xl font-mono text-[11px] leading-snug overflow-x-auto border border-stone-800">
              <p className="text-amber-400">📁 public/snippets/</p>
              <p className="text-stone-300 ml-4">├── 📁 buttons/          <span className="text-stone-500">→ categoria &quot;Pulsanti &amp; CTA&quot;</span></p>
              <p className="text-stone-400 ml-8">└── glow-button.html</p>
              <p className="text-stone-300 ml-4">├── 📁 cards/            <span className="text-stone-500">→ categoria &quot;Schede &amp; Card&quot;</span></p>
              <p className="text-stone-400 ml-8">└── pricing-card.html</p>
              <p className="text-stone-300 ml-4">├── 📁 forms/            <span className="text-stone-500">→ categoria &quot;Moduli &amp; Input&quot;</span></p>
              <p className="text-stone-400 ml-8">└── newsletter-form.html</p>
              <p className="text-sky-300 ml-4">└── 📁 react/            <span className="text-stone-500">→ componenti React interattivi (JSX / TSX)</span></p>
              <p className="text-stone-400 ml-8">├── interactive-counter.jsx</p>
              <p className="text-stone-400 ml-8">└── metric-badge.tsx</p>
            </div>
            <p 
              style={{ color: 'var(--text-subtle)' }}
              className="text-[11px] italic"
            >
              * Nota: se lasci tutti i file in una sola cartella, l&apos;app dedurrà comunque la categoria e i tag dal nome e dal contenuto del file!
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
