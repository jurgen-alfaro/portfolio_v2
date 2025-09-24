'use client';

import Navbar from '@/app/components/Navbar';

export default function SiteLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
}
