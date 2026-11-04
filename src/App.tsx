/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GoogleCertificateSection from './components/GoogleCertificateSection';
import ServicesSection from './components/ServicesSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import RiskPreventionSection from './components/RiskPreventionSection';
import EquipmentSection from './components/EquipmentSection';
import PricingCtaSection from './components/PricingCtaSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingElements from './components/FloatingElements';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <GoogleCertificateSection />
        <ServicesSection />
        <TargetAudienceSection />
        <RiskPreventionSection />
        <EquipmentSection />
        <PricingCtaSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons & Virtual Assistant */}
      <FloatingElements />
    </div>
  );
}
