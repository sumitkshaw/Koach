import { useEffect, useRef } from "react";
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
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16 lg:space-y-20">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10">
        <div className="lg:w-1/2 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
            Global Reach with Multilingual Support
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Koach is a global platform that supports cross-border growth. We
            offer a wide range of linguistic options to ensure that language
            does not stand in the way of your success.
          </p>
        </div>
        <div className="relative lg:w-1/2 w-full mt-4 lg:mt-0 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          <img
            src={Shade}
            className="object-cover w-full h-[250px] sm:h-[300px] lg:max-h-[400px] rounded-xl"
            alt="Background shade"
          />
          <img
            src={Mentee}
            alt="dashboard"
            className="absolute inset-0 w-3/4 sm:w-4/5 h-auto mx-auto mt-6 sm:mt-8 lg:mt-10"
          />
          <AnimatedImage
            src={AS1}
            className="absolute w-24 sm:w-32 md:w-40 lg:w-60 top-16 sm:top-20 lg:top-28 left-1/2 -translate-x-1/2"
            delay={300}
          />
          <AnimatedImage
            src={AS2}
            className="absolute w-32 sm:w-40 md:w-48 lg:w-52 -top-6 sm:-top-8 lg:-top-10 left-6 sm:left-8 lg:left-12"
            delay={600}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10">
        <div className="relative lg:w-1/2 w-full mt-4 lg:mt-0 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          <img
            src={Shade}
            className="object-cover w-full h-[250px] sm:h-[300px] lg:max-h-[400px] rounded-xl"
            alt="Background shade"
          />
          <img
            src={Mentee}
            alt="dashboard"
            className="absolute inset-0 w-3/4 sm:w-4/5 h-auto mx-auto mt-6 sm:mt-8 lg:mt-10"
          />
          <AnimatedImage
            src={Calender}
            className="absolute w-24 sm:w-32 lg:w-40 top-1 sm:top-2 -left-6 sm:-left-8 lg:-left-10"
            delay={300}
          />
          <AnimatedImage
            src={Message}
            className="absolute w-36 sm:w-48 lg:w-60 top-12 sm:top-16 lg:top-20 -right-2 sm:right-0"
            delay={600}
          />
          <AnimatedImage
            src={AS3}
            className="absolute w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] top-48 sm:top-56 lg:top-72 left-0"
            delay={900}
          />
        </div>
        <div className="lg:w-1/2 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
            Expert Coaches & Mentors
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Koach has a unique principle that all the professionals working on
            its site are highly qualified professionals. Each of our coaches and
            mentors is a practicing coach with many years of experience in this
            particular industry.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10">
        <div className="lg:w-1/2 space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">
            Rigorous Selection Process
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            If you think being a mentor or a coach at Koach is for anyone, you
            are completely wrong. Those who are part of the Koach platform
            should be trusted and such a particular area requires precision.
          </p>
        </div>
        <div className="relative lg:w-1/2 w-full mt-4 lg:mt-0 flex justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
          <img
            src={Shade}
            className="object-cover w-full h-[250px] sm:h-[300px] lg:max-h-[400px] rounded-xl"
            alt="Background shade"
          />
          <img
            src={Mentee}
            alt="dashboard"
            className="absolute inset-0 w-3/4 sm:w-4/5 h-auto mx-auto mt-6 sm:mt-8 lg:mt-10"
          />
          <AnimatedImage
            src={AS4}
            className="absolute w-[200px] sm:w-[250px] md:w-[300px] lg:w-[420px] top-24 sm:top-32 lg:top-40"
            delay={300}
          />
        </div>
      </div>
    </div>
  );
}