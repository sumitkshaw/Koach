import React, { useEffect, useRef } from "react";
import Mentee from "../assets/Mentee 7.png";
import Shade from "../assets/Shade.png";
import AS1 from "../assets/AS1.png";
import AS2 from "../assets/AS2.png";
import AS3 from "../assets/AS3.png";
import AS4 from "../assets/AS4.png";
import Calender from "../assets/Calender.png";
import Message from "../assets/Message.png";

const AnimatedImage = ({ src, className, delay = 0 }) => {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "opacity-100",
            "translate-x-0",
            "blur-none"
          );
          entry.target.classList.remove(
            "opacity-0",
            "-translate-x-8",
            "blur-sm"
          );
        }
      });
    });

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <img
      ref={domRef}
      src={src}
      className={`${className} transition-all duration-1000 ease-in-out opacity-0 -translate-x-8 blur-sm transform`}
      style={{ transitionDelay: `${delay}ms` }}
    />
  );
};

export default function AboutSection() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Global Reach with Multilingual Support
          </h2>
          <p className="text-base sm:text-lg">
            Koach is a global platform that supports cross-border growth. We
            offer a wide range of linguistic options to ensure that language
            does not stand in the way of your success.
          </p>
        </div>
        <div className="relative lg:w-1/2 w-full mt-6 lg:mt-0">
          <img
            src={Shade}
            className="object-cover w-full max-h-[400px] rounded-xl"
          />
          <img
            src={Mentee}
            alt="dashboard"
            className="absolute inset-0 w-4/5 h-auto mx-auto mt-10"
          />
          <AnimatedImage
            src={AS1}
            className="absolute w-40 sm:w-60 top-28 left-1/2 -translate-x-1/2"
            delay={300}
          />
          <AnimatedImage
            src={AS2}
            className="absolute w-52 -top-10 left-12"
            delay={600}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse lg:flex-row items-start gap-10">
        <div className="relative lg:w-1/2 w-full mt-6 lg:mt-0">
          <img
            src={Shade}
            className="object-cover w-full max-h-[400px] rounded-xl"
          />
          <img
            src={Mentee}
            alt="dashboard"
            className="absolute inset-0 w-4/5 h-auto mx-auto mt-10"
          />
          <AnimatedImage
            src={Calender}
            className="absolute w-40 top-2 -left-10"
            delay={300}
          />
          <AnimatedImage
            src={Message}
            className="absolute w-60 top-20 right-0"
            delay={600}
          />
          <AnimatedImage
            src={AS3}
            className="absolute w-full max-w-[500px] top-72 left-0"
            delay={900}
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Expert Coaches & Mentors
          </h2>
          <p className="text-base sm:text-lg">
            Koach has a unique principle that all the professionals working on
            its site are highly qualified professionals. Each of our coaches and
            mentors is a practicing coach with many years of experience in this
            particular industry.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Rigorous Selection Process
          </h2>
          <p className="text-base sm:text-lg">
            If you think being a mentor or a coach at Koach is for anyone, you
            are completely wrong. Those who are part of the Koach platform
            should be trusted and such a particular area requires precision.
          </p>
        </div>
        <div className="relative lg:w-1/2 w-full mt-6 lg:mt-0 flex justify-center">
          <img
            src={Shade}
            className="object-cover w-full max-h-[400px] rounded-xl"
          />
          <img
            src={Mentee}
            alt="dashboard"
            className="absolute inset-0 w-4/5 h-auto mx-auto mt-10"
          />
          <AnimatedImage
            src={AS4}
            className="absolute w-[300px] sm:w-[420px] top-40"
            delay={300}
          />
        </div>
      </div>
    </div>
  );
}
