import React, { useState, useEffect } from 'react';
import { BookOpen, Download, Bookmark, Menu, X, SlidersHorizontal, Presentation } from 'lucide-react';
import { EmblemLogo } from './EmblemLogo';

interface HeaderProps {
  onOpenReport: () => void;
  isPresentationMode: boolean;
  onTogglePresentationMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenReport,
  isPresentationMode,
  onTogglePresentationMode
}) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navLinks = [
    { id: 'hero', label: 'Hero' },
    { id: 'profile', label: 'Profile' },
    { id: 'audience', label: 'Audience' },
    { id: 'seo-keywords', label: 'SEO Keywords' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'ad-creative', label: 'Ad Creative' },
    { id: 'email-campaign', label: 'Email Campaign' },
    { id: 'growth-plan', label: 'Growth Plan' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-200 ${scrolled ? 'bg-[#fff8f6]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(43,30,26,0.08)]' : 'bg-[#fff8f6] border-b border-[#d9c1c1]/40'}`}>
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
          id="header-brand-logo"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-[#735c00]/30 shrink-0 bg-[#400710] flex items-center justify-center p-0.5">
            <EmblemLogo className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#400710] leading-tight tracking-tight group-hover:text-[#5c1d24] transition-colors">
              PageTurner Books
            </span>
            <span className="text-[11px] font-semibold text-[#534343] tracking-wider uppercase">
              Academic Project & Marketing Strategy Case Study
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-4 text-sm" id="desktop-nav-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`py-1.5 transition-all whitespace-nowrap text-xs font-semibold cursor-pointer ${
                  isActive
                    ? 'text-[#400710] font-bold border-b-2 border-[#400710]'
                    : 'text-[#534343] hover:text-[#251915] border-b-2 border-transparent'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffe9e3] border border-[#735c00]/30 text-[#534343]">
            <Bookmark className="w-3.5 h-3.5 text-[#735c00]" />
            <span className="text-[11px] font-semibold tracking-wide text-[#251915]">
              Case Study: Local Retail Revival
            </span>
          </div>

          {/* Presentation Mode Toggle */}
          <button
            onClick={onTogglePresentationMode}
            title={isPresentationMode ? 'Exit Presentation Mode' : 'Enter Executive Deck Mode'}
            className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
              isPresentationMode
                ? 'bg-[#fed65b] text-[#400710] border-[#735c00]'
                : 'bg-white text-[#534343] border-[#d9c1c1] hover:bg-[#ffe9e3]'
            }`}
          >
            <Presentation className="w-4 h-4 text-[#735c00]" />
            <span className="hidden md:inline">{isPresentationMode ? 'Executive Deck' : 'Deck Mode'}</span>
          </button>

          {/* PDF Report Trigger */}
          <button
            onClick={onOpenReport}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#400710] text-white text-xs font-semibold hover:bg-[#5c1d24] shadow-sm transition-all cursor-pointer"
            id="btn-report-modal"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Academic Report</span>
            <span className="sm:hidden">Report</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#400710] hover:bg-[#ffe9e3] transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Decorative Brand Accent Line */}
      <div className="w-full h-[2px] bg-[#400710]">
        <div className="w-full h-[1px] bg-[#ffe088] opacity-70"></div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fff8f6] border-b border-[#d9c1c1] shadow-lg px-4 py-4 space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-[#d9c1c1]/50">
            <span className="text-xs uppercase tracking-wider text-[#534343] font-bold">Strategy Sections</span>
            <button
              onClick={onTogglePresentationMode}
              className="text-xs text-[#735c00] font-semibold flex items-center gap-1"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>{isPresentationMode ? 'Exit Deck Mode' : 'Deck Mode'}</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-3 py-2 rounded-md text-xs font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#400710] text-white'
                    : 'text-[#534343] hover:bg-[#ffe9e3]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
