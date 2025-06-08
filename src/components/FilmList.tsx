
import React from 'react';
import { Tables } from '@/integrations/supabase/types';

type Film = Tables<'films'>;

interface FilmListProps {
  films: Film[];
  activeIndex: number;
  onFilmClick: (index: number) => void;
}

const FilmList = ({ films, activeIndex, onFilmClick }: FilmListProps) => {
  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div className="space-y-1">
        {films.map((film, index) => (
          <button
            key={film.id}
            onClick={() => onFilmClick(index)}
            className={`block text-left transition-all duration-300 hover:opacity-100 ${
              index === activeIndex 
                ? 'opacity-100 text-white text-4xl md:text-5xl lg:text-6xl font-bold' 
                : 'opacity-60 text-white/60 text-xl md:text-2xl hover:text-white/80'
            }`}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-serif leading-tight">{film.title}</span>
              <span className="text-base md:text-lg font-light opacity-75">{film.year}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilmList;
