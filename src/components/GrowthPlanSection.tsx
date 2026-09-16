import React, { useState } from 'react';
import { ROADMAP_PHASES, BUDGET_ALLOCATION } from '../data/marketingData';
import { TrendingUp, Calculator, CheckCircle2, DollarSign, Calendar, ArrowUpRight, BarChart3 } from 'lucide-react';

export const GrowthPlanSection: React.FC = () => {
  const [adSpend, setAdSpend] = useState<number>(1200);
  const [basketSize, setBasketSize] = useState<number>(38);
  const [monthlyRedemptions, setMonthlyRedemptions] = useState<number>(380);

  // Calculations
  const monthlyRevenue = monthlyRedemptions * basketSize;
  const roas = (monthlyRevenue / adSpend).toFixed(1);
  const sixMonthRevenue = monthlyRevenue * 6;
  const newReadersYearlyLtv = Math.round(monthlyRedemptions * 6 * 0.42 * 760); // 42% repeat * avg LTV

  return (
    <section className="w-full py-16 bg-[#fff1ed]/60 border-t border-[#d9c1c1]/40" id="growth-plan">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] text-[#735c00] font-bold uppercase tracking-widest mb-1">
            Commercial Trajectory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#400710] tracking-tight">
            07. 6-Month Growth Roadmap & Financial Model
          </h2>
          <p className="text-sm sm:text-base text-[#534343] mt-2">
            A phased operational rollout to capture market share, elevate patron lifetime value, and generate durable revenue.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
            <span className="text-[#735c00] text-sm">❦</span>
            <div className="h-[1px] w-12 bg-[#e9c349]"></div>
          </div>
        </div>

        {/* 3-Phase Roadmap Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ROADMAP_PHASES.map((phase, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#735c00]/25 flex flex-col justify-between hover:shadow-md hover:border-[#735c00] transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#d9c1c1]/40">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#ffe9e3] text-[#735c00] border border-[#735c00]/30">
                    {phase.phase} • {phase.months}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#400710]">
                    <Calendar className="w-3.5 h-3.5 text-[#735c00]" />
                    <span>Quarter {idx < 2 ? '1' : '2'}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#400710] mb-2 leading-tight">
                  {phase.title}
                </h3>
                <p className="text-xs text-[#534343] mb-4 italic leading-relaxed">
                  {phase.focus}
                </p>

                <div className="space-y-2 mb-4">
                  {phase.milestones.map((ms, mIdx) => (
                    <div key={mIdx} className="flex items-start gap-2 text-xs text-[#534343]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#735c00] shrink-0 mt-0.5" />
                      <span className="leading-snug">{ms}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#d9c1c1]/40 bg-[#fff8f6] -mx-6 -mb-6 p-4 rounded-b-2xl">
                <span className="text-[10px] uppercase font-bold text-[#735c00] block mb-0.5">
                  Target Outcome:
                </span>
                <span className="text-xs font-bold text-[#400710]">{phase.expectedGain}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Financial Calculator & Budget Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Interactive Calculator */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#735c00]/30">
            <div className="flex items-center gap-2 mb-2 text-[#735c00]">
              <Calculator className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Interactive Pro-Forma Engine</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#400710] mb-1">
              Revenue & ROI Sensitivity Forecast
            </h3>
            <p className="text-xs text-[#534343] mb-6">
              Adjust variables below to simulate realistic returns on marketing investments.
            </p>

            <div className="space-y-5">
              {/* Slider 1: Ad Spend */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-[#400710]">Monthly Marketing Spend:</span>
                  <span className="font-mono text-sm font-bold text-[#400710]">${adSpend.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="3000"
                  step="100"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full accent-[#400710] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#534343]">
                  <span>$500/mo (Conservative)</span>
                  <span>$1,200/mo (Recommended)</span>
                  <span>$3,000/mo (Aggressive)</span>
                </div>
              </div>

              {/* Slider 2: Average Basket */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-[#400710]">Average Basket Size (AOV):</span>
                  <span className="font-mono text-sm font-bold text-[#400710]">${basketSize}</span>
                </div>
                <input
                  type="range"
                  min="24"
                  max="60"
                  step="2"
                  value={basketSize}
                  onChange={(e) => setBasketSize(Number(e.target.value))}
                  className="w-full accent-[#400710] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#534343]">
                  <span>$24 (Paperback Only)</span>
                  <span>$38 (Book + Tea Pairing)</span>
                  <span>$60 (Hardcovers + Gifts)</span>
                </div>
              </div>

              {/* Slider 3: Monthly Redemptions */}
              <div>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="font-semibold text-[#400710]">Monthly Voucher Till Redemptions:</span>
                  <span className="font-mono text-sm font-bold text-[#400710]">{monthlyRedemptions} patrons</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="700"
                  step="10"
                  value={monthlyRedemptions}
                  onChange={(e) => setMonthlyRedemptions(Number(e.target.value))}
                  className="w-full accent-[#400710] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#534343]">
                  <span>150 redemptions</span>
                  <span>380 redemptions</span>
                  <span>700 redemptions</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-[#d9c1c1]/40">
              <div className="bg-[#fff8f6] p-3 rounded-xl border border-[#d9c1c1]/40 text-center">
                <span className="text-[10px] text-[#534343] uppercase font-bold block">Monthly Sales</span>
                <span className="font-serif text-lg font-bold text-[#400710]">
                  ${monthlyRevenue.toLocaleString()}
                </span>
              </div>

              <div className="bg-[#fff8f6] p-3 rounded-xl border border-[#d9c1c1]/40 text-center">
                <span className="text-[10px] text-[#534343] uppercase font-bold block">Projected ROAS</span>
                <span className="font-serif text-lg font-bold text-[#735c00]">
                  {roas}x
                </span>
              </div>

              <div className="bg-[#fff8f6] p-3 rounded-xl border border-[#d9c1c1]/40 text-center">
                <span className="text-[10px] text-[#534343] uppercase font-bold block">6-Mo Gross</span>
                <span className="font-serif text-lg font-bold text-[#400710]">
                  ${sixMonthRevenue.toLocaleString()}
                </span>
              </div>

              <div className="bg-[#ffe9e3] p-3 rounded-xl border border-[#735c00]/30 text-center">
                <span className="text-[10px] text-[#735c00] uppercase font-bold block">Est. LTV Value</span>
                <span className="font-serif text-lg font-bold text-[#400710]">
                  ${(newReadersYearlyLtv / 1000).toFixed(0)}k/yr
                </span>
              </div>
            </div>
          </div>

          {/* Monthly Budget Allocation */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#735c00]/30">
            <div className="flex items-center gap-2 mb-2 text-[#735c00]">
              <DollarSign className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Resource Allocation</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#400710] mb-1">
              $1,200 Monthly Budget Split
            </h3>
            <p className="text-xs text-[#534343] mb-6">
              Carefully distributed across paid media, organic search, and retention mechanics.
            </p>

            <div className="space-y-4">
              {BUDGET_ALLOCATION.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-[#400710]">{item.category}</span>
                    <span className="text-[#735c00]">${item.amount} ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-[#fff1ed] h-2 rounded-full overflow-hidden border border-[#d9c1c1]/40">
                    <div
                      className="bg-[#400710] h-full rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-[11px] text-[#534343]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before vs After Benchmark Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#d9c1c1]/50 shadow-sm overflow-x-auto">
          <h3 className="font-serif text-xl font-bold text-[#400710] mb-4">
            Strategic Performance Matrix (Baseline vs. 6-Month Projected)
          </h3>
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-[#d9c1c1] text-[#735c00] uppercase text-[10px] font-bold">
                <th className="py-2.5">Key Performance Indicator</th>
                <th className="py-2.5">Baseline (Current)</th>
                <th className="py-2.5">6-Month Target</th>
                <th className="py-2.5">Strategic Driver</th>
                <th className="py-2.5 text-right">Growth Uplift</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d9c1c1]/30 text-[#251915]">
              <tr>
                <td className="py-3 font-semibold text-[#400710]">Monthly Store Footfall</td>
                <td className="py-3 text-[#534343]">1,850 patrons</td>
                <td className="py-3 font-bold text-[#400710]">2,627 patrons</td>
                <td className="py-3 text-[#534343]">5-mile Meta geofencing & Local 3-Pack</td>
                <td className="py-3 text-right font-bold text-green-700">+42.0%</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-[#400710]">Average Basket Size (AOV)</td>
                <td className="py-3 text-[#534343]">$26.40</td>
                <td className="py-3 font-bold text-[#400710]">$38.20</td>
                <td className="py-3 text-[#534343]">Tea pairings, blind-date bundles & tote gifts</td>
                <td className="py-3 text-right font-bold text-green-700">+44.7%</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-[#400710]">Email Subscriber Guild</td>
                <td className="py-3 text-[#534343]">180 dormant emails</td>
                <td className="py-3 font-bold text-[#400710]">2,500+ active</td>
                <td className="py-3 text-right font-bold text-green-700">+1,288%</td>
                <td className="py-3 text-right font-bold text-green-700">+1,288%</td>
              </tr>
              <tr>
                <td className="py-3 font-semibold text-[#400710]">Overall Monthly Revenue</td>
                <td className="py-3 text-[#534343]">$48,840</td>
                <td className="py-3 font-bold text-[#400710]">$70,818</td>
                <td className="py-3 text-[#534343]">Omni-channel conversion synchronization</td>
                <td className="py-3 text-right font-bold text-green-700">+45.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
