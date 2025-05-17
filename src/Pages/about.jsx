import { Linkedin } from 'lucide-react';
import raj from '../assets/raj.png';
import yukti from '../assets/yukti.jpg';
import teamcollage from '../assets/teamcollage.jpg';
import Footer from './Footer';

function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-[#050A30] px-6 md:px-20 lg:px-40 pt-3 pb-12 md:pb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 pt-16 md:pt-24">About Us</h1>
        <p className="text-base md:text-xl text-white leading-8 md:leading-10 max-w-4xl">
          Koach connects you with expert coaches to help you grow, achieve your goals, and overcome challenges. Whether its career advice, leadership skills, or personal development, we offer personalized guidance to unlock your full potential.
        </p>
        <div className="mt-8 w-full rounded-[30px] overflow-hidden max-h-[400px]">
          <img 
            src={teamcollage}
            alt="Team Collage" 
            className="w-full h-full object-contain filter grayscale rounded-[30px]"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 md:px-20 lg:px-40 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">Our Mission</h2>
          <p className="text-base md:text-xl leading-8 md:leading-10">
            We are dedicated to creating personalized learning experiences that empower individuals to unlock their potential, achieve their goals, and drive continuous personal and professional growth.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">Our Vision</h2>
          <p className="text-base md:text-xl leading-8 md:leading-10">
            Our vision is to make expert knowledge accessible to everyone, ensuring that anyone, anywhere, can connect with the right expertise to accelerate their growth and overcome challenges with ease.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <div className="w-full bg-white flex flex-col items-center px-6 md:px-20 lg:px-40 py-16 md:py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="relative w-full flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2D488F]/30 via-[#F5E649]/30 to-transparent rounded-3xl blur-[80px]"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 w-full max-w-2xl">
            {[
              { name: 'Raj', role: 'Founder & CEO', image: raj },
              { name: 'Yukti', role: 'Chief Product Officer', image: yukti },
              
            ].map((member) => (
              <div 
                key={member.name} 
                className="bg-white rounded-3xl shadow-lg p-4 flex flex-col items-start"
                style={{ boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)' }}
              >
                <div className="w-full h-[230px] overflow-hidden rounded-2xl mb-3">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center filter grayscale"
                  />
                </div>
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                <button className="hover:bg-gray-100 p-1 rounded-md transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
