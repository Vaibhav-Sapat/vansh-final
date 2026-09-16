import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PERSONAS, KEYWORDS, SOCIAL_PILLARS, ROADMAP_PHASES } from '../data/marketingData';
import { EmblemLogo } from './EmblemLogo';

interface PresentationModeProps {
  onClose: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = 7;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-[#251915] text-[#fff8f6] flex flex-col justify-between p-4 sm:p-8 overflow-hidden select-none animate-in fade-in duration-200">
      {/* Top Deck Bar */}
      <div className="flex items-center justify-between border-b border-[#ffe088]/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#400710] border border-[#ffe088]/40 p-0.5">
            <EmblemLogo className="w-full h-full object-contain" />
          </div>
          <div>
            <span className="font-serif text-base font-bold text-[#ffe088]">
              PageTurner Books • Executive Strategy Deck
            </span>
            <span className="text-[11px] text-[#edd5ce] block">
              Slide {currentSlide + 1} of {totalSlides}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex gap-1.5">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-6 h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'bg-[#ffe088] w-10' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#ffe088] transition-colors cursor-pointer"
            title="Exit Deck Mode (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Canvas (16:9 Aspect Ratio Focus) */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 my-auto">
        <div className="w-full max-w-5xl bg-[#fff8f6] text-[#251915] rounded-3xl p-6 sm:p-12 shadow-2xl border-2 border-[#735c00]/40 min-h-[460px] flex flex-col justify-between animate-in fade-in duration-300">
          {/* SLIDE 0: Overview */}
          {currentSlide === 0 && (
            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ffe9e3] text-[#735c00] text-xs font-bold uppercase tracking-wider">
                  Executive Briefing • Slide 01
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#400710] mt-4 mb-2">
                  PageTurner Books
                </h1>
                <p className="font-serif text-xl sm:text-2xl italic text-[#735c00]">
                  “Your Neighborhood's Home for Stories”
                </p>
                <p className="text-sm sm:text-base text-[#534343] mt-4 max-w-2xl leading-relaxed">
                  A targeted omni-channel marketing blueprint blending community roots, hyper-local SEO, and digital engagement to increase brick-and-mortar footfall and online revenue by <strong>45% in 6 months</strong>.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#d9c1c1]/40">
                <div className="bg-[#fff1ed] p-4 rounded-xl border border-[#d9c1c1]/50 text-center">
                  <div className="font-serif text-3xl font-bold text-[#400710]">+45%</div>
                  <div className="text-xs text-[#534343] font-semibold mt-1">6-Mo Revenue Target</div>
                </div>
                <div className="bg-[#fff1ed] p-4 rounded-xl border border-[#d9c1c1]/50 text-center">
                  <div className="font-serif text-3xl font-bold text-[#400710]">14.2k</div>
                  <div className="text-xs text-[#534343] font-semibold mt-1">Monthly Search Volume</div>
                </div>
                <div className="bg-[#fff1ed] p-4 rounded-xl border border-[#d9c1c1]/50 text-center">
                  <div className="font-serif text-3xl font-bold text-[#735c00]">4.8x</div>
                  <div className="text-xs text-[#534343] font-semibold mt-1">Projected ROAS</div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 1: Business Profile & Audit */}
          {currentSlide === 1 && (
            <div className="space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ffe9e3] text-[#735c00] text-xs font-bold uppercase tracking-wider">
                  Audit & Foundation • Slide 02
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#400710] mt-3">
                  01. Business Profile & Strategic Diagnosis
                </h2>
                <p className="text-xs sm:text-sm text-[#534343] mt-1">
                  142 Cobblestone Walk, Historic Mill Quarter • Established 1998
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#fff1ed] border border-[#735c00]/30">
                  <h4 className="font-serif text-base font-bold text-[#400710] mb-3">
                    Unfair Advantages (USPs)
                  </h4>
                  <ul className="space-y-2 text-xs text-[#534343]">
                    <li>♦ Handwritten shelf-talkers by passionate resident bookmongers</li>
                    <li>♦ "Blind Date with a Book" mystery gift packaging</li>
                    <li>♦ Quiet artisanal tea bar & reading hearth inside</li>
                    <li>♦ Established 28-year cultural brand loyalty</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#ffdad6]/40 border border-[#ba1a1a]/30">
                  <h4 className="font-serif text-base font-bold text-[#ba1a1a] mb-3">
                    Diagnosed Vulnerabilities
                  </h4>
                  <ul className="space-y-2 text-xs text-[#534343]">
                    <li>• Zero local search capture beyond immediate walking traffic</li>
                    <li>• Dormant BookTok / Bookstagram social presence</li>
                    <li>• Under-monetized repeat frequency & zero loyalty automation</li>
                    <li>• Lack of structured corporate gifting packages</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: Target Audience */}
          {currentSlide === 2 && (
            <div className="space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ffe9e3] text-[#735c00] text-xs font-bold uppercase tracking-wider">
                  Customer Segmentation • Slide 03
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#400710] mt-2">
                  02. Three Core Buyer Personas
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PERSONAS.map((p) => (
                  <div key={p.id} className="p-4 bg-[#fff1ed] rounded-xl border border-[#735c00]/25">
                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${p.badgeColor}`}>
                      {p.segment}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#400710] mt-2">{p.name}</h3>
                    <p className="text-xs text-[#735c00] font-semibold mb-2">{p.role}</p>
                    <p className="text-xs text-[#534343] line-clamp-3 mb-3">{p.readingInterests}</p>
                    <div className="pt-2 border-t border-[#d9c1c1]/40 flex justify-between text-xs">
                      <span className="text-[#534343]">Est. LTV:</span>
                      <strong className="text-[#400710]">{p.ltv}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 3: Local SEO Strategy */}
          {currentSlide === 3 && (
            <div className="space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ffe9e3] text-[#735c00] text-xs font-bold uppercase tracking-wider">
                  Organic Acquisition • Slide 04
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#400710] mt-2">
                  03. Hyper-Local SEO & Query Dominance
                </h2>
                <p className="text-xs sm:text-sm text-[#534343] mt-1">
                  14,200/mo search volume target with 68% high commercial purchase intent
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {KEYWORDS.slice(0, 8).map((k) => (
                  <div key={k.id} className="p-3 bg-white rounded-lg border border-[#d9c1c1]/50 text-xs">
                    <strong className="text-[#400710] block truncate">{k.query}</strong>
                    <div className="flex justify-between text-[11px] text-[#735c00] mt-1.5 pt-1.5 border-t border-[#d9c1c1]/40">
                      <span>Vol: {k.volume}</span>
                      <span>KD: {k.kd}%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#ffe9e3] rounded-xl text-xs text-[#534343] flex items-center justify-between">
                <span>Core Pillar: Google Business Profile (GBP) + BookStore Schema.org JSON-LD</span>
                <strong className="text-[#400710]">Goal: Local 3-Pack Rank #1–3</strong>
              </div>
            </div>
          )}

          {/* SLIDE 4: Social Media Engine */}
          {currentSlide === 4 && (
            <div className="space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ffe9e3] text-[#735c00] text-xs font-bold uppercase tracking-wider">
                  Community Engagement • Slide 05
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#400710] mt-2">
                  04. Synchronized Multi-Channel Touchpoints
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SOCIAL_PILLARS.map((sp) => (
                  <div key={sp.platform} className="p-4 bg-[#fff1ed] rounded-xl border border-[#735c00]/30">
                    <div className="flex justify-between items-center mb-2">
                      <strong className="font-serif text-base text-[#400710]">{sp.platform}</strong>
                      <span className="text-[10px] font-bold text-[#735c00]">{sp.schedule}</span>
                    </div>
                    <p className="text-xs text-[#534343] mb-3">{sp.handle}</p>
                    <div className="p-2.5 bg-white rounded-lg border border-[#d9c1c1]/40 text-xs">
                      <span className="text-[10px] uppercase font-bold text-[#735c00] block">KPI Objective</span>
                      <strong className="text-[#400710] text-sm block mt-0.5">{sp.kpiHighlight}</strong>
                      <span className="text-[11px] text-[#534343]">{sp.kpiDetail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 5: Paid Campaign & Meta Ad */}
          {currentSlide === 5 && (
            <div className="space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ffe9e3] text-[#735c00] text-xs font-bold uppercase tracking-wider">
                  Paid Acquisition • Slide 06
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#400710] mt-2">
                  05. Meta Hyper-Local Sponsored Creative
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 bg-[#400710] text-[#ffe088] p-5 rounded-2xl border-2 border-[#e9c349]/40 shadow-lg text-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest block mb-1">
                    Welcome Neighborhood Treat
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Rediscover the Smell of Real Paper.
                  </h3>
                  <p className="text-xs text-[#ffb3b6] mb-3">
                    20% Off Your First Handpicked Volume + Complimentary Loose-Leaf Tea
                  </p>
                  <div className="p-2 bg-[#5c1d24] rounded-lg text-xs font-bold text-white border border-[#ffe088]/30">
                    Voucher: PAGETURNER-WELCOME-20
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-3 text-xs text-[#534343]">
                  <div className="p-3 bg-white rounded-xl border border-[#d9c1c1]/50">
                    <strong className="text-[#400710] block mb-0.5">5-Mile Geo-Fencing</strong>
                    <span>Targeting bibliophiles, NPR listeners, and craft coffee patrons aged 21–58.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#d9c1c1]/50">
                    <strong className="text-[#400710] block mb-0.5">Unit Economics</strong>
                    <span>$1,200/mo media budget • $2.40 cost per claim • <strong>4.8x projected ROAS</strong>.</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-[#d9c1c1]/50">
                    <strong className="text-[#400710] block mb-0.5">Automated Retargeting</strong>
                    <span>Claimants enter the 4-part “Chapter Two” weekly retention newsletter series.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 6: Financial Forecast */}
          {currentSlide === 6 && (
            <div className="space-y-5">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#ffe9e3] text-[#735c00] text-xs font-bold uppercase tracking-wider">
                  Pro-Forma Growth • Slide 07
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#400710] mt-2">
                  06. 6-Month Phased Growth & Revenue Uplift
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ROADMAP_PHASES.map((p, idx) => (
                  <div key={idx} className="p-4 bg-[#fff1ed] rounded-xl border border-[#735c00]/30">
                    <span className="text-[10px] font-bold text-[#735c00] uppercase block">{p.months}</span>
                    <strong className="font-serif text-sm font-bold text-[#400710] block mt-0.5 mb-2">
                      {p.title}
                    </strong>
                    <p className="text-xs text-[#534343] mb-3">{p.focus}</p>
                    <div className="pt-2 border-t border-[#d9c1c1]/40 text-xs font-bold text-[#400710]">
                      {p.expectedGain}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#400710] text-white rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#ffe088] uppercase font-bold block">Consolidated Forecast:</span>
                  <span className="font-serif text-xl font-bold">+45% Monthly Revenue ($70.8k/mo)</span>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-[#ffe088] text-[#400710] font-bold text-xs shadow hover:bg-[#fed65b] cursor-pointer"
                >
                  Return to Full Strategy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Deck Controls */}
      <div className="flex items-center justify-between border-t border-[#ffe088]/20 pt-4">
        <button
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-[#ffe088] text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Slide</span>
        </button>

        <div className="text-xs text-[#edd5ce] font-medium hidden sm:block">
          Use Left / Right arrow keys to navigate • Esc to exit
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1))}
          disabled={currentSlide === totalSlides - 1}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ffe088] text-[#400710] hover:bg-[#fed65b] text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
