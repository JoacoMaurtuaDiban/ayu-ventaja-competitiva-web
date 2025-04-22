
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import PlansSection from '../components/PlansSection';
import ProcessSection from '../components/ProcessSection';
import ImpactSection from '../components/ImpactSection';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Index = () => {
  // Parallax scroll effect for the hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      if (heroSection) {
        // Apply a subtle parallax effect
        const heroImages = heroSection.querySelectorAll('img');
        heroImages.forEach(img => {
          img.style.transform = `translateY(${scrollY * 0.2}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <PlansSection />
      <ProcessSection />
      <ImpactSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
