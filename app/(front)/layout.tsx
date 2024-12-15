import SiteHeader from '@/components/site-header';
import React from 'react';

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  );
}