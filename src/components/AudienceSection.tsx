import React, { useState } from 'react';
import { PERSONAS } from '../data/marketingData';
import { Persona } from '../types';
import { UserCheck, ShoppingBag, Quote, Sparkles, ChevronRight } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<Persona>(PERSONAS[0]);

  return (
    <section className="w-full py-16 bg-[#fff8f6]" id="audience">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] text-[#735c00] font-bold uppercase tracking-widest mb-1">
            Customer Segmentation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#400710] tracking-tight">
            02. Target Audience & Personas
          </h2>
          <p className="text-sm sm:text-base text-[#534343] mt-2">
            Three primary personas driving 85% of physical footfall and high-margin recurring online orders.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
            <span className="text-[#735c00] text-sm">❦</span>
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
          </div>
        </div>

        {/* 3 Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERSONAS.map((persona) => {
            const isSelected = selectedPersona.id === persona.id;
            return (
              <div
                key={persona.id}
                onClick={() => setSelectedPersona(persona)}
                className={`bg-[#fff8f6] rounded-2xl p-6 shadow-sm border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-[#735c00] ring-2 ring-[#735c00]/30 shadow-lg -translate-y-1 bg-white'
                    : 'border-[#735c00]/20 hover:border-[#735c00]/60 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#d9c1c1]/40 mb-4">
                    <span className={`px-2.5 py-0.5 rounded text-[11px] uppercase font-bold tracking-wider ${persona.badgeColor}`}>
                      {persona.segment}
                    </span>
                    <span className="text-xs text-[#534343] font-medium">{persona.age}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#400710] font-semibold">{persona.name}</h3>
                  <p className="text-xs text-[#735c00] font-bold mb-4">{persona.role}</p>

                  <div className="space-y-3.5 text-xs text-[#534343]">
                    <div>
                      <strong className="text-[#400710] block font-semibold mb-0.5">Reading Interests:</strong>
                      <p className="leading-relaxed">{persona.readingInterests}</p>
                    </div>

                    <div>
                      <strong className="text-[#400710] block font-semibold mb-0.5">Purchasing Behavior:</strong>
                      <p className="leading-relaxed">{persona.purchasingBehavior}</p>
                    </div>

                    <div className="pt-1">
                      <strong className="text-[#400710] block font-semibold mb-1.5">Engagement Channels:</strong>
                      <div className="flex flex-wrap gap-1.5">
                        {persona.channels.map((ch, idx) => (
                          <span
                            key={idx}
                            className="bg-[#ffe9e3] text-[#400710] px-2 py-0.5 rounded text-[11px] font-medium border border-[#735c00]/20"
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#d9c1c1]/40 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#534343]">LTV Potential:</span>
                    <span className="ml-1.5 text-xs text-[#400710] font-bold">{persona.ltv}</span>
                  </div>
                  <span className={`text-[11px] font-bold flex items-center gap-0.5 ${isSelected ? 'text-[#735c00]' : 'text-[#534343]'}`}>
                    <span>{isSelected ? 'Selected' : 'View Basket'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Persona Deep Dive Box */}
        <div className="mt-8 p-6 bg-[#fff1ed] rounded-2xl border border-[#735c00]/30 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[#d9c1c1]/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#400710] text-[#ffe088] flex items-center justify-center font-serif text-lg font-bold">
                {selectedPersona.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#400710]">
                  Deep Dive: {selectedPersona.name} ({selectedPersona.segment})
                </h4>
                <p className="text-xs text-[#534343]">Favorite Genre: <span className="text-[#400710] font-semibold">{selectedPersona.favoriteGenre}</span></p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Quote className="w-4 h-4 text-[#735c00]" />
              <p className="font-serif italic text-xs sm:text-sm text-[#400710] max-w-xl">
                {selectedPersona.quote}
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-3.5 rounded-xl border border-[#d9c1c1]/40">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#735c00] block mb-1">
                Typical In-Store Basket
              </span>
              <ul className="text-xs text-[#534343] space-y-1">
                {selectedPersona.typicalBasket.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <ShoppingBag className="w-3 h-3 text-[#735c00] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#d9c1c1]/40">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#735c00] block mb-1">
                Targeting Trigger
              </span>
              <p className="text-xs text-[#534343] leading-relaxed">
                {selectedPersona.id === 'eleanor'
                  ? 'First access to signed editions, quiet late-night browsing hours, and bespoke reading consultations.'
                  : selectedPersona.id === 'liam'
                  ? 'Semester course-pack bundles, trade paperback 3-for-2 deals, and loyalty stamp rewards.'
                  : 'Saturday morning children story time, curated blind-date bundles, and screen-free activity packs.'}
              </p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-[#d9c1c1]/40">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#735c00] block mb-1">
                Retention Strategy
              </span>
              <p className="text-xs text-[#534343] leading-relaxed">
                {selectedPersona.id === 'eleanor'
                  ? 'Personalized email dispatch with literary reviews and reserved seating at visiting author salons.'
                  : selectedPersona.id === 'liam'
                  ? 'WhatsApp VIP flash alerts for incoming second-hand philosophy lots and study-table reservations.'
                  : 'Monthly family calendar printout, sticker reward passport, and weekend morning pastry vouchers.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
