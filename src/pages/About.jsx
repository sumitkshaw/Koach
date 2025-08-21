import { Linkedin, Target, Users, TrendingUp, CheckCircle, Heart } from 'lucide-react';
import raj from '../assets/dashhboard.png';
import yukti from '../assets/compp.png';
import Footer from '../components/Footer';
import contactImage from '../assets/image-332.avif';
import image1 from '../assets/image01.jpg';
import image2 from '../assets/image02.jpg';
import image3 from '../assets/image03.jpg';

function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section - About Us */}
      <section className="relative w-full bg-[#efeff3] px-4 md:px-8 lg:px-20 xl:px-40 pt-8 md:pt-16 lg:pt-20 pb-8 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* White container box */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-12 md:p-12 lg:p-16">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
              {/* Text content - Always first on mobile */}
              <div className="w-full space-y-3 md:space-y-4 lg:space-y-6 text-center lg:text-left order-1">
                <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D488F] leading-tight">
                  About Us
                </h1>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#2D488F]/75 leading-relaxed max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  Empowering bold, informed decisions—
                </p>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#2D488F]/75 leading-relaxed max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  because your future deserves clarity, not guesswork
                </p>
              </div>
              
              {/* Illustration - Always second on mobile */}
              <div className="w-full flex justify-center lg:justify-end order-2">
                <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <img 
                    src={contactImage} 
                    alt="Contact illustration showing people collaborating"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner section */}
      <section className="bg-[#001F54] py-4">
        <div className="text-center text-yellow-400 font-semibold text-lg">
          <p>Clarity. Confidence. Career guidance that gets Gen Z.</p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="px-6 md:px-20 lg:px-40 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-3xl border-4 border-blue-600 p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">Our Vision</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  Koach is a career mentorship platform built for students and early professionals who are figuring it out and for mentors who remember what that felt like.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  We believe that one great conversation can change everything. But too often, career advice is generic, outdated, or buried under YouTube clutter and LinkedIn noise.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  So we created Koach, a space where young people can connect with real mentors who listen, guide, and help them move forward with clarity and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[#001F54] py-4">
        <div className="text-center text-yellow-400 font-semibold text-lg">
          <p>No fluff. No gatekeeping. Just better decisions, backed by better guidance.</p>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="px-6 md:px-20 lg:px-40 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Why We Exist?</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">• Because talent is everywhere</h3>
                <p className="text-gray-700">— but support isn't.</p>
              </div>
              <div>
                <p className="text-gray-700">
                  Whether it's choosing a major, landing that first job, or navigating self-doubt, Gen Z faces big decisions in a noisy, uncertain world. Most platforms offer content. We offer people.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">
                Koach pairs human mentorship with smart structure — so mentees get guidance they can actually act on, and mentors get a meaningful way to give back without burning out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="px-6 md:px-20 lg:px-40 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Who We Are (and Who We're For)</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">
          We're a team of corporate professionals, product builders, and inclusion advocates. Many of us are first gen grads, career changers, or ex-corporate wanderers. We've been helped, and we've helped others — and we built Koach so you can do both.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-4 border-blue-600 rounded-2xl p-6 text-center bg-white">
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">For students stuck in "what now"</h3>
          </div>
          
          <div className="border-4 border-blue-600 rounded-2xl p-6 text-center bg-white">
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">For young professionals in pivot mode</h3>
          </div>
          
          <div className="border-4 border-blue-600 rounded-2xl p-6 text-center bg-white">
            <div className="mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">For mentors who want to empower, not preach</h3>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="px-6 md:px-20 lg:px-40 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">What Makes Us Different?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <Target className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Structured, not stressful</h3>
                <p className="text-gray-600">Every session is goal-based and guided</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Curated mentors, not a free-for-all</h3>
                <p className="text-gray-600">Quality over quantity</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Progress tracking, not just talk</h3>
                <p className="text-gray-600">Mentors set and see growth</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Mentor first design</h3>
                <p className="text-gray-600">You choose when, how, and who you coach</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl border-2 border-pink-200">
              <Heart className="w-8 h-8 text-pink-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg">Built for Inclusion</h3>
                <p className="text-gray-600">We center first-gen, LGBTQ+, and underrepresented voices</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <img src={raj} alt="Dashboard" className="w-full rounded" />
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <img src={yukti} alt="Mobile view" className="w-full rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="px-6 md:px-20 lg:px-40 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">Meet the Team</h2>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-2xl mx-auto justify-center">
          {/* Rajneesh Sharma */}
          <div className="bg-blue-600 rounded-2xl p-6 text-center text-white flex-1 max-w-sm">
            <img src={image1} alt="Rajneesh Sharma" className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Rajneesh Sharma</h3>
            <p className="text-blue-100 mb-4">Executive Firefighter</p>
            <a href="https://www.linkedin.com/in/therajneeshsharma/" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 mx-auto text-white" />
            </a>
          </div>
          
          {/* Yukti Mannikeri */}
          <div className="bg-blue-600 rounded-2xl p-6 text-center text-white flex-1 max-w-sm">
            <img src={image3} alt="Yukti Mannikeri" className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Yukti Mannikeri</h3>
            <p className="text-blue-100 mb-4">Roadmap Ruler</p>
            <a href="https://www.linkedin.com/in/yuktibm/" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 mx-auto text-white" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;

 {/* Jim Alessandro */}
          {/* <div className="bg-blue-600 rounded-2xl p-6 text-center text-white">
            <img src={image2} alt="Jim Alessandro" className="w-32 h-32 rounded-lg mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Jim Alessandro</h3>
            <p className="text-blue-100 mb-4">Hype Generator</p>
            <Linkedin className="w-6 h-6 mx-auto text-white" />
          </div> */}