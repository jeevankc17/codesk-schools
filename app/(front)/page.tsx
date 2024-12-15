import { DashboardPreview } from '@/components/frontend/dashboard-preview';
import GridFeatures from '@/components/frontend/grid-features';
import HeroSection from '@/components/frontend/hero-section';
import LogoCloud from '@/components/frontend/logo-cloud';
import React from 'react';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LogoCloud />
      <DashboardPreview />
      <GridFeatures />
    </main>
  );
}
