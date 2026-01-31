
import React from 'react';
import { Facebook, Instagram, MapPin, Phone, ShoppingBag, Mail } from 'lucide-react';
import { SHOP_HOURS, STORE_LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-brand-bg pt-24 lg:pt-40 pb-10 lg:pb-20 border-t border-brand-blue/5">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20 lg:mb-32">
          
          <div className="col-span-1">
            <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white/20">
                <img src={STORE_LOGO_URL} alt="Forbidden Power" className="w-full h-full object-cover scale-110" />
              </div>
              <span className="font-serif font-extrabold text-xl lg:text-2xl uppercase tracking-tight text-brand-blue leading-none">Forbidden Power</span>
            </div>
            <p className="text-brand-blue/50 text-base font-medium leading-relaxed italic mb-8">
              Msida’s definitive sanctuary for the hobbyist craft. Providing the tabletop community with excellence since 1999.
            </p>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/forbiddenpowermalta/" target="_blank" rel="noopener noreferrer" className="text-brand-blue/20 hover:text-brand-blue transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/forbidden_power/" target="_blank" rel="noopener noreferrer" className="text-brand-blue/20 hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-blue font-bold text-[10px] lg:text-[11px] uppercase tracking-[0.4em] mb-6 lg:mb-10 opacity-30">Quick Navigation</h4>
            <ul className="space-y-4 lg:space-y-6">
              {[
                { name: 'Catalogue', href: '#catalogue' },
                { name: 'The Community Hub', href: '#space' },
                { name: 'Store Location', href: '#location' }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-blue/60 hover:text-brand-red font-serif italic text-base lg:text-lg font-bold transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-blue font-bold text-[10px] lg:text-[11px] uppercase tracking-[0.4em] mb-6 lg:mb-10 opacity-30">Store Details</h4>
            <ul className="space-y-6 lg:space-y-8">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-brand-red shrink-0" />
                <span className="text-brand-blue/60 text-base lg:text-lg font-medium italic leading-tight">Triq il-Bordin / Misrah il-Barrieri,<br />Msida, Malta</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-brand-blue/20 shrink-0" />
                <span className="text-brand-blue/60 text-base lg:text-lg font-medium italic">+356 21 227 999</span>
              </li>
              <li className="flex items-center gap-4 pt-2">
                 <ShoppingBag size={18} className="text-brand-red shrink-0" />
                 <a href="https://wolt.com/mt/mlt/malta/venue/forbidden-power" target="_blank" rel="noopener noreferrer" className="text-brand-blue font-bold text-[10px] lg:text-xs uppercase tracking-widest border-b border-brand-blue/10 pb-1 hover:text-brand-red hover:border-brand-red transition-colors">Shop Wolt Store</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-blue font-bold text-[10px] lg:text-[11px] uppercase tracking-[0.4em] mb-6 lg:mb-10 opacity-30">Opening Hours</h4>
            <div className="space-y-3 lg:space-y-4">
              {SHOP_HOURS.map((sh) => (
                <div key={sh.day} className="flex justify-between items-center text-[9px] lg:text-[10px] font-bold uppercase tracking-widest">
                  <span className="text-brand-blue/30">{sh.day}</span>
                  <span className={sh.hours === 'Closed' ? 'text-brand-red' : 'text-brand-blue/80'}>{sh.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Integration with significantly Darker/Moody Brand Hue */}
        <div 
          className="group relative w-full h-[350px] lg:h-[600px] overflow-hidden rounded-[1.5rem] lg:rounded-[2.5rem] shadow-2xl mb-12 lg:mb-20 transition-all duration-1000 border border-brand-blue/10 bg-brand-blue"
          style={{ transform: 'translateZ(0)' }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.736!2d14.4893!3d35.8941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e44e2f89c893d%3A0x6b49e493397356a!2sForbidden%20Power!5e0!3m2!1sen!2smt!4v1700000000000!5m2!1sen!2smt" 
            className="w-full h-full border-0 transition-all duration-1000" 
            loading="lazy"
            title="Forbidden Power Store Location"
            style={{ 
              /* Darker, Antique/Moody Filter: Very low brightness, higher contrast, heavy sepia/blue tint */
              filter: 'brightness(0.35) contrast(1.2) saturate(0.4) sepia(0.6) hue-rotate(-10deg)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1) contrast(1) saturate(1) sepia(0) hue-rotate(0deg)'}
            onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(0.35) contrast(1.2) saturate(0.4) sepia(0.6) hue-rotate(-10deg)'}
          ></iframe>
          
          {/* Moody Overlay that fades on hover */}
          <div className="absolute inset-0 pointer-events-none bg-brand-blue/15 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-1000"></div>
          
          {/* Optional Label for Interaction */}
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-brand-bg/90 backdrop-blur-md px-6 py-3 rounded-full border border-brand-blue/10 lg:opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             <span className="text-[9px] font-bold uppercase tracking-widest text-brand-blue">Interactive Map View</span>
          </div>
        </div>

        <div className="pt-8 lg:pt-12 border-t border-brand-blue/5 flex flex-col md:flex-row justify-between items-center text-brand-blue/20 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.3em] gap-6 lg:gap-8">
          <p className="text-center lg:text-left">© {new Date().getFullYear()} Forbidden Power Malta. Established 1999.</p>
          <div className="flex gap-8 lg:gap-12">
            <a href="#" className="hover:text-brand-blue transition-colors">Legal</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
