
import React from 'react';
import { Menu, Search } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 text-white">
      {/* <button className="flex items-center gap-2 text-sm font-medium tracking-wide">
        <Menu size={20} />
        MENU
      </button> */}
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl mt-3 font-bold tracking-wider">Muhammed Shahed</h1>
      </div>
      
    </nav>
  );
};

export default Navigation;
