
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import FilmList from './FilmList';

const films = [
  {
    id: 1,
    title: "Bring Her Back",
    year: "2025",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 2,
    title: "Friendship",
    year: "2025", 
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 3,
    title: "Materialists",
    year: "2025",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 4,
    title: "Sorry, Baby",
    year: "2025",
    image: "https://images.unsplash.com/photo-1494790108755-2616c3e0a9f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 5,
    title: "Eddington",
    year: "2025",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 6,
    title: "The Smashing Machine",
    year: "2025",
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  }
];

const FilmShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleFilmChange((activeIndex + 1) % films.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleFilmChange = (index: number) => {
    if (index === activeIndex) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

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
            style={{ backgroundImage: `url(${film.image})` }}
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
