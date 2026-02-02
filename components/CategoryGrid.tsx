
import React from 'react';
import { CATEGORIES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const CategoryGrid: React.FC = () => {
  return (
    <section id="catalogue" className="py-20 lg:py-40 bg-brand-cream/30">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-32 gap-8 lg:gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] text-brand-red mb-4 lg:mb-6 block">Our Inventory</span>
            <h2 className="text-5xl lg:text-8xl font-serif font-extrabold text-brand-blue leading-none mb-6 lg:mb-10 italic">The Catalogue.</h2>
            <p className="text-xl lg:text-2xl text-brand-blue/50 font-medium leading-relaxed italic">
              A curated selection of the world's most evocative strategy systems and artisan hobby supplies.
            </p>
          </div>
          <div className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue/20 border-b border-brand-blue/10 pb-4 w-full lg:w-auto">
            Browse by Department
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {CATEGORIES.map((cat) => (
            <a 
              key={cat.id} 
              href="https://wolt.com/mt/mlt/malta/venue/forbidden-power" 
              target="_blank"
              className="group flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 lg:mb-8 bg-white editorial-shadow rounded-2xl lg:rounded-none">
                <img 
                  src={cat.imageUrl} 
                  alt={cat.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 bg-brand-blue/80 backdrop-blur-md text-white flex items-center justify-center lg:opacity-0 group-hover:opacity-100 transition-all transform lg:translate-y-4 group-hover:translate-y-0">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                  <div className="w-1.5 h-1.5 bg-brand-red"></div>
                  <h3 className="font-serif font-extrabold text-xl lg:text-2xl text-brand-blue uppercase tracking-tight">{cat.title}</h3>
                </div>
                <p className="text-brand-blue/40 text-sm font-medium leading-relaxed mb-6 lg:mb-8 min-h-0 lg:min-h-[60px] italic">{cat.description}</p>
                <div className="flex flex-wrap gap-2 pt-4 lg:pt-6 border-t border-brand-blue/5">
                  {cat.brands.slice(0, 2).map(brand => (
                    <span key={brand} className="text-[8px] lg:text-[9px] font-bold uppercase tracking-widest text-brand-blue/30">
                      {brand}
                    </span>
                  ))}
                  {cat.brands.length > 2 && <span className="text-[8px] lg:text-[9px] font-bold uppercase tracking-widest text-brand-blue/10">+ more</span>}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Atelier Spotlight */}
        <div className="mt-24 lg:mt-40 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="relative group overflow-hidden editorial-shadow rounded-2xl lg:rounded-none">
               <img src="https://www.fauxhammer.com/wp-content/uploads/2019/05/Citadel-Colour-Featured.jpg" alt="Citadel Colors" className="w-full h-[300px] lg:h-[500px] object-cover" />
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.5em] text-brand-blue/20 mb-4 lg:mb-6 block">The Atelier</span>
            <h3 className="font-serif italic text-4xl lg:text-5xl font-extrabold text-brand-blue mb-6 lg:mb-10 leading-tight">Master the <br /><span className="text-brand-red">Citadel Range.</span></h3>
            <p className="text-lg lg:text-xl text-brand-blue/50 font-medium leading-relaxed mb-8 lg:mb-12 italic">
              Msida’s complete source for professional painting supplies. From Base and Contrast paints to artisan brushes and modeling essentials.
            </p>
            <a href="https://wolt.com/mt/mlt/malta/venue/forbidden-power" className="inline-block w-full lg:w-auto bg-[#0098d9] text-white px-8 lg:px-10 py-4 lg:py-5 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#007ab0] transition-all text-center">
              Shop Paint Inventory
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
