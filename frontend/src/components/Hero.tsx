import { useState } from "react";
import { Button } from "../components/ui/button";
import SplitLayoutReveal from "./SplitLayoutReveal";
import { Check } from "lucide-react";


const Hero = () => {
  const [showSplitLayout, setShowSplitLayout] = useState(false);


  const handleButtonClick = () => {
    setShowSplitLayout(true);
  };

  const handleSplitComplete = () => {
    setShowSplitLayout(false);
  };

  return (
    <>
      <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(/logo2.png)` }}
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl space-y-8 animate-fade-in text-left">

            {/* Main Heading */}
            <h1 className="font-luxury text-2xl md:text-4xl font-bold leading-tight text-white drop-shadow-lg">
              Find Your Perfect <br />
              Second Chance (மறுமணம்) at Love
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-white/90 max-w-2xl leading-relaxed drop-shadow-md">
              Vaarahi Matrimony is India's Most Trusted Second Marriage (மறுமணம்) Platform for Professionals looking for a fresh start.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-1 rounded-full">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-sm font-medium drop-shadow-md">Only Verified and Genuine Profiles.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-1 rounded-full">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-sm font-medium drop-shadow-md">Only for Qualified Professionals.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-1 rounded-full">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-sm font-medium drop-shadow-md">Only Mutual Interests are Connected.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                onClick={handleButtonClick}
                className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-md shadow-lg transition-transform hover:scale-105"
              >
                Find Your Match
              </Button>
            </div>
          </div>
        </div>
      </section>

      {showSplitLayout && (
        <SplitLayoutReveal onComplete={handleSplitComplete} />
      )}
    </>
  );
};

export default Hero;
