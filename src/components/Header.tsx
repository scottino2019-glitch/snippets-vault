import React, { useRef, useEffect, useState } from 'react';
import { Search, Plus, FolderUp, Code2, X, RefreshCw, HelpCircle, Palette, Check } from 'lucide-react';
import { NeutralTheme } from '../types';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalSnippets: number;
  filteredCount: number;
  onOpenAddModal: () => void;
  onOpenGuideModal: () => void;
  onTriggerFolderUpload: () => void;
  onRescanPublic: () => void;
  isRescanning: boolean;
  currentTheme: NeutralTheme;
  onThemeChange: (theme: NeutralTheme) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  totalSnippets,
  filteredCount,
  onOpenAddModal,
  onOpenGuideModal,
  onTriggerFolderUpload,
  onRescanPublic,
  isRescanning,
  currentTheme,
  onThemeChange,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  // Close theme menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Global shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement !== searchInputRef.current &&
        !(document.activeElement instanceof HTMLTextAreaElement) &&
        !(document.activeElement instanceof HTMLInputElement)
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const THEMES: { id: NeutralTheme; label: string; dotColor: string; desc: string }[] = [
    {
      id: 'warm-neutral',
      label: 'Neutro Caldo (Pietra & Lino)',
      dotColor: '#d7d3c8',
      desc: 'Tonalità morbida naturale, zero riflessi bianchi',
    },
    {
      id: 'cool-neutral',
      label: 'Neutro Grigio (Ardesia Soft)',
      dotColor: '#cbd1dc',
      desc: 'Grigio chiaro sobrio e riposante',
    },
    {
      id: 'charcoal-neutral',
      label: 'Neutro Carbone (Dark Soft)',
      dotColor: '#383c46',
      desc: 'Tono scuro satinato a basso contrasto',
    },
  ];

  return (
    <header 
      style={{
        backgroundColor: 'var(--header-bg)',
        borderColor: 'var(--border-color)',
      }}
      className="sticky top-0 z-30 backdrop-blur-md border-b transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
          
          {/* Brand & Stats */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-stone-800 text-stone-100 flex items-center justify-center shadow-xs">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 
                    style={{ color: 'var(--text-main)' }}
                    className="text-lg font-bold tracking-tight leading-none"
                  >
                    Snippet Vault
                  </h1>
                  <span 
                    style={{
                      backgroundColor: 'var(--toolbar-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-muted)'
                    }}
                    className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border"
                  >
                    {filteredCount === totalSnippets ? `${totalSnippets} snippet` : `${filteredCount} di ${totalSnippets}`}
                  </span>
                </div>
                <p 
                  style={{ color: 'var(--text-muted)' }}
                  className="text-xs mt-0.5"
                >
                  Libreria Snippet HTML &bull; Palette a Colori per Categoria
                </p>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center gap-1.5">
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                style={{
                  backgroundColor: 'var(--toolbar-bg)',
                  color: 'var(--text-main)',
                  borderColor: 'var(--border-color)'
                }}
                className="p-2 border rounded-lg transition"
                title="Scegli tonalità colore neutro"
              >
                <Palette className="w-4 h-4" />
              </button>

              <button
                onClick={onRescanPublic}
                disabled={isRescanning}
                style={{
                  backgroundColor: 'var(--toolbar-bg)',
                  color: 'var(--text-main)',
                  borderColor: 'var(--border-color)'
                }}
                className="p-2 border rounded-lg transition"
                title="Rileva modifiche in /public"
              >
                <RefreshCw className={`w-4 h-4 ${isRescanning ? 'animate-spin' : ''}`} />
              </button>

              <button
                onClick={onTriggerFolderUpload}
                style={{
                  backgroundColor: 'var(--toolbar-bg)',
                  color: 'var(--text-main)',
                  borderColor: 'var(--border-color)'
                }}
                className="p-2 border rounded-lg transition"
                title="Carica Cartella"
              >
                <FolderUp className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAddModal}
                className="p-2 bg-stone-800 text-stone-100 rounded-lg hover:bg-stone-700 transition shadow-xs"
                title="Aggiungi Snippet"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="w-full md:flex-1 max-w-xl relative">
            <div className="relative flex items-center">
              <Search 
                style={{ color: 'var(--text-subtle)' }}
                className="w-4 h-4 absolute left-3.5 pointer-events-none" 
              />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Cerca per titolo, tag, classe CSS o codice... ('/' per cercare)"
                style={{
                  backgroundColor: 'var(--input-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-main)'
                }}
                className="w-full pl-10 pr-16 py-2 border focus:outline-none focus:ring-2 focus:ring-stone-400/40 rounded-xl text-sm transition-all placeholder:text-stone-400"
              />
              <div className="absolute right-2.5 flex items-center gap-1">
                {searchQuery ? (
                  <button
                    onClick={() => onSearchChange('')}
                    style={{ color: 'var(--text-subtle)' }}
                    className="p-1 hover:opacity-80 rounded"
                    title="Cancella ricerca"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <kbd 
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-subtle)'
                    }}
                    className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono border rounded"
                  >
                    /
                  </kbd>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            
            {/* Neutral Color Palette Selector */}
            <div className="relative" ref={themeMenuRef}>
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-main)',
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition shadow-2xs active:scale-95 hover:opacity-90"
                title="Tonalità neutra riposante per gli occhi"
              >
                <Palette className="w-3.5 h-3.5 text-stone-500" />
                <span className="capitalize">{currentTheme === 'warm-neutral' ? 'Neutro Caldo' : currentTheme === 'cool-neutral' ? 'Neutro Grigio' : 'Neutro Scuro'}</span>
              </button>

              {isThemeMenuOpen && (
                <div 
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                  }}
                  className="absolute right-0 mt-2 w-64 rounded-2xl shadow-xl border p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="px-2.5 py-1.5 text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                    Scegli Tonalità Neutra
                  </div>
                  <div className="space-y-1">
                    {THEMES.map((th) => (
                      <button
                        key={th.id}
                        onClick={() => {
                          onThemeChange(th.id);
                          setIsThemeMenuOpen(false);
                        }}
                        style={{
                          backgroundColor: currentTheme === th.id ? 'var(--toolbar-bg)' : 'transparent',
                          color: 'var(--text-main)',
                        }}
                        className="w-full flex items-center justify-between p-2 rounded-xl text-xs text-left transition hover:opacity-90"
                      >
                        <div className="flex items-center gap-2.5">
                          <span 
                            className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0" 
                            style={{ backgroundColor: th.dotColor }}
                          />
                          <div>
                            <p className="font-semibold leading-tight">{th.label}</p>
                            <p style={{ color: 'var(--text-subtle)' }} className="text-[10px] mt-0.5">{th.desc}</p>
                          </div>
                        </div>
                        {currentTheme === th.id && (
                          <Check className="w-4 h-4 text-stone-700 shrink-0 ml-1" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Rescan /public button */}
            <button
              onClick={onRescanPublic}
              disabled={isRescanning}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-main)',
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition shadow-2xs active:scale-95 disabled:opacity-50 hover:opacity-90"
              title="Scansiona automaticamente la cartella public/snippets del progetto"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRescanning ? 'animate-spin' : ''}`} />
              <span>{isRescanning ? 'Rilevamento...' : 'Rileva da /public'}</span>
            </button>

            {/* Folder upload button */}
            <button
              onClick={onTriggerFolderUpload}
              style={{
                backgroundColor: 'var(--toolbar-bg)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-main)',
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition shadow-2xs active:scale-95 hover:opacity-90"
              title="Carica un'intera cartella di file HTML o React dal computer"
            >
              <FolderUp className="w-3.5 h-3.5" />
              <span>Carica Cartella</span>
            </button>

            {/* New snippet button */}
            <button
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-100 bg-stone-800 hover:bg-stone-700 active:bg-stone-900 rounded-xl transition shadow-2xs active:scale-95"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Nuovo Snippet</span>
            </button>

            {/* Help / Guide */}
            <button
              onClick={onOpenGuideModal}
              style={{
                color: 'var(--text-subtle)',
              }}
              className="p-2 hover:opacity-80 rounded-xl transition"
              title="Come funziona il rilevamento automatico"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
