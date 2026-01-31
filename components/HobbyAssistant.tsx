
import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { getHobbyAdvice } from '../services/geminiService';
import { STORE_LOGO_URL } from '../constants';

const HobbyAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const advice = await getHobbyAdvice(query);
    setResponse(advice);
    setLoading(false);
  };

  return (
    <section id="assistant" className="py-40 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20">
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-brand-red mb-6 block">Assistance</span>
          <h2 className="text-6xl font-serif font-extrabold text-brand-blue mb-8 italic">Artisan Advice.</h2>
          <p className="text-xl text-brand-blue/50 font-medium leading-relaxed italic">
            Not sure where to begin your journey? Our advisor knows our local Msida inventory inside and out.
          </p>
        </div>

        <div className="bg-brand-cream/50 p-12 lg:p-20 editorial-shadow border border-brand-blue/5">
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="flex flex-col gap-6">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about painting Skaven, starting a D&D game, or store events..."
                className="w-full bg-transparent border-b-2 border-brand-blue/5 py-8 text-2xl font-serif italic text-brand-blue focus:outline-none focus:border-brand-red transition-all placeholder:text-brand-blue/10"
              />
              <button
                type="submit"
                disabled={loading}
                className="self-end flex items-center gap-4 text-brand-blue hover:text-brand-red transition-colors"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.3em]">{loading ? 'Consulting...' : 'Request Insight'}</span>
                {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              </button>
            </div>
          </form>

          {response && (
            <div className="p-10 bg-white border border-brand-blue/5 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex gap-6">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  <img src={STORE_LOGO_URL} alt="FP Logo" className="w-full h-full object-contain" />
                </div>
                <p className="text-brand-blue/60 leading-relaxed text-xl font-medium italic">"{response}"</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HobbyAssistant;