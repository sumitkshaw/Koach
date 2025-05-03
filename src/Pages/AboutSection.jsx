import React, { useEffect, useRef } from 'react';
import Mentee from '../assets/Mentee 7.png';
import Shade from '../assets/Shade.png';
import AS1 from '../assets/AS1.png';
import AS2 from '../assets/AS2.png';
import AS3 from '../assets/AS3.png';
import AS4 from '../assets/AS4.png';
import Calender from '../assets/Calender.png';
import Message from '../assets/Message.png';

const AnimatedImage = ({ src, className, delay = 0 }) => {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-x-0', 'blur-none');
          entry.target.classList.remove('opacity-0', '-translate-x-8', 'blur-sm');
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
    <div className="max-w-[1200px] mx-auto  py-12">
      <div className='flex justify-start gap-2 items-start'>
        <div className='text-[30px] font-bold text-left'>Global Reach with Multilingual Support
            <p className='text-[20px] font-normal'>Koach is a global platform that supports cross-border growth. We offer a wide range of linguistic options to ensure 
                that language does not stand in the way of your success.</p>
        </div>
        
        <div className='relative'>
            <img src={Shade} className='object-cover w-[1700px] h-[600px] object-[30%_40%] -ml-56 -mt-28' />
            <img src={Mentee} alt='dashboard' className='absolute object-cover inset-0 h-[350px] w-[560px]'/>
            <AnimatedImage src={AS1} className='absolute inset-0 w-[310px] h-[310px] left-64 ml-3 top-28' delay={300} />
            <AnimatedImage src={AS2} className='absolute inset-0 -top-14 left-20 w-[300px] h-[150px]' delay={600} />
        </div>
      </div>
      <div className='flex justify-start gap-20 items-start '>
        <div className='text-[30px] font-bold text-left w-1/2'>Expert Coaches & Mentors
            <p className='text-[20px] font-normal'>Koach has a unique principle that all the professionals working on its site are
                 highly qualified professionals. Each of our coaches and mentors is a practicing coach with many years of experience 
                 in this particular industry.</p>
        </div>
        
        <div className='relative w-1/2 '>
            <img src={Shade} className='object-cover w-[1700px] h-[600px] object-[30%_40%] ml-36 -mt-28' />
            <img src={Mentee} alt='dashboard' className='absolute object-cover inset-0 h-[350px] w-[560px]'/>
            <AnimatedImage src={Calender} className='absolute inset-0 w-[260px] top-2 -left-16' delay={300} />
            <AnimatedImage src={Message} className='absolute inset-0 top-20 left-72 ml-10 w-[300px]' delay={600} />
            <AnimatedImage src={AS3} className='absolute inset-0 top-72 left-2 w-[545px]' delay={900} />
        </div>
      </div>
      
      <div className='flex justify-start gap-20 items-start'>
        <div className='text-[30px] font-bold text-left w-1/2'>Rigorous Selection Process
            <p className='text-[20px] font-normal'>If you think being a mentor or a coach at Koach is for anyone, you are 
                completely wrong. That who is a part of the Koach platform should be trusted and such particular area requires 
                some precision.</p>
        </div>
        
        <div className='relative w-1/2'>
            <img src={Shade} className='object-cover w-[1700px] h-[600px] object-[30%_40%] -ml-56 -mt-28' />
            <img src={Mentee} alt='dashboard' className='absolute object-cover inset-0 h-[350px] w-[560px]'/>
            <AnimatedImage src={AS4} className='absolute inset-0 w-[420px] left-44 top-44' delay={300} />
        </div>
      </div>
    </div>
  );
}