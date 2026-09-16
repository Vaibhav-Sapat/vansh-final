import React, { useState } from 'react';
import { KEYWORDS } from '../data/marketingData';
import { KeywordItem } from '../types';
import { Search, Share2, Code2, FileText, Check, ChevronDown, Sparkles } from 'lucide-react';

export const SeoSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSchemaModal, setShowSchemaModal] = useState<boolean>(false);

  const filteredKeywords = KEYWORDS.filter((kw) => {
    const matchesCategory = filterCategory === 'all' || kw.category === filterCategory;
    const matchesSearch = kw.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          kw.intent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "BookStore",
    "name": "PageTurner Books",
    "description": "Historic independent bookseller offering curated literary fiction, rare first editions, artisanal tea nooks and author salons.",
    "url": "https://pageturnerbooks.local",
    "telephone": "+1-555-724-3887",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "142 Cobblestone Walk",
      "addressLocality": "Historic Mill Quarter",
      "postalCode": "02138",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.3736,
      "longitude": -71.1097
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "18:00"
      }
    ],
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30
    }
  };

  return (
    <section className="w-full py-16 bg-[#fff1ed]/50 border-t border-[#d9c1c1]/40" id="seo-keywords">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] text-[#735c00] font-bold uppercase tracking-widest mb-1">
            Search Engine Dominance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#400710] tracking-tight">
            03. Local & Organic SEO Strategy
          </h2>
          <p className="text-sm sm:text-base text-[#534343] mt-2">
            High-intent organic keyword targeting to dominate local search within a 15-mile regional radius.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
            <span className="text-[#735c00] text-sm">❦</span>
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
          </div>
        </div>

        {/* Strategy Stat Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#fff8f6] p-5 rounded-2xl shadow-sm border border-[#735c00]/20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#400710]/10 text-[#400710] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">insights</span>
            </div>
            <div>
              <p className="text-[11px] text-[#534343] font-bold uppercase tracking-wide">Target Monthly Search Vol.</p>
              <p className="font-serif text-2xl text-[#400710] font-bold">14,200 / mo</p>
            </div>
          </div>

          <div className="bg-[#fff8f6] p-5 rounded-2xl shadow-sm border border-[#735c00]/20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#735c00]/10 text-[#735c00] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">pin_drop</span>
            </div>
            <div>
              <p className="text-[11px] text-[#534343] font-bold uppercase tracking-wide">Local 3-Pack Target</p>
              <p className="font-serif text-2xl text-[#400710] font-bold">Rank #1 - #3</p>
            </div>
          </div>

          <div className="bg-[#fff8f6] p-5 rounded-2xl shadow-sm border border-[#735c00]/20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#64141e]/15 text-[#400710] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">shopping_cart</span>
            </div>
            <div>
              <p className="text-[11px] text-[#534343] font-bold uppercase tracking-wide">Search Commercial Intent</p>
              <p className="font-serif text-2xl text-[#400710] font-bold">68% Transactional</p>
            </div>
          </div>
        </div>

        {/* Keyword Filter & Search Controls */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#d9c1c1]/50 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#400710] font-semibold">
                Targeted High-Value Query Clusters
              </h3>
              <p className="text-xs text-[#534343] mt-0.5">
                Showing {filteredKeywords.length} of {KEYWORDS.length} high-intent clusters
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#534343] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-lg border border-[#d9c1c1] bg-[#fff8f6] text-xs text-[#251915] focus:outline-none focus:border-[#400710] w-48 sm:w-56"
                />
              </div>

              <div className="flex items-center gap-1 bg-[#ffe9e3] p-1 rounded-lg">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'footfall', label: 'Local Footfall' },
                  { id: 'collector', label: 'Collector' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'events', label: 'Events' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setFilterCategory(tab.id)}
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer ${
                      filterCategory === tab.id
                        ? 'bg-[#400710] text-white shadow-xs'
                        : 'text-[#534343] hover:text-[#251915]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Keyword Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {filteredKeywords.map((kw) => (
              <div
                key={kw.id}
                className="p-3.5 bg-[#fff8f6] rounded-xl border border-[#735c00]/20 flex flex-col justify-between hover:border-[#735c00] hover:shadow-md transition-all group"
              >
                <div>
                  <span className="text-xs font-bold text-[#400710] block group-hover:text-[#5c1d24] leading-snug">
                    {kw.query}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between pt-2 border-t border-[#d9c1c1]/40 text-[11px]">
                    <span className="text-[#735c00] font-bold">Vol: {kw.volume.toLocaleString()}</span>
                    <span className="bg-white px-1.5 py-0.5 rounded text-[10px] text-[#534343] font-medium border border-[#d9c1c1]/40">
                      KD: {kw.kd}%
                    </span>
                  </div>
                  <span className="inline-block text-[10px] uppercase tracking-wider text-[#400710] font-bold mt-1.5">
                    {kw.intent}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Execution Notes Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#fff8f6] border border-[#d9c1c1]/40 shadow-sm">
            <div className="flex items-center gap-2 text-[#400710] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[20px] text-[#735c00]">share_location</span>
              <span>Google Business Profile (GBP)</span>
            </div>
            <p className="text-xs text-[#534343] leading-relaxed">
              Full audit of NAP consistency across 40+ local directories, weekly high-res photo uploads of new shelf arrangements, and an automated SMS review-prompt funnel targeting 250+ 5-star ratings.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#fff8f6] border border-[#d9c1c1]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#400710] text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[20px] text-[#735c00]">code</span>
                <span>Local Schema & BookStore Markup</span>
              </div>
              <p className="text-xs text-[#534343] leading-relaxed">
                Inject JSON-LD structured data for <code>BookStore</code>, opening hours, scheduled literary events, author profiles, and in-stock inventory availability.
              </p>
            </div>
            <button
              onClick={() => setShowSchemaModal(!showSchemaModal)}
              className="mt-3 text-[11px] font-bold text-[#735c00] hover:text-[#400710] flex items-center gap-1 self-start cursor-pointer"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{showSchemaModal ? 'Hide Schema Payload' : 'Inspect JSON-LD Snippet'}</span>
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-[#fff8f6] border border-[#d9c1c1]/40 shadow-sm">
            <div className="flex items-center gap-2 text-[#400710] text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[20px] text-[#735c00]">rate_review</span>
              <span>Editorial Neighborhood Blog</span>
            </div>
            <p className="text-xs text-[#534343] leading-relaxed">
              Weekly 800-word articles reviewing upcoming releases paired with local historical retrospectives, capturing long-tail informational queries like "best rainy day spots in Historic Mill Quarter".
            </p>
          </div>
        </div>

        {/* Expandable JSON-LD Code Payload */}
        {showSchemaModal && (
          <div className="mt-4 p-5 bg-[#251915] text-[#ffe088] rounded-2xl font-mono text-xs overflow-x-auto shadow-inner border border-[#735c00]/40">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#ffe088]/20 text-[#ffe088]/80 text-[11px]">
              <span>schema-bookstore.jsonld</span>
              <span className="text-[10px] uppercase">Schema.org / BookStore Compliant</span>
            </div>
            <pre>{JSON.stringify(schemaJsonLd, null, 2)}</pre>
          </div>
        )}
      </div>
    </section>
  );
};
