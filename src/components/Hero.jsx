import heropic1 from '../assets/heropic1.jpg';
import heropic2 from '../assets/heropic2.jpg';
import heropic3 from '../assets/heropic3.jpg';
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from 'react';


const OptimizedImage = ({ src, alt, className, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
    img.src = src;
  }, [src]);

  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">Image</span>
          </div>
        </div>
      )}
      
      {/* Actual image */}
      <img 
        src={src} 
        alt={alt} 
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

function Hero() {
  const navigate = useNavigate();

  // Preload images on component mount
  useEffect(() => {
    const imageUrls = [heropic1, heropic2, heropic3];
    
    // Create a promise for each image preload
    const preloadPromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });

    // Optional: Log when all images are preloaded
    Promise.all(preloadPromises)
      .then(() => console.log('All hero images preloaded'))
      .catch(() => console.log('Some hero images failed to preload'));
  }, []);

  // Smooth scroll helper with easing and custom duration
  const smoothScrollTo = (targetY, duration = 700) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="mb-12 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D488F] text-left max-w-full sm:max-w-xl">
              From Good to <span className="text-black">Great</span>.<br />
              Accelerate Your Trajectory with Modern-Agile Coaching & Community For The Next Gen.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-800 text-left max-w-xl">
              Aspiring to lead in your industry? Start with Koach. Harness the power of expert coaching and engaged peer networks to fast-track your journey to where you want to be.
            </p>

            <div className="mt-10 text-left">
              <button 
                onClick={() => {
                  const target = document.getElementById("koach-search");
                  if (target) {
                    const rect = target.getBoundingClientRect();
                    const scrollMarginTop = parseFloat(getComputedStyle(target).scrollMarginTop || "0");
                    const targetY = window.pageYOffset + rect.top - (isNaN(scrollMarginTop) ? 0 : scrollMarginTop);
                    smoothScrollTo(targetY, 700);
                  }
                }}
                className="text-[#2D488F] font-bold bg-[#F5E649] px-4 py-2 hover:bg-[#f3e338] transition-colors text-lg rounded-md"
              >
                Search for Koach
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2D488F]/30 to-[#F5E649]/30 rounded-3xl filter blur-3xl z-0" />
            <div className="relative grid grid-cols-3 gap-2 sm:gap-4 justify-center sm:ml-0 ml-10 z-10">
              <OptimizedImage
                src={heropic1}
                alt="Professional 1"
                className="h-40 sm:h-[473px] rounded-[60px] w-[90px] sm:w-[160px]"
                priority={true}
              />
              <OptimizedImage
                src={heropic2}
                alt="Professional 2"
                className="h-40 sm:h-[473px] mt-8 sm:mt-32 rounded-[60px] w-[90px] sm:w-[160px]"
                priority={true}
              />
              <OptimizedImage
                src={heropic3}
                alt="Professional 3"
                className="h-40 sm:h-[473px] rounded-[60px] w-[90px] sm:w-[160px]"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;