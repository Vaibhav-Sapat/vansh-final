import React, { useState } from 'react';
import { MapPin, BookMarked, CheckCircle2, AlertTriangle, Store, Clock, Sparkles } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'hours' | 'specialties'>('overview');

  return (
    <section className="w-full py-16 bg-[#fff1ed]/60 border-y border-[#d9c1c1]/40" id="profile">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] text-[#735c00] font-bold uppercase tracking-widest mb-1">
            Audit & Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#400710] tracking-tight">
            01. Business Profile & Diagnosis
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
            <span className="text-[#735c00] text-sm">❦</span>
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Story & Diagnosis */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-[#fff8f6] p-6 sm:p-8 rounded-2xl shadow-sm border border-[#d9c1c1]/60">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl sm:text-2xl text-[#400710] font-semibold">
                  Heritage Meets Modern Market Realities
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#ffe9e3] text-[#735c00] border border-[#735c00]/30">
                  Est. 1998
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#534343] leading-relaxed mb-6">
                Founded in 1998 in the Historic Mill District, <strong className="text-[#400710] font-semibold">PageTurner Books</strong> has served three generations of avid readers, university faculty, and collectors. While cherished for its sensory sanctuary, tactile browsing, and resident feline greeter, intensifying competition from algorithmic mega-retailers and shifting consumer discovery habits necessitate an agile, high-conversion digital strategy.
              </p>

              {/* Coordinates & Specialty Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#d9c1c1]/40">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#ffe9e3] text-[#735c00] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#400710] uppercase tracking-wide">Physical Coordinates</h4>
                    <p className="text-xs text-[#534343] mt-0.5">
                      142 Cobblestone Walk, Historic Mill Quarter • Prime pedestrian cultural zone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#ffe9e3] text-[#735c00] shrink-0 mt-0.5">
                    <BookMarked className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#400710] uppercase tracking-wide">Specialty Curations</h4>
                    <p className="text-xs text-[#534343] mt-0.5">
                      Contemporary Literary Fiction, First Edition Classics, Local History & Rare Poetry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* USPs & Diagnosed Gaps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* USPs Card */}
              <div className="bg-[#fff8f6] p-5 rounded-xl border border-[#735c00]/30 shadow-sm">
                <div className="flex items-center gap-2 text-[#735c00] text-xs font-bold uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#735c00]" />
                  <span>Core Distinctions (USPs)</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#534343]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#735c00] font-bold text-sm leading-none mt-0.5">♦</span>
                    <span>Handwritten shelf-talkers with candid staff reviews on 800+ curated volumes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#735c00] font-bold text-sm leading-none mt-0.5">♦</span>
                    <span>"Blind Date with a Book" brown-paper mystery gift packaging with clues.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#735c00] font-bold text-sm leading-none mt-0.5">♦</span>
                    <span>Artisanal tea reading nooks and weekly author intimate salon evenings.</span>
                  </li>
                </ul>
              </div>

              {/* Current Bottlenecks */}
              <div className="bg-[#fff8f6] p-5 rounded-xl border border-[#ffdad6] shadow-sm">
                <div className="flex items-center gap-2 text-[#ba1a1a] text-xs font-bold uppercase tracking-wider mb-3">
                  <AlertTriangle className="w-4 h-4 text-[#ba1a1a]" />
                  <span>Diagnosed Challenges</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#534343]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ba1a1a] font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Low organic search visibility outside the immediate 0.5-mile walking radius.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ba1a1a] font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Dormant social channels missing BookTok & Instagram discovery momentum.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ba1a1a] font-bold text-sm leading-none mt-0.5">•</span>
                    <span>Zero automated customer retention lifecycle or digital rewards program.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Storefront Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[#fff8f6]">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?auto=format&fit=crop&w=1000&q=80"
                  alt="PageTurner Books Storefront on Cobblestone Street"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-[#400710] text-[#ffe088] px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider shadow">
                  The Living Landmark
                </div>
              </div>

              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-[#735c00] font-bold uppercase tracking-wider">
                    Historic Mill District Anchor
                  </span>
                  <span className="text-[11px] bg-[#ffe9e3] text-[#400710] font-semibold px-2 py-0.5 rounded">
                    Open Mon–Sat 9AM–8PM
                  </span>
                </div>
                <p className="font-serif text-xl text-[#400710] font-semibold">142 Cobblestone Walk</p>
                <p className="text-xs text-[#534343] mt-1.5 leading-relaxed">
                  PageTurner Books Storefront — the physical heart of our community reading collective, now anchoring a coordinated digital revival program.
                </p>

                <div className="mt-4 pt-3 border-t border-[#d9c1c1]/40 flex items-center justify-between text-xs text-[#534343]">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#735c00]" />
                    <span>Next Salon: Thursday 7 PM</span>
                  </span>
                  <span className="text-[#400710] font-bold">Free Local Reserve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
