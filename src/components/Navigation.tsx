
import React from 'react';
import { Menu, Search } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 text-white">
      <button className="flex items-center gap-2 text-sm font-medium tracking-wide">
        <Menu size={20} />
        MENU
      </button>
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl font-bold tracking-wider">A24</h1>
      </div>
      
      <button>
        <Search size={20} />
      </button>
    </nav>
  );
};

export default Navigation;
