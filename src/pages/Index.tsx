
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import PlansSection from '../components/PlansSection';
import ProcessSection from '../components/ProcessSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <PlansSection />
      <ProcessSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
