import React from 'react';
import { CASE_STUDY_EXECUTIVE_BRIEF, PERSONAS, ROADMAP_PHASES } from '../data/marketingData';
import { X, Printer, Download, BookOpen, Check, School, ShieldCheck } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#fff8f6] rounded-2xl max-w-4xl w-full border-2 border-[#735c00]/40 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Actions */}
        <div className="p-4 px-6 bg-[#ffe9e3] border-b border-[#d9c1c1]/50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <School className="w-5 h-5 text-[#735c00]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#400710]">
              Official Academic Brief & Strategy Document
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#d9c1c1] text-xs font-semibold text-[#400710] hover:bg-[#fff8f6] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#fbe3dc] text-[#534343] hover:text-[#400710] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Academic Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-[#251915]">
          {/* Document Header */}
          <div className="border-b-2 border-[#400710] pb-6 text-center">
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#735c00]">
              {CASE_STUDY_EXECUTIVE_BRIEF.institution}
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#400710] mt-2 mb-1">
              {CASE_STUDY_EXECUTIVE_BRIEF.title}
            </h1>
            <p className="font-serif italic text-base text-[#735c00] mb-2">
              {CASE_STUDY_EXECUTIVE_BRIEF.subtitle}
            </p>
            <div className="text-xs text-[#534343]">
              <span>{CASE_STUDY_EXECUTIVE_BRIEF.author}</span> • <span>September 2026</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="p-5 bg-white rounded-xl border border-[#735c00]/30 shadow-xs">
            <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-[#400710] mb-2">
              Executive Abstract
            </h3>
            <p className="text-xs sm:text-sm text-[#534343] leading-relaxed italic">
              {CASE_STUDY_EXECUTIVE_BRIEF.abstract}
            </p>
          </div>

          {/* Core Strategic Objectives */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#400710] mb-3">
              1. Primary Strategic Objectives
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CASE_STUDY_EXECUTIVE_BRIEF.coreObjectives.map((obj, idx) => (
                <div key={idx} className="p-3.5 bg-white rounded-lg border border-[#d9c1c1]/40 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#400710] text-[#ffe088] flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-[#534343] leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience Matrix */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#400710] mb-3">
              2. Patron Segment Profile Matrix
            </h3>
            <div className="overflow-x-auto bg-white rounded-xl border border-[#d9c1c1]/40 p-4">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-[#d9c1c1] text-[#735c00] font-bold">
                    <th className="py-2">Persona</th>
                    <th className="py-2">Demographic</th>
                    <th className="py-2">Primary Need</th>
                    <th className="py-2">Acquisition Channel</th>
                    <th className="py-2 text-right">LTV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d9c1c1]/30">
                  {PERSONAS.map((p) => (
                    <tr key={p.id}>
                      <td className="py-2.5 font-bold text-[#400710]">{p.name} ({p.segment})</td>
                      <td className="py-2.5 text-[#534343]">{p.age}</td>
                      <td className="py-2.5 text-[#534343]">{p.favoriteGenre}</td>
                      <td className="py-2.5 text-[#534343]">{p.channels.join(', ')}</td>
                      <td className="py-2.5 text-right font-bold text-[#400710]">{p.ltv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Implementation Phasing */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#400710] mb-3">
              3. Operational Phasing & Milestones
            </h3>
            <div className="space-y-3">
              {ROADMAP_PHASES.map((rp, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl border border-[#d9c1c1]/40">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-[#400710]">{rp.phase}: {rp.title}</span>
                    <span className="text-[11px] font-semibold text-[#735c00]">{rp.months}</span>
                  </div>
                  <p className="text-xs text-[#534343] mb-2">{rp.focus}</p>
                  <div className="text-[11px] font-bold text-green-800">Target: {rp.expectedGain}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification Imprint */}
          <div className="pt-6 border-t border-[#d9c1c1]/50 text-center text-xs text-[#534343]">
            <p className="font-serif italic text-sm text-[#400710]">
              “A bookstore is one of the only pieces of physical evidence we have that people are still thinking.”
            </p>
            <p className="text-[11px] text-[#534343] mt-1">
              Case Study Approved for Publication • Academic Year 2026 • PageTurner Books Strategy Collective
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
