
import React from 'react';
import { Menu, Search } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 text-white">
      {/* <button className="flex items-center gap-2 text-sm font-medium tracking-wide">
        <Menu size={20} />
        MENU
      </button> */}
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        {
          [
            // { name: "Muhammed Shahed", font: "'Pacifico', cursive" },
            // { name: "Creative Coder", font: "'Dancing Script', cursive" },
            // { name: "Web Innovator", font: "'Great Vibes', cursive" },
            // { name: "Digital Artist", font: "'Allura', cursive" },
            // { name: "Tech Enthusiast", font: "'Sacramento', cursive" },
            // { name: "Code Whisperer", font: "'Caveat', cursive" },
            // { name: "Pixel Perfect", font: "'Indie Flower', cursive" },
            // { name: "Design Thinker", font: "'Shadows Into Light', cursive" },
            // { name: "Solution Architect", font: "'Permanent Marker', cursive" },
            { name: "Muhammed Shahed", font: "'Architects Daughter', cursive" },
          ].map((item, index) => (
            <h1 key={index} className="text-4xl mt-5 font-bold tracking-wider" style={{ fontFamily: item.font }}>
              {item.name}
            </h1>
          ))
        }
      </div>
      
    </nav>
  );
};

export default Navigation;
