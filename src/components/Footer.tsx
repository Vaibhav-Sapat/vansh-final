import React from 'react';
import { ArrowUp, BookOpen, MapPin, Phone, Mail } from 'lucide-react';
import { EmblemLogo } from './EmblemLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full py-12 bg-[#fff1ed] border-t border-[#d9c1c1]/40">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#d9c1c1]/40">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#735c00]/30 shadow-xs bg-[#400710] flex items-center justify-center p-0.5">
                <EmblemLogo className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-[#400710] leading-none block">
                  PageTurner Books
                </span>
                <span className="text-[11px] text-[#534343] font-semibold">
                  Est. 1998 • Independent Bookseller
                </span>
              </div>
            </div>

            <p className="text-xs text-[#534343] max-w-sm leading-relaxed mb-4">
              Your neighborhood’s home for stories. Bridging classical literary bibliophilia with an agile, high-converting digital strategy.
            </p>

            <div className="space-y-1.5 text-xs text-[#534343]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#735c00]" />
                <span>142 Cobblestone Walk, Historic Mill Quarter</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#735c00]" />
                <span>+91 93708 99431 • Mon–Sat 9AM–8PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-sm font-bold text-[#400710] mb-3 uppercase tracking-wider">
              Strategy Chapters
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#534343]">
              <button onClick={() => scrollTo('hero')} className="text-left hover:text-[#400710] cursor-pointer">Hero Overview</button>
              <button onClick={() => scrollTo('profile')} className="text-left hover:text-[#400710] cursor-pointer">01. Profile & Audit</button>
              <button onClick={() => scrollTo('audience')} className="text-left hover:text-[#400710] cursor-pointer">02. Target Personas</button>
              <button onClick={() => scrollTo('seo-keywords')} className="text-left hover:text-[#400710] cursor-pointer">03. Local SEO</button>
              <button onClick={() => scrollTo('social-media')} className="text-left hover:text-[#400710] cursor-pointer">04. Multi-Channel</button>
              <button onClick={() => scrollTo('ad-creative')} className="text-left hover:text-[#400710] cursor-pointer">05. Paid Campaign</button>
              <button onClick={() => scrollTo('email-campaign')} className="text-left hover:text-[#400710] cursor-pointer">06. Email Retention</button>
              <button onClick={() => scrollTo('growth-plan')} className="text-left hover:text-[#400710] cursor-pointer">07. Growth Plan</button>
            </div>
          </div>

          {/* Academic Attribution & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="text-left md:text-right">
              <span className="text-[10px] uppercase font-bold text-[#735c00] tracking-widest block mb-1">
                Academic Project
              </span>
              <p className="text-xs text-[#534343]">
                Marketing Strategy Case Study: Local Retail Revival
              </p>
              <p className="text-[11px] text-[#534343]/80 mt-1">
                Prepared for Retail Operations Analysis
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#d9c1c1] text-xs font-semibold text-[#400710] hover:bg-[#fff8f6] shadow-xs cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#534343]">
          <span>© 2026 PageTurner Books Strategy Group. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">Privacy & Cookie Notice</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Case Study Repository</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Institutional Archive</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
