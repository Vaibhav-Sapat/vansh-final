import React, { useState } from 'react';
import { Heart, MessageSquare, Share2, Tag, Check, Copy, Sparkles, X, Target, DollarSign, RefreshCw } from 'lucide-react';
import { EmblemLogo } from './EmblemLogo';

export const AdCreativeSection: React.FC = () => {
  const [likes, setLikes] = useState<number>(1248);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [showVoucherModal, setShowVoucherModal] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const voucherCode = 'PAGETURNER-WELCOME-20';

  const toggleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  const handleCopyVoucher = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section className="w-full py-16 bg-[#fff1ed]/60 border-y border-[#d9c1c1]/40" id="ad-creative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] text-[#735c00] font-bold uppercase tracking-widest mb-1">
            Paid Acquisition
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#400710] tracking-tight">
            05. Paid Campaign Creative Mockup
          </h2>
          <p className="text-sm sm:text-base text-[#534343] mt-2">
            High-conversion sponsored creative engineered for Meta (Instagram & Facebook Feed) hyper-targeted to local bibliophiles.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
            <span className="text-[#735c00] text-sm">❦</span>
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Simulated Feed Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#d9c1c1]/50 overflow-hidden">
              {/* Ad Header */}
              <div className="p-3 px-4 flex items-center justify-between border-b border-[#d9c1c1]/30 bg-[#fff8f6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-[#735c00]/40 shadow-xs bg-[#400710] shrink-0 p-0.5">
                    <EmblemLogo className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-[#400710] leading-tight">PageTurner Books</span>
                      <span className="material-symbols-outlined text-[14px] text-[#735c00]">verified</span>
                    </div>
                    <span className="text-[11px] text-[#534343] leading-none">Sponsored • 📍 0.8 miles away</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="text-xs text-[#735c00] font-bold hover:underline cursor-pointer">
                    Follow
                  </button>
                  <span className="material-symbols-outlined text-[18px] text-[#534343]">more_horiz</span>
                </div>
              </div>

              {/* Vintage Book Frame Creative */}
              <div className="relative bg-[#400710] p-6 text-white flex flex-col justify-between min-h-[380px] overflow-hidden">
                {/* Decorative Inset Foil Border */}
                <div className="absolute inset-2.5 border-2 border-[#e9c349]/40 pointer-events-none rounded-lg"></div>

                {/* Top Foil Badge */}
                <div className="flex justify-between items-start z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe088] text-[#400710] text-[11px] font-bold shadow">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Welcome Neighborhood Treat</span>
                  </span>
                  <div className="w-11 h-11 rounded-full border border-[#ffe088]/60 flex items-center justify-center text-[#ffe088] text-[10px] font-serif font-bold text-center leading-tight">
                    Est.<br />1998
                  </div>
                </div>

                {/* Center Headline & Copy */}
                <div className="my-5 z-10">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#ffe088] tracking-tight leading-tight mb-2">
                    Rediscover the Smell of Real Paper.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#ffb3b6] leading-snug">
                    Tired of endless screens? Step away from algorithms into your neighborhood sanctuary of stories.
                  </p>

                  <div className="mt-4 p-3 bg-[#5c1d24]/90 rounded-lg border border-[#ffe088]/30 text-xs text-white">
                    <strong className="text-[#ffe088] block font-semibold mb-0.5">EXCLUSIVE INVITATION:</strong>
                    Get <span className="underline font-bold text-[#ffe088]">20% Off Your First Handpicked Book</span> + a Complimentary Pot of Artisanal Loose-Leaf Tea at our reading nook.
                  </div>
                </div>

                {/* Bottom Crest */}
                <div className="flex items-center justify-between text-xs text-[#ffe088]/90 border-t border-[#ffe088]/20 pt-2.5 z-10">
                  <span className="flex items-center gap-1 text-[11px]">
                    <span className="material-symbols-outlined text-[15px]">menu_book</span>
                    <span>142 Cobblestone Walk</span>
                  </span>
                  <span className="font-serif italic text-[11px]">Voted Favorite Independent 2024</span>
                </div>
              </div>

              {/* Ad Footer Call-To-Action Bar */}
              <div className="p-3 px-4 bg-[#ffe9e3] flex items-center justify-between border-t border-[#d9c1c1]/40">
                <div className="flex flex-col max-w-[210px]">
                  <span className="text-[10px] uppercase text-[#534343] font-semibold tracking-wider">
                    pageturnerbooks.local/welcome
                  </span>
                  <span className="text-xs font-bold text-[#400710] truncate">
                    Claim 20% Voucher & Tea
                  </span>
                </div>
                <button
                  onClick={() => setShowVoucherModal(true)}
                  className="px-4 py-2 rounded-lg bg-[#400710] text-[#ffe088] text-xs font-bold hover:bg-[#5c1d24] transition-colors shadow cursor-pointer"
                >
                  Claim Voucher
                </button>
              </div>

              {/* Social Engagement Metrics Bar */}
              <div className="p-2.5 px-4 bg-white text-xs text-[#534343] flex items-center justify-between border-t border-[#d9c1c1]/20">
                <button
                  onClick={toggleLike}
                  className="flex items-center gap-1.5 font-medium hover:text-[#ba1a1a] transition-colors cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${hasLiked ? 'text-[#ba1a1a] fill-[#ba1a1a]' : 'text-[#ba1a1a]'}`} />
                  <span>{likes.toLocaleString()} Likes</span>
                </button>
                <span>184 Comments • 92 Shares</span>
              </div>
            </div>
          </div>

          {/* Right Column: Campaign Parameters & Targeting Specs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border border-[#d9c1c1]/50">
              <span className="text-[11px] text-[#735c00] font-bold uppercase tracking-wider">
                Campaign Architecture
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#400710] font-semibold mt-1 mb-5">
                Local Conversion Funnel
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#fff8f6] border border-[#d9c1c1]/40">
                  <div className="p-2 rounded-lg bg-[#400710]/10 text-[#400710] shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#400710] block font-semibold text-xs mb-0.5">
                      Geographic & Demographic Scope
                    </strong>
                    <p className="text-[#534343] leading-relaxed">
                      Radius: 5.0 miles from Historic Mill District. Age: 21–58. Interests: Literature, Indie Bookshops, NPR, Goodreads, The New Yorker, Craft Coffee.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#fff8f6] border border-[#d9c1c1]/40">
                  <div className="p-2 rounded-lg bg-[#735c00]/10 text-[#735c00] shrink-0 mt-0.5">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#400710] block font-semibold text-xs mb-0.5">
                      Budget & Projected Unit Economics
                    </strong>
                    <p className="text-[#534343] leading-relaxed">
                      Monthly Ad Spend: $1,200 • Projected Cost Per Voucher Claim: $2.40 • Projected ROAS:{' '}
                      <strong className="text-[#400710]">4.8x</strong> based on verified in-store till redemptions and $38 average basket.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#fff8f6] border border-[#d9c1c1]/40">
                  <div className="p-2 rounded-lg bg-[#5c1d24]/10 text-[#400710] shrink-0 mt-0.5">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#400710] block font-semibold text-xs mb-0.5">
                      Retention Retargeting Trigger
                    </strong>
                    <p className="text-[#534343] leading-relaxed">
                      Visitors who claim the welcome coupon are automatically enrolled in the 4-part “Chapter Two” weekly email series, driving 38% second-month repeat visits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Voucher Claim Modal */}
      {showVoucherModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fff8f6] rounded-2xl max-w-md w-full border-2 border-[#735c00] p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowVoucherModal(false)}
              className="absolute top-4 right-4 text-[#534343] hover:text-[#400710] p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#735c00]">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Neighborhood Welcome Gift</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#400710]">
              Your PageTurner Welcome Pass
            </h3>
            <p className="text-xs text-[#534343] mt-1">
              Present this pass at 142 Cobblestone Walk for 20% off your handpicked volume and your complimentary loose-leaf tea.
            </p>

            <div className="my-5 p-4 bg-white rounded-xl border border-dashed border-[#735c00] text-center">
              <span className="text-[10px] text-[#534343] uppercase tracking-wider block mb-1">
                Your Single-Use Till Voucher Code
              </span>
              <div className="font-mono text-xl font-bold text-[#400710] tracking-wider mb-2">
                {voucherCode}
              </div>
              <button
                onClick={handleCopyVoucher}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ffe9e3] text-[#400710] text-xs font-semibold hover:bg-[#fbe3dc] cursor-pointer"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Code Copied!' : 'Copy Voucher Code'}</span>
              </button>
            </div>

            <div className="text-[11px] text-[#534343] space-y-1">
              <p>• Valid for 14 days from issue date.</p>
              <p>• Redeemable in-store at 142 Cobblestone Walk till desk.</p>
              <p>• Includes choice of Darjeeling, Earl Grey, or Spiced Plum tea.</p>
            </div>

            <button
              onClick={() => setShowVoucherModal(false)}
              className="w-full mt-5 py-2.5 rounded-lg bg-[#400710] text-[#ffe088] font-bold text-xs shadow hover:bg-[#5c1d24] cursor-pointer"
            >
              Done & Save to Passbook
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
