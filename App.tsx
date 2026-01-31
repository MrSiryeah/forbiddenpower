
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import HobbyAssistant from './components/HobbyAssistant';
import Footer from './components/Footer';
import { GALLERY_IMAGES } from './constants';
import { Star } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* The Catalogue Section */}
        <section id="catalogue">
          <CategoryGrid />
        </section>

        {/* Hobby Assistant Advisor Section */}
        <section id="assistant">
          <HobbyAssistant />
        </section>
        
        {/* The Space Gallery Section */}
        <section id="space" className="py-20 lg:py-40 bg-brand-cream/20">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16 lg:mb-32">
              <div className="lg:col-span-4 order-2 lg:order-1">
                <span className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] lg:tracking-[0.5em] text-brand-red mb-4 lg:mb-8 block">Our Studio</span>
                <h2 className="text-4xl lg:text-6xl font-serif font-extrabold text-brand-blue mb-6 lg:mb-10 italic leading-none text-balance">The Community Hub.</h2>
                <p className="text-lg lg:text-xl text-brand-blue/70 font-medium leading-relaxed italic">
                  A dedicated environment built for hobbyists. From painting tables to tournament-ready battlefields, this is where the hobby comes to life.
                </p>
              </div>
              <div className="lg:col-span-8 order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                   <div className="aspect-[4/3] overflow-hidden bg-brand-bg editorial-shadow rounded-2xl lg:rounded-none">
                      <img src={GALLERY_IMAGES[0].url} alt={GALLERY_IMAGES[0].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                   </div>
                   <div className="aspect-[4/3] overflow-hidden bg-brand-bg editorial-shadow mt-6 lg:mt-12 rounded-2xl lg:rounded-none">
                      <img src={GALLERY_IMAGES[1].url} alt={GALLERY_IMAGES[1].alt} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                   </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {GALLERY_IMAGES.slice(2).map((img, idx) => (
                <div key={idx} className="group relative aspect-[3/4] overflow-hidden bg-brand-bg editorial-shadow rounded-2xl lg:rounded-none hidden sm:block">
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8 lg:p-12">
                    <span className="text-white font-serif italic text-xl lg:text-2xl font-bold">{img.caption}</span>
                  </div>
                </div>
              ))}
              {/* Testimonial Block */}
              <div className="bg-brand-blue text-white p-10 lg:p-12 flex flex-col justify-center editorial-shadow relative overflow-hidden rounded-2xl lg:rounded-none min-h-[300px]">
                 <div className="flex gap-1 text-brand-red mb-6 lg:mb-8 relative z-10">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                 </div>
                 <p className="font-serif italic text-2xl lg:text-3xl font-extrabold mb-8 lg:mb-10 leading-tight text-white relative z-10">"Malta's premier destination for competitive wargaming."</p>
                 <div className="flex items-center gap-4 relative z-10">
                    <div className="w-8 lg:w-10 h-[1px] bg-brand-red"></div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Local Guide</p>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage & Values Section */}
        <section className="py-20 lg:py-40 bg-brand-bg">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
                <div className="flex flex-col">
                   <h4 className="font-serif font-extrabold text-3xl lg:text-4xl mb-6 lg:mb-8 italic">Authorized <br />Retailer.</h4>
                   <p className="text-brand-blue/60 text-lg font-medium leading-relaxed italic mb-8">We are the official source for Games Workshop, Disney Lorcana, and The Pokémon Company in Msida.</p>
                   <div className="w-12 h-1 bg-brand-red"></div>
                </div>
                <div className="flex flex-col">
                   <h4 className="font-serif font-extrabold text-3xl lg:text-4xl mb-6 lg:mb-8 italic">Organized <br />Play.</h4>
                   <p className="text-brand-blue/60 text-lg font-medium leading-relaxed italic mb-8">From Friday Night Magic to Warhammer tournaments, our tables are active every day of the week.</p>
                   <div className="w-12 h-1 bg-brand-blue/10"></div>
                </div>
                <div className="flex flex-col">
                   <h4 className="font-serif font-extrabold text-3xl lg:text-4xl mb-6 lg:mb-8 italic">Hobbyist <br />Heritage.</h4>
                   <p className="text-brand-blue/60 text-lg font-medium leading-relaxed italic mb-8">Since 1999, we've helped thousands of newcomers and veterans alike build, paint, and play.</p>
                   <div className="w-12 h-1 bg-brand-blue/10"></div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
