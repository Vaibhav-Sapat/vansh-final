import React, { useState } from 'react';
import { Mail, Check, Calendar, Gift, Award, ArrowRight, Sparkles } from 'lucide-react';
import { EmblemLogo } from './EmblemLogo';

export const EmailSection: React.FC = () => {
  const [subscribedEmail, setSubscribedEmail] = useState<string>('');
  const [subscribeSuccess, setSubscribeSuccess] = useState<boolean>(false);
  const [reservedBook, setReservedBook] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setSubscribeSuccess(true);
    setTimeout(() => {
      setSubscribedEmail('');
    }, 3000);
  };

  return (
    <section className="w-full py-16 bg-[#fff8f6]" id="email-campaign">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] text-[#735c00] font-bold uppercase tracking-widest mb-1">
            Subscriber Retention
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#400710] tracking-tight">
            06. Email Marketing & Retention
          </h2>
          <p className="text-sm sm:text-base text-[#534343] mt-2">
            “The PageTurner Dispatch” — a weekly literary digest cultivating passionate, long-term customer loyalty.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
            <span className="text-[#735c00] text-sm">❦</span>
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
          </div>
        </div>

        {/* Email Client Window Mockup */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-[#735c00]/30 overflow-hidden mb-12">
          {/* Chrome Top Bar */}
          <div className="bg-[#ffe9e3] px-4 py-2.5 flex items-center justify-between border-b border-[#d9c1c1]/50">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ba1a1a]/70 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-[#735c00]/70 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-600/70 inline-block"></span>
              <span className="ml-3 text-xs font-mono text-[#534343] hidden sm:inline">
                The PageTurner Dispatch — Reader Inbox
              </span>
            </div>
            <span className="text-[11px] text-[#735c00] font-semibold flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Issue #142 • Weekly Circulation</span>
            </span>
          </div>

          {/* Email Header Metadata */}
          <div className="p-4 sm:p-5 bg-[#fff8f6] border-b border-[#d9c1c1]/40 text-xs text-[#534343] space-y-1">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <div>
                <strong className="text-[#400710]">Subject: </strong>
                <span className="font-serif italic text-[#400710] font-semibold text-sm">
                  Autumn Rain, First Editions, and Spiced Plum Tea
                </span>
              </div>
              <span className="text-[10px] text-[#534343]">Thursday, 7:15 AM</span>
            </div>
            <div>
              <strong className="text-[#400710]">From: </strong>
              <span>Julian Finch & The PageTurner Booksellers &lt;dispatch@pageturnerbooks.local&gt;</span>
            </div>
            <div>
              <strong className="text-[#400710]">To: </strong>
              <span>Eleanor Vance &lt;eleanor.vance@university.edu&gt;</span>
            </div>
          </div>

          {/* Email Body Content */}
          <div className="p-6 sm:p-10 bg-[#fff8f6] text-[#251915] font-sans">
            {/* Masthead Banner */}
            <div className="text-center pb-6 mb-6 border-b-2 border-[#400710]">
              <div className="inline-block mx-auto mb-2 w-12 h-12 rounded-xl bg-[#400710] p-1 border border-[#ffe088]/40 shadow-sm">
                <EmblemLogo className="w-full h-full object-contain" />
              </div>
              <p className="text-[10px] tracking-widest text-[#735c00] uppercase font-bold">
                The PageTurner Dispatch • Est. 1998
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#400710] tracking-tight mt-1">
                Letters from the Hearth
              </h3>
              <p className="text-xs text-[#534343] mt-1 font-serif italic">
                Autumn Solstice Edition • 142 Cobblestone Walk
              </p>
            </div>

            {/* Letter Intro */}
            <div className="space-y-3.5 text-xs sm:text-sm text-[#534343] leading-relaxed mb-8">
              <p>
                <span className="font-serif text-3xl font-bold text-[#400710] float-left mr-2 leading-none">D</span>
                ear Reader, as October settles over the Historic Mill Quarter, the canal mist arrives early each morning. The wood stove in our fiction alcove has officially been lit for the season, and the scent of aged cedar and fresh printing ink fills the mezzanine.
              </p>
              <p>
                This week, we received a long-awaited crate of translated Nordic prose, alongside eight author-signed hardcovers from our distinguished visiting writer series. We invite you to pause your week, escape the glare of screens, and join us for a quiet afternoon of browsing.
              </p>
            </div>

            {/* Section 1: Staff Pick Spotlight */}
            <div className="p-5 sm:p-6 bg-white rounded-xl border border-[#735c00]/30 shadow-xs mb-8">
              <div className="flex items-center gap-2 text-[#735c00] text-[11px] font-bold uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                <span>Staff Pick of the Week</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-4 rounded-lg overflow-hidden border border-[#d9c1c1] shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80"
                    alt="Book Cover"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="sm:col-span-8 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#400710]">
                      Small Things Like These
                    </h4>
                    <p className="text-xs text-[#735c00] font-semibold">by Claire Keegan • Hardcover Edition</p>
                    <p className="text-xs text-[#534343] mt-2 leading-relaxed italic">
                      “A luminous, crystalline portrait of moral courage in 1985 Ireland. You will read it in two hours and remember it for decades.”
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#d9c1c1]/40 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-[#534343]">
                      Pair with: <strong className="text-[#400710]">Darjeeling 2nd Flush</strong>
                    </span>
                    <button
                      onClick={() => setReservedBook(true)}
                      className={`px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                        reservedBook
                          ? 'bg-green-800 text-white'
                          : 'bg-[#400710] text-[#ffe088] hover:bg-[#5c1d24]'
                      }`}
                    >
                      {reservedBook ? '✓ Reserved Behind Till' : 'Reserve Copy ($18.00)'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Salons & Gatherings */}
            <div className="mb-8">
              <h4 className="font-serif text-base font-bold text-[#400710] mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#735c00]" />
                <span>Upcoming Evenings by the Hearth</span>
              </h4>
              <div className="space-y-2.5">
                <div className="p-3 bg-white rounded-lg border border-[#d9c1c1]/40 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#400710] block font-semibold">
                      Thursday, Oct 24 • 7:00 PM
                    </strong>
                    <span className="text-[#534343]">Autumn Poetry Open Mic & Mulled Spiced Cider</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#735c00] bg-[#ffe9e3] px-2 py-1 rounded">
                    Free Entry
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-[#d9c1c1]/40 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-[#400710] block font-semibold">
                      Saturday, Oct 26 • 10:30 AM
                    </strong>
                    <span className="text-[#534343]">Little Readers Saturday Story Hour (Ages 3–8)</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#735c00] bg-[#ffe9e3] px-2 py-1 rounded">
                    Screen-Free
                  </span>
                </div>
              </div>
            </div>

            {/* Section 3: Loyalty & Guild Card Status */}
            <div className="p-4 bg-[#ffe9e3] rounded-xl border border-[#735c00]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#400710] text-[#ffe088]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-[#400710]">Your Reader's Guild Status: Scholar Tier</p>
                  <p className="text-[#534343]">340 / 400 Points — 60 pts until your free artisanal tea & pastry</p>
                </div>
              </div>
              <div className="w-full sm:w-28 bg-white h-2 rounded-full overflow-hidden border border-[#d9c1c1]">
                <div className="bg-[#735c00] h-full w-[85%] rounded-full"></div>
              </div>
            </div>

            {/* Email Signoff */}
            <div className="mt-8 pt-6 border-t border-[#d9c1c1]/50 text-center text-xs text-[#534343] space-y-1">
              <p className="font-serif italic text-sm text-[#400710]">Warmest regards,</p>
              <p className="font-bold text-[#400710]">Julian, Beatrice, and the PageTurner Staff</p>
              <p className="text-[11px] text-[#534343] pt-2">
                142 Cobblestone Walk, Historic Mill Quarter • Tel: (555) 724-3887
              </p>
              <div className="flex justify-center gap-3 text-[10px] text-[#735c00] pt-1">
                <span className="hover:underline cursor-pointer">Manage Preferences</span>
                <span>•</span>
                <span className="hover:underline cursor-pointer">Web Archive</span>
                <span>•</span>
                <span className="hover:underline cursor-pointer">Unsubscribe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Retention Lifecycle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#fff8f6] p-4 rounded-xl border border-[#d9c1c1]/40 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#735c00] block mb-1">
              1. Welcome Sequence
            </span>
            <h5 className="font-serif text-sm font-bold text-[#400710]">4-Part Narrative</h5>
            <p className="text-xs text-[#534343] mt-1">
              History of the shop, bookmonger philosophy, tea bar voucher, and staff pick recommendations.
            </p>
          </div>

          <div className="bg-[#fff8f6] p-4 rounded-xl border border-[#d9c1c1]/40 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#735c00] block mb-1">
              2. Salon Reminders
            </span>
            <h5 className="font-serif text-sm font-bold text-[#400710]">48-Hour Head Start</h5>
            <p className="text-xs text-[#534343] mt-1">
              Subscribers receive early seat reservation access before public social announcements.
            </p>
          </div>

          <div className="bg-[#fff8f6] p-4 rounded-xl border border-[#d9c1c1]/40 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#735c00] block mb-1">
              3. Loyalty Triggers
            </span>
            <h5 className="font-serif text-sm font-bold text-[#400710]">Point Milestones</h5>
            <p className="text-xs text-[#534343] mt-1">
              Automated celebration emails when patrons hit 100, 250, and 500 Guild points.
            </p>
          </div>

          <div className="bg-[#fff8f6] p-4 rounded-xl border border-[#d9c1c1]/40 shadow-xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#735c00] block mb-1">
              4. Re-Engagement
            </span>
            <h5 className="font-serif text-sm font-bold text-[#400710]">60-Day Dormancy</h5>
            <p className="text-xs text-[#534343] mt-1">
              "We saved a chair by the hearth for you" personalized note + $5 book token credit.
            </p>
          </div>
        </div>

        {/* Live Subscribe Simulation Bar */}
        <div className="bg-[#ffe9e3] p-6 rounded-2xl border border-[#735c00]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#400710]">
              Subscribe to The PageTurner Dispatch
            </h4>
            <p className="text-xs text-[#534343]">
              Join 2,400+ local readers for weekly curations, salon invites, and reading nook notes.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              value={subscribedEmail}
              onChange={(e) => setSubscribedEmail(e.target.value)}
              className="px-3.5 py-2 rounded-lg bg-white border border-[#d9c1c1] text-xs text-[#251915] focus:outline-none focus:border-[#400710] w-full sm:w-60"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-[#400710] text-[#ffe088] text-xs font-bold hover:bg-[#5c1d24] transition-colors shrink-0 shadow cursor-pointer"
            >
              {subscribeSuccess ? '✓ Subscribed' : 'Join Guild'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
