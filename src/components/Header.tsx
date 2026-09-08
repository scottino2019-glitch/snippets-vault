import React from 'react';
import {
  Search,
  Plus,
  FolderDown,
  LayoutGrid,
  Rows3,
  X,
  Boxes,
  Sparkles,
  Compass,
} from 'lucide-react';
import { CategoryInfo, ThemeMode, LayoutMode } from '../types';

interface HeaderProps {
  categories: CategoryInfo[];
  selectedCategory: string | null;
  onSelectCategory: (catId: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  layoutMode: LayoutMode;
  onChangeLayoutMode: (mode: LayoutMode) => void;
  onOpenNewSnippetModal: () => void;
  onOpenImportModal: () => void;
  snippetCount: number;
  totalSnippetCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  theme,
  onToggleTheme,
  layoutMode,
  onChangeLayoutMode,
  onOpenNewSnippetModal,
  onOpenImportModal,
  snippetCount,
  totalSnippetCount,
}) => {
  const isLight = theme === 'light';

  return (
    <header
      id="app-header"
      className="bg-white border-b border-slate-200 shrink-0 transition-colors shadow-xs"
    >
      {/* 1. Main Brand & Search Bar Row */}
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Brand info */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center font-bold text-base shadow-xs text-teal-700">
            <Boxes size={22} className="stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1
                id="app-title"
                className="text-base sm:text-lg font-bold tracking-tight text-slate-900"
              >
                Snippet HTML Studio
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                {snippetCount} {snippetCount === 1 ? 'elemento' : 'elementi'}
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-none mt-0.5">
              Contenitore e anteprima diretta per frammenti HTML
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-xl mx-0 md:mx-4">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              id="search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cerca per titolo, categoria, tag o codice HTML... (Ctrl+K)"
              className="w-full pl-10 pr-9 py-2 rounded-xl text-xs md:text-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-600/15 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 rounded"
                title="Cancella ricerca"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 shrink-0 justify-end">
          {/* Layout switcher: Griglia / Lista */}
          <div
            className="flex items-center rounded-xl p-1 bg-slate-100 border border-slate-200 text-xs"
            title="Cambia disposizione schede"
          >
            <button
              onClick={() => onChangeLayoutMode('grid')}
              className={`p-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                layoutMode === 'grid'
                  ? 'bg-white font-bold text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Vista Griglia (2 colonne)"
            >
              <LayoutGrid size={15} />
              <span className="hidden xl:inline text-xs">Griglia</span>
            </button>
            <button
              onClick={() => onChangeLayoutMode('stack')}
              className={`p-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                layoutMode === 'stack'
                  ? 'bg-white font-bold text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
              title="Vista Lista estesa (1 colonna)"
            >
              <Rows3 size={15} />
              <span className="hidden xl:inline text-xs">Lista</span>
            </button>
          </div>

          {/* Theme switcher: Azzurro Medio vs Azzurro Profondo */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white text-slate-800 hover:border-slate-300 text-xs font-semibold transition-all shadow-xs"
            title={`Tonalità sfondo: ${isLight ? 'Azzurro Mediterraneo' : 'Azzurro Oceano'}. Clicca per alternare`}
          >
            <Sparkles size={14} className="text-teal-600" />
            <span className="hidden lg:inline">{isLight ? 'Azzurro Medio' : 'Azzurro Profondo'}</span>
          </button>

          {/* Importa HTML */}
          <button
            onClick={onOpenImportModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-semibold transition-all shadow-xs"
            title="Importa file HTML da cartella locale"
          >
            <FolderDown size={14} className="text-teal-600" />
            <span className="hidden sm:inline">Importa HTML</span>
          </button>

          {/* Nuovo Snippet */}
          <button
            onClick={onOpenNewSnippetModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-colors"
            title="Aggiungi un nuovo snippet al contenitore"
          >
            <Plus size={15} className="stroke-[2.5]" />
            <span>Nuovo Snippet</span>
          </button>
        </div>
      </div>

      {/* 2. Distinctive Category Filter Row */}
      <div className="px-4 sm:px-6 py-2 bg-slate-50/80 border-t border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[11px] font-bold tracking-wide uppercase text-slate-500 shrink-0 mr-1 flex items-center gap-1">
          <Compass size={12} />
          Filtra:
        </span>

        {/* Filter Pill: Tutti */}
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
            selectedCategory === null
              ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          Tutti ({totalSnippetCount})
        </button>

        {/* Category Pills */}
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(isSelected ? null : cat.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all border shadow-xs ${
                isSelected
                  ? 'text-white border-transparent'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
              style={{
                backgroundColor: isSelected ? cat.headerHex : undefined,
                borderColor: isSelected ? cat.headerHex : undefined,
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: isSelected ? '#ffffff' : cat.headerHex }}
              />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
