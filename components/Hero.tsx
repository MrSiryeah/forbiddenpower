
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-brand-bg pt-20 lg:pt-32">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Text */}
        <div className="lg:col-span-6 relative z-10 text-center lg:text-left">
          <span className="inline-block text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] lg:tracking-[0.5em] text-brand-red mb-6 lg:mb-8">Official Games Workshop Partner</span>
          <h1 className="text-5xl md:text-7xl lg:text-[10rem] xl:text-[11rem] font-serif font-extrabold text-brand-blue leading-[0.9] lg:leading-[0.8] mb-8 lg:mb-12 italic">
            Art of <br className="hidden lg:block" />
            the <span className="text-brand-red">Hobby.</span>
          </h1>
          <p className="text-lg lg:text-2xl text-brand-blue/70 max-w-lg mx-auto lg:mx-0 mb-10 lg:mb-16 font-medium leading-relaxed italic text-balance">
            Malta’s definitive sanctuary for wargaming, miniature painting, and curated tabletop experiences since 1999.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center justify-center lg:justify-start">
            <a href="#catalogue" className="w-full sm:w-auto bg-brand-blue text-white px-10 lg:px-12 py-5 lg:py-6 text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-red transition-all text-center shadow-xl shadow-brand-blue/10 active:scale-95">
              Explore Catalogue
            </a>
            <div className="flex items-center gap-3 text-brand-blue/30">
              <div className="w-8 lg:w-12 h-[1px] bg-brand-blue/20"></div>
              <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest">Located in Msida</span>
            </div>
          </div>
        </div>

        {/* Right Visuals - Hidden on small mobile to focus on CTA */}
        <div className="lg:col-span-6 relative mt-12 lg:mt-0 hidden sm:block">
          <div className="relative grid grid-cols-12 gap-3 lg:gap-4">
            <div className="col-span-7 pt-12 lg:pt-24">
              <div className="relative group overflow-hidden bg-brand-cream editorial-shadow rounded-2xl lg:rounded-none">
                <img 
                  src="https://images.unsplash.com/photo-1529981188441-8a2e6fe30103?q=80&w=1740&auto=format&fit=crop" 
                  alt="Warhammer 40k and Age of Sigmar" 
                  className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0" 
                />
                <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 text-white font-serif italic text-xl lg:text-2xl font-bold">Warhammer</div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="relative group overflow-hidden bg-brand-cream editorial-shadow mb-3 lg:mb-4 rounded-2xl lg:rounded-none">
                <img 
                  src="https://www.wargamer.com/wp-content/sites/wargamer/2025/01/painting-miniatures-guide-2025.jpg" 
                  alt="Miniature Painting" 
                  className="w-full h-[200px] lg:h-[300px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 lg:p-8 bg-brand-blue text-white editorial-shadow h-[184px] lg:h-[284px] flex flex-col justify-end rounded-2xl lg:rounded-none">
                <h4 className="font-serif italic text-xl lg:text-3xl font-bold mb-3 lg:mb-4 leading-tight">25 Years of Community.</h4>
                <p className="text-[8px] lg:text-[10px] uppercase font-bold tracking-widest opacity-40">Est. 1999</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce text-brand-blue/30">
        <ArrowDown size={28} />
      </div>
    </section>
  );
};

export default Hero;
