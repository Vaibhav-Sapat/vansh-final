/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { AudienceSection } from './components/AudienceSection';
import { SeoSection } from './components/SeoSection';
import { SocialSection } from './components/SocialSection';
import { AdCreativeSection } from './components/AdCreativeSection';
import { EmailSection } from './components/EmailSection';
import { GrowthPlanSection } from './components/GrowthPlanSection';
import { Footer } from './components/Footer';
import { ReportModal } from './components/ReportModal';
import { PresentationMode } from './components/PresentationMode';

export default function App() {
  const [isReportOpen, setIsReportOpen] = useState<boolean>(false);
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#fff8f6] text-[#251915] font-sans antialiased flex flex-col selection:bg-[#ffdada] selection:text-[#3d050e]">
      {/* Fixed Sticky Header Navigation */}
      <Header
        onOpenReport={() => setIsReportOpen(true)}
        isPresentationMode={isPresentationMode}
        onTogglePresentationMode={() => setIsPresentationMode((prev) => !prev)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1 flex flex-col">
        <HeroSection onOpenReport={() => setIsReportOpen(true)} />
        <ProfileSection />
        <AudienceSection />
        <SeoSection />
        <SocialSection />
        <AdCreativeSection />
        <EmailSection />
        <GrowthPlanSection />
      </main>

      {/* Strategic Footer */}
      <Footer />

      {/* Academic Brief & Report Modal */}
      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />

      {/* Full-Screen Presentation Slide Deck Mode */}
      {isPresentationMode && (
        <PresentationMode onClose={() => setIsPresentationMode(false)} />
      )}
    </div>
  );
}

