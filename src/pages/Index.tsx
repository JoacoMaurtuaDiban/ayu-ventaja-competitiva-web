
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import PlansSection from '../components/PlansSection';
import AyuImpactSection from '../components/AyuImpactSection';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <PlansSection />
      <AyuImpactSection />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Index;
