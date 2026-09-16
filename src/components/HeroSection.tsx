import React, { useState } from 'react';
import { ArrowDown, FileText, BookOpen, TrendingUp, Coffee, Sparkles, Image as ImageIcon } from 'lucide-react';

interface HeroSectionProps {
  onOpenReport: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReport }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // We provide both primary image representations matching Image 1 and Image 4
  const heroImages = [
    {
      title: 'Atmospheric Multi-Story Library',
      description: 'Lined with dark oak shelves, leather armchairs & brass lamps',
      url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=85',
      badge: '18,500+ Curated Titles'
    },
    {
      title: 'Historic Mill District Storefront',
      description: 'Cobblestone facade with lavender planters & welcoming chalkboards',
      url: 'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?auto=format&fit=crop&w=1400&q=85',
      badge: '142 Cobblestone Walk'
    }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-10 lg:py-16 overflow-hidden" id="hero">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          {/* Academic Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffe9e3] border border-[#e9c349]/60 shadow-sm mb-4">
            <span className="material-symbols-outlined text-[15px] text-[#735c00]">school</span>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#534343]">
              Digital Marketing Strategy Project • Increasing Sales
            </span>
          </div>

          {/* Store Name & Crest Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#400710] tracking-tight leading-none">
              PageTurner Books
            </h1>
            <span className="inline-block px-2.5 py-1 rounded bg-[#400710] text-[#ffe088] text-[11px] font-bold tracking-widest uppercase shadow-sm">
              Est. 1998 • Independent
            </span>
          </div>

          {/* Tagline */}
          <p className="font-serif text-2xl sm:text-3xl italic text-[#735c00] mb-4">
            “Your Neighborhood's Home for Stories”
          </p>

          {/* Thesis Summary */}
          <p className="text-base sm:text-lg text-[#534343] max-w-xl mb-6 leading-relaxed">
            A targeted omni-channel marketing blueprint blending community roots, hyper-local SEO, and digital engagement to increase brick-and-mortar footfall and online revenue by{' '}
            <strong className="text-[#400710] font-semibold">45% in 6 months</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('profile')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#400710] text-white text-sm font-semibold shadow-md hover:bg-[#5c1d24] transition-all cursor-pointer group"
            >
              <span>Explore Our Strategy</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={onOpenReport}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#ffe9e3] text-[#400710] border border-[#735c00]/40 text-sm font-semibold hover:bg-[#fbe3dc] transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Executive Brief PDF</span>
            </button>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#d9c1c1]/50 w-full max-w-lg">
            <div className="bg-[#fff8f6] p-2 rounded-lg">
              <div className="font-serif text-2xl sm:text-3xl text-[#400710] font-bold">+45%</div>
              <div className="text-[11px] font-bold text-[#534343] uppercase tracking-wider">Revenue Target</div>
            </div>
            <div className="bg-[#fff8f6] p-2 rounded-lg">
              <div className="font-serif text-2xl sm:text-3xl text-[#400710] font-bold">14.2k</div>
              <div className="text-[11px] font-bold text-[#534343] uppercase tracking-wider">Monthly Search</div>
            </div>
            <div className="bg-[#fff8f6] p-2 rounded-lg">
              <div className="font-serif text-2xl sm:text-3xl text-[#400710] font-bold">4.8x</div>
              <div className="text-[11px] font-bold text-[#534343] uppercase tracking-wider">Projected ROAS</div>
            </div>
          </div>
        </div>

        {/* Right Hero Visual Column */}
        <div className="lg:col-span-6 relative mt-6 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f5ddd7] bg-[#fff1ed] group">
            {/* Library Interior Visual */}
            <div className="relative w-full h-[400px] sm:h-[480px]">
              <img
                src={heroImages[activeImageIndex].url}
                alt={heroImages[activeImageIndex].title}
                className="w-full h-full object-cover filter contrast-[1.02] brightness-95 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#400710]/85 via-[#400710]/20 to-transparent pointer-events-none"></div>

              {/* View Switcher Overlay Tabs */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md rounded-lg p-1 flex gap-1 z-20">
                {heroImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                      activeImageIndex === idx ? 'bg-[#ffe088] text-[#400710]' : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {idx === 0 ? 'Interior Nook' : 'Storefront'}
                  </button>
                ))}
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-3 left-3 bg-[#fff8f6]/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#735c00]/30 flex items-center gap-2.5 z-20">
                <BookOpen className="w-5 h-5 text-[#735c00]" />
                <div>
                  <p className="text-[11px] text-[#534343] leading-none">Catalog Volume</p>
                  <p className="text-xs font-bold text-[#400710]">18,500+ Curated Titles</p>
                </div>
              </div>

              {/* Bottom Right Floating Badge */}
              <div className="absolute bottom-4 right-4 bg-[#fff8f6]/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-[#735c00]/30 flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-full bg-[#400710]/10 flex items-center justify-center text-[#400710]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#400710]">+42% Foot Traffic</p>
                  <p className="text-[10px] text-[#534343]">6-Month Campaign Forecast</p>
                </div>
              </div>

              {/* Bottom Left Badge */}
              <div className="absolute bottom-4 left-4 bg-[#400710] text-[#ffe088] px-3 py-1.5 rounded-lg shadow-md text-xs font-semibold flex items-center gap-1.5 z-20">
                <Coffee className="w-3.5 h-3.5" />
                <span>Quiet Nook & Artisanal Tea Bar Inside</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
