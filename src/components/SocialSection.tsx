import React, { useState } from 'react';
import { SOCIAL_PILLARS } from '../data/marketingData';
import { Camera, Users, MessageSquare, Heart, MessageCircle, Share2, CheckCheck, Clock, Send } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const [activePreview, setActivePreview] = useState<number>(0);
  const [whatsappReply, setWhatsappReply] = useState<string>('');
  const [simulatedReplies, setSimulatedReplies] = useState<string[]>([]);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappReply.trim()) return;
    setSimulatedReplies((prev) => [...prev, whatsappReply.trim()]);
    setWhatsappReply('');
  };

  return (
    <section className="w-full py-16 bg-[#fff8f6]" id="social-media">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] text-[#735c00] font-bold uppercase tracking-widest mb-1">
            Community Amplification
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#400710] tracking-tight">
            04. Multi-Channel Social Strategy
          </h2>
          <p className="text-sm sm:text-base text-[#534343] mt-2">
            Transform passive scrollers into passionate patrons with dedicated platform touchpoints.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
            <span className="text-[#735c00] text-sm">❦</span>
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
          </div>
        </div>

        {/* 3 Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {SOCIAL_PILLARS.map((pillar, idx) => {
            const isSelected = activePreview === idx;
            return (
              <div
                key={pillar.platform}
                onClick={() => setActivePreview(idx)}
                className={`bg-[#fff8f6] rounded-2xl p-6 shadow-sm border flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-[#735c00] ring-2 ring-[#735c00]/30 shadow-lg -translate-y-1 bg-white'
                    : 'border-[#735c00]/20 hover:border-[#735c00]/50 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#d9c1c1]/40">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        pillar.platform === 'Instagram'
                          ? 'bg-[#400710] text-[#ffe088]'
                          : pillar.platform === 'Facebook'
                          ? 'bg-[#735c00] text-white'
                          : 'bg-[#5c1d24] text-[#ffdada]'
                      }`}>
                        {pillar.platform === 'Instagram' && <Camera className="w-5 h-5" />}
                        {pillar.platform === 'Facebook' && <Users className="w-5 h-5" />}
                        {pillar.platform === 'WhatsApp' && <MessageSquare className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#400710] leading-tight">
                          {pillar.platform}
                        </h3>
                        <span className="text-[11px] text-[#534343]">{pillar.handle}</span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#ffe9e3] text-[11px] font-bold text-[#735c00]">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs text-[#534343] mb-4">
                    <div className="flex items-center gap-2 font-semibold text-[#400710]">
                      <Clock className="w-3.5 h-3.5 text-[#735c00]" />
                      <span>{pillar.schedule}</span>
                    </div>

                    <div className="p-3 bg-[#ffe9e3]/60 rounded-xl border border-[#d9c1c1]/30">
                      <strong className="text-[#400710] block font-semibold mb-1">Content Pillars:</strong>
                      <ul className="space-y-1 text-[11px] list-disc list-inside">
                        {pillar.contentPillars.map((cp, cIdx) => (
                          <li key={cIdx} className="leading-snug">{cp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#400710]/5 rounded-xl border border-[#400710]/15">
                  <span className="text-[10px] font-bold text-[#400710] block uppercase tracking-wide">
                    Expected 6-Mo KPI:
                  </span>
                  <p className="font-serif text-xl font-bold text-[#400710] mt-0.5">
                    {pillar.kpiHighlight}
                  </p>
                  <p className="text-[11px] text-[#534343] mt-0.5">{pillar.kpiDetail}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Post / Broadcast Simulator Box */}
        <div className="bg-[#fff1ed] rounded-2xl p-6 sm:p-8 border border-[#735c00]/30 shadow-md max-w-4xl mx-auto">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#d9c1c1]/50">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#735c00]">
                Live Simulator Preview:
              </span>
              <span className="font-serif text-lg font-bold text-[#400710]">
                {SOCIAL_PILLARS[activePreview].platform} Channel Mockup
              </span>
            </div>
            <div className="flex gap-1.5">
              {SOCIAL_PILLARS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePreview(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer ${
                    activePreview === idx
                      ? 'bg-[#400710] text-[#ffe088]'
                      : 'bg-white text-[#534343] hover:bg-[#ffe9e3]'
                  }`}
                >
                  {p.platform}
                </button>
              ))}
            </div>
          </div>

          {/* Instagram Post Simulator */}
          {activePreview === 0 && (
            <div className="bg-white rounded-xl shadow border border-[#d9c1c1]/50 max-w-lg mx-auto overflow-hidden">
              <div className="p-3 flex items-center justify-between border-b border-[#d9c1c1]/30">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/pageturner-emblem.png"
                    alt="PageTurner"
                    className="w-8 h-8 rounded-full border border-[#735c00]/30"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#400710] leading-none">pageturnerbooks</p>
                    <p className="text-[10px] text-[#534343]">Historic Mill Quarter</p>
                  </div>
                </div>
                <span className="text-xs text-[#534343]">•••</span>
              </div>
              <div className="relative h-64 bg-[#251915]">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
                  alt="Shelfie with coffee"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3.5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-[#ba1a1a] fill-[#ba1a1a] cursor-pointer" />
                    <MessageCircle className="w-5 h-5 text-[#251915] cursor-pointer" />
                    <Share2 className="w-5 h-5 text-[#251915] cursor-pointer" />
                  </div>
                  <span className="text-[11px] text-[#534343]">{SOCIAL_PILLARS[0].previewContent.metrics}</span>
                </div>
                <p className="text-xs text-[#251915] leading-relaxed">
                  <strong className="mr-1.5 font-bold">pageturnerbooks</strong>
                  {SOCIAL_PILLARS[0].previewContent.caption}
                </p>
                <span className="text-[10px] text-[#534343] uppercase tracking-wider block mt-2">
                  {SOCIAL_PILLARS[0].previewContent.timestamp}
                </span>
              </div>
            </div>
          )}

          {/* Facebook Event Simulator */}
          {activePreview === 1 && (
            <div className="bg-white rounded-xl shadow border border-[#d9c1c1]/50 max-w-lg mx-auto p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#735c00] text-white flex items-center justify-center font-bold">
                  FB
                </div>
                <div>
                  <p className="text-xs font-bold text-[#400710]">PageTurner Book Club & Salon Series</p>
                  <p className="text-[10px] text-[#534343]">Public Event • Hosted by PageTurner Books</p>
                </div>
              </div>
              <div className="p-4 bg-[#ffe9e3] rounded-xl border border-[#735c00]/30 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#735c00]">
                  THURSDAY AT 7:00 PM
                </span>
                <h4 className="font-serif text-base font-bold text-[#400710] mt-0.5">
                  {SOCIAL_PILLARS[1].previewContent.title}
                </h4>
                <p className="text-xs text-[#534343] mt-2 leading-relaxed">
                  {SOCIAL_PILLARS[1].previewContent.caption}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-[#d9c1c1]/30">
                <span className="text-[#534343]">{SOCIAL_PILLARS[1].previewContent.metrics}</span>
                <button className="px-4 py-1.5 rounded-lg bg-[#400710] text-[#ffe088] font-bold text-xs shadow hover:bg-[#5c1d24]">
                  ✓ Attending (Free)
                </button>
              </div>
            </div>
          )}

          {/* WhatsApp VIP Broadcast Simulator */}
          {activePreview === 2 && (
            <div className="bg-[#e5ddd5] rounded-xl shadow border border-[#d9c1c1]/50 max-w-lg mx-auto overflow-hidden">
              <div className="bg-[#075e54] text-white p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                    📖
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-none">The Reader's Circle VIP (PageTurner)</p>
                    <p className="text-[10px] text-white/80">520 members • broadcast list</p>
                  </div>
                </div>
                <span className="text-xs font-semibold bg-[#25d366] text-white px-2 py-0.5 rounded-full">
                  Official VIP
                </span>
              </div>

              <div className="p-4 space-y-3 min-h-[180px]">
                {/* Received Broadcast Bubble */}
                <div className="bg-white p-3.5 rounded-lg shadow-xs max-w-[85%] border-l-4 border-[#735c00]">
                  <p className="text-xs font-bold text-[#400710] mb-1">
                    {SOCIAL_PILLARS[2].previewContent.title}
                  </p>
                  <p className="text-xs text-[#251915] leading-relaxed">
                    {SOCIAL_PILLARS[2].previewContent.caption}
                  </p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-gray-400">
                    <span>9:02 AM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-[#34b7f1]" />
                  </div>
                </div>

                {/* Simulated Patron Replies */}
                {simulatedReplies.map((reply, rIdx) => (
                  <div key={rIdx} className="bg-[#dcf8c6] p-2.5 rounded-lg shadow-xs max-w-[75%] ml-auto text-xs text-[#251915]">
                    <p>{reply}</p>
                    <div className="flex items-center justify-end gap-1 mt-0.5 text-[9px] text-gray-400">
                      <span>Just now</span>
                      <CheckCheck className="w-3 h-3 text-[#34b7f1]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Input */}
              <form onSubmit={handleSendReply} className="p-2 bg-[#f0f0f0] flex items-center gap-2 border-t border-gray-300">
                <input
                  type="text"
                  placeholder='Try typing "RESERVE Sarah Jenkins" and press enter...'
                  value={whatsappReply}
                  onChange={(e) => setWhatsappReply(e.target.value)}
                  className="flex-1 bg-white px-3 py-1.5 rounded-full text-xs text-[#251915] focus:outline-none border border-gray-300"
                />
                <button
                  type="submit"
                  className="p-1.5 rounded-full bg-[#075e54] text-white hover:bg-[#128c7e] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
