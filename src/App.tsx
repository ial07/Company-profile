import React, { useState, useEffect } from "react";
import HeroSection from "./components/container/HeroSection";
import Headers from "./components/container/Header/Header";
import AboutSection from "./components/container/AboutSection/AboutSection";
import { ProcessSection } from "./components/container/ProcessSection";
import ServiceSection from "./components/container/ServiceSection/ServiceSection";
import { PortfolioSection } from "./components/container/PortfolioSection";
import { TestimonialSection } from "./components/container/TestimonialSection";
import { FaqSection } from "./components/container/FaqSection";
import { QnASection } from "./components/container/QnASection";
import Footer from "./components/container/Footer";
import CompanyLogoSection from "./components/container/CompanyLogoSection";
import IndustrySection from "./components/container/IndustrySection";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Sync with <html> class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-quicksand">
      <Headers />
      <HeroSection />
      <CompanyLogoSection />
      <AboutSection />
      <ProcessSection />
      <ServiceSection />
      <IndustrySection />
      <PortfolioSection />
      <TestimonialSection />
      <FaqSection />
      <QnASection />
      <Footer />

      {/* Dark mode toggle button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:scale-110 transition-transform cursor-pointer"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default App;
