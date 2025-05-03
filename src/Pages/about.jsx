import React from 'react';
import { Linkedin } from 'lucide-react';
import raj from '../assets/raj.png';
import riddhi from '../assets/riddhi.png';
import cara from '../assets/cara.jpg';
import yukti from '../assets/yukti.jpg';
import teamcollage from '../assets/teamcollage.jpg';
import Footer from './Footer';

function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[857px] bg-[#050A30] px-40 pt-3">
        <h1 className="text-4xl font-bold text-white mb-2 pt-20">About Us</h1>
        <p className="text-xl text-white max-w-5xl leading-10">
          Koach connects you with expert coaches to help you grow, achieve your goals, and overcome challenges. Whether it's career advice, leadership skills, or personal development, we offer personalized guidance to unlock your full potential.
        </p>
        <div className="mt-8 w-full h-[527px] rounded-[30px] overflow-hidden">
          <img 
            src={teamcollage}
            alt="Team Collage" 
            className="max-w-full max-h-full object-contain filter grayscale rounded-[30px]"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-40 py-20 grid grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-extrabold mb-8">Our Mission</h2>
          <p className="text-xl leading-10">
            We are dedicated to creating personalized learning experiences that empower individuals to unlock their potential, achieve their goals, and drive continuous personal and professional growth.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold mb-8">Our Vision</h2>
          <p className="text-xl leading-10">
            Our vision is to make expert knowledge accessible to everyone, ensuring that anyone, anywhere, can connect with the right expertise to accelerate their growth and overcome challenges with ease.
          </p>
        </div>
      </section>

      <div className="w-full bg-white flex flex-col items-center py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Our Team</h2>
        <div className="relative w-full max-w-3xl flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2D488F]/30 via-[#F5E649]/30 to-transparent rounded-3xl blur-[80px]"></div>
          <div className="grid grid-cols-2 gap-6 relative z-10 max-w-2xl w-full">
            {[
              { name: 'Raj', role: 'Founder & CEO', image: raj },
              { name: 'Yukti', role: 'Chief Product Officer', image: yukti },
              { name: 'Cara', role: 'Marketing Lead', image: cara },
              { name: 'Riddhi', role: 'UX/UI Designer', image: riddhi },
            ].map((member) => (
              <div 
                key={member.name} 
                className="bg-white rounded-3xl shadow-lg p-3 flex flex-col items-start relative"
                style={{
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className="w-full aspect-square overflow-hidden rounded-2xl mb-2 h-[230px] object-cover ">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center filter grayscale"
                  />
                </div>
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-xs text-gray-600 mb-1">{member.role}</p>
                <button className="hover:bg-gray-100 p-1 rounded-md transition-colors">
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;