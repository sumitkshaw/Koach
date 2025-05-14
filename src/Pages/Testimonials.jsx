import React, { useState } from "react";
import Shade from "../assets/Shade.png";
import T1 from "../assets/T1.png";
import T2 from "../assets/T2.png";
import T3 from "../assets/T3.png";
import Star from "../assets/Star 29.png";
import arrow from "../assets/Arrow left.png";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const testimonials = [
    { id: 1, rating: 5, image: T1, text: "I love Koach so much! From features that let me instantly match with high quality prospects and more." },
    { id: 2, rating: 4, image: T2, text: "I love Koach so much! From features that let me instantly match with high quality prospects and more." },
    { id: 3, rating: 2, image: T3, text: "I love Koach so much! From features that let me instantly match with high quality prospects and more." },
    { id: 4, rating: 3, image: T1, text: "I love Koach so much! From features that let me instantly match with high quality prospects and more." },
    { id: 5, rating: 5, image: T2, text: "I love Koach so much! From features that let me instantly match with high quality prospects and more." },
  ];

  const goToPrevious = () => {
    if (isAnimating) return;
    setDirection("prev");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
      setIsAnimating(false);
    }, 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setDirection("next");
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
      setIsAnimating(false);
    }, 300);
  };

  const getVisibleIndices = () => {
    const count = testimonials.length;
    const indices = [];
    indices.push(activeIndex);
    indices.push((activeIndex - 1 + count) % count);
    indices.push((activeIndex - 2 + count) % count);
    indices.push((activeIndex + 1) % count);
    indices.push((activeIndex + 2) % count);
    return indices;
  };

  const getPositionClass = (index) => {
    const indices = getVisibleIndices();
    const centerIndex = indices[0];
    const leftIndex1 = indices[1];
    const leftIndex2 = indices[2];
    const rightIndex1 = indices[3];
    const rightIndex2 = indices[4];

    if (index === centerIndex)
      return "left-1/2 -translate-x-1/2 z-30 scale-100 sm:scale-125";
    if (index === leftIndex1)
      return "left-[25%] sm:left-[40%] -translate-x-1/2 z-20 scale-95 sm:scale-105";
    if (index === leftIndex2)
      return "left-[10%] sm:left-[30%] -translate-x-1/2 z-10 scale-90 sm:scale-100";
    if (index === rightIndex1)
      return "left-[75%] sm:left-[60%] -translate-x-1/2 z-20 scale-95 sm:scale-105";
    if (index === rightIndex2)
      return "left-[90%] sm:left-[70%] -translate-x-1/2 z-10 scale-90 sm:scale-100";
    return "hidden";
  };

  const getAnimationClass = (index) => {
    if (!isAnimating) return "";
    const indices = getVisibleIndices();
    const centerIndex = indices[0];

    if (direction === "next") {
      if (index === centerIndex) return "animate-slide-left";
      if (index === (centerIndex + 1) % testimonials.length) return "animate-slide-to-center";
    } else {
      if (index === centerIndex) return "animate-slide-right";
      if (index === (centerIndex - 1 + testimonials.length) % testimonials.length) return "animate-slide-to-center";
    }
    return "";
  };

  const StarRating = ({ count = 3 }) => (
    <div className="flex mb-1">
      {[...Array(count)].map((_, i) => (
        <img key={i} src={Star} className="w-4 h-4 ml-0.5" />
      ))}
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto py-5 px-3 sm:px-5">
      <div className="bg-[#050A30] rounded-3xl p-4 sm:p-5">
        <div className="text-white text-xl sm:text-4xl font-bold text-center sm:text-left sm:ml-64">
          #1 Go-To Coaching Platform
          <br />
          <span className="text-base sm:text-inherit">for Next Gen Coaches, Startups, and VCs</span>
        </div>
      </div>

      <div className="relative h-[370px] sm:h-64 mt-16 mb-8 overflow-hidden">
        <div className="absolute inset-0 flex justify-center">
          <img src={Shade} className="object-cover h-[900px] -mt-60 opacity-50" />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative w-full h-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`
                  absolute top-1/2 -translate-y-1/2 transition-all duration-75 ease-in-out
                  h-[260px] w-[85vw] sm:w-64 p-4 rounded-xl shadow-xl bg-white
                  ${getPositionClass(index)}
                  ${getAnimationClass(index)}
                `}
              >
                <div className="flex justify-end mr-5">
                  <img
                    src={testimonial.image}
                    alt="Profile"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                </div>
                <StarRating count={typeof testimonial.rating === "number" ? testimonial.rating : 3} />
                <div className="text-left text-sm mt-2">{testimonial.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-36 top-1/2 -translate-y-1/2 z-50 rotate-180 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#050A30]"
          disabled={isAnimating}
        >
          <img src={arrow} className="h-7 w-7 sm:h-10 sm:w-10" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-36 top-1/2 -translate-y-1/2 z-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#050A30]"
          disabled={isAnimating}
        >
          <img src={arrow} className="h-7 w-7 sm:h-10 sm:w-10" />
        </button>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideLeft {
          from {
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          to {
            transform: translate(-100%, -50%);
            opacity: 0;
          }
        }
        @keyframes slideRight {
          from {
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          to {
            transform: translate(0%, -50%);
            opacity: 0;
          }
        }
        @keyframes slideToCenter {
          from {
            transform: translate(${direction === "next" ? "0%" : "-100%"}, -50%);
            opacity: 0.7;
          }
          to {
            transform: translate(-50%, -50%);
            opacity: 1;
          }
        }
        .animate-slide-left {
          animation: slideLeft 280ms ease-in-out forwards;
        }
        .animate-slide-right {
          animation: slideRight 280ms ease-in-out forwards;
        }
        .animate-slide-to-center {
          animation: slideToCenter 220ms ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
