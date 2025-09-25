'use client';

import Navbar from '@/app/components/Navbar';
import Footer from '../components/Footer';

export default function SiteLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
