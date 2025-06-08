
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Tables } from '@/integrations/supabase/types';
import FilmList from './FilmList';

type Film = Tables<'films'>;

const FilmShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fetch films from Supabase
  const { data: films = [], isLoading } = useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('films')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) {
        console.error('Error fetching films:', error);
        throw error;
      }
      
      return data;
    },
  });

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (films.length === 0) return;
    
    const interval = setInterval(() => {
      handleFilmChange((activeIndex + 1) % films.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, films.length]);

  const handleFilmChange = (index: number) => {
    if (index === activeIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-lg">Loading films...</div>
      </div>
    );
  }

  if (films.length === 0) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-lg">No films available</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Images */}
      {films.map((film, index) => (
        <div
          key={film.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex && !isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${film.image_url})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Film List */}
      <FilmList 
        films={films}
        activeIndex={activeIndex}
        onFilmClick={handleFilmChange}
      />

      {/* Scroll Indicator */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="animate-bounce text-white/60 hover:text-white transition-colors">
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default FilmShowcase;
