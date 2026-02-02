
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { STORE_LOGO_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'The Space', href: '#space' },
    { name: 'Visit Us', href: '#location' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    window.history.pushState(null, '', '/');
  };

  return (
    <>
      <nav className={`fixed w-full z-[60] transition-all duration-500 ${
        scrolled || isOpen 
          ? 'bg-brand-bg/95 backdrop-blur-md py-4 border-b border-brand-blue/5' 
          : 'bg-transparent py-6 lg:py-8'
      }`}>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Brand - Scaled for mobile */}
          <div className="flex items-center gap-3 lg:gap-4 group cursor-pointer" onClick={handleLogoClick}>
            <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:rotate-12 bg-white/10 shadow-sm border border-brand-blue/5">
              <img 
                src={STORE_LOGO_URL} 
                alt="Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-lg lg:text-2xl uppercase tracking-tight text-brand-blue leading-none group-hover:text-brand-red transition-colors">
                Forbidden Powers
              </span>
              <span className="hidden lg:block text-[10px] font-bold tracking-[0.4em] uppercase text-brand-blue/60 mt-1">
                Msida • Since 1999
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue/70 hover:text-brand-red transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Action */}
          <div className="hidden lg:flex items-center">
            <a 
              href="https://wolt.com/mt/mlt/malta/venue/forbidden-power" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0098d9] text-white px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-[#007ab0] transition-all shadow-lg shadow-brand-blue/10"
            >
              <ShoppingBag size={14} /> Shop Wolt
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden w-10 h-10 flex items-center justify-end text-brand-blue focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[50] lg:hidden transition-all duration-700 ease-in-out ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="absolute inset-0 bg-brand-bg flex flex-col pt-32 pb-12 px-8">
          {/* Menu Header Decoration */}
          <div className="w-12 h-1 bg-brand-red mb-12"></div>
          
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between py-2 border-b border-brand-blue/5"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <span className="font-serif text-4xl font-extrabold text-brand-blue italic transition-transform group-hover:translate-x-2">
                  {link.name}
                </span>
                <ArrowRight size={24} className="text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <div className="mt-auto space-y-12">
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-blue/40">Our Destination</p>
              <p className="font-serif italic text-lg text-brand-blue">Msida, Malta — Established 1999</p>
            </div>

            <a 
              href="https://wolt.com/mt/mlt/malta/venue/forbidden-power" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 w-full bg-[#0098d9] text-white py-6 text-xs font-bold uppercase tracking-[0.3em] active:scale-[0.98] transition-all hover:bg-[#007ab0]"
            >
              <ShoppingBag size={16} /> Shop Our Wolt Store
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
