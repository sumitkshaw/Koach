import { Linkedin, Target, Users, TrendingUp, CheckCircle, Heart } from 'lucide-react';
import raj from '../assets/dashhboard.png';
import yukti from '../assets/compp.png';
import Footer from '../components/Footer';



function About() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section - About Us */}
      <section className="relative w-full bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] px-6 md:px-20 lg:px-40 pt-20 pb-16">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4">
              Empowering bold, informed decisions—
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              because your future deserves clarity, not guesswork
            </p>
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg inline-block font-semibold">
              Clarity. Confidence. Career guidance that gets Gen Z.
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
              <div className="text-white text-6xl">🤝</div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-white font-semibold text-lg">
            No fluff. No gatekeeping. Just better decisions, backed by better guidance.
          </p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Rajneesh Sharma */}
          <div className="bg-blue-600 rounded-2xl p-6 text-center text-white">
            <div className="w-32 h-32 bg-gray-400 rounded-lg mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Rajneesh Sharma</h3>
            <p className="text-blue-100 mb-4">Executive Firefighter</p>
            <Linkedin className="w-6 h-6 mx-auto text-white" />
          </div>
          
          {/* Jim Alessandro */}
          <div className="bg-blue-600 rounded-2xl p-6 text-center text-white">
            <div className="w-32 h-32 bg-gray-400 rounded-lg mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Jim Alessandro</h3>
            <p className="text-blue-100 mb-4">Hype Generator</p>
            <Linkedin className="w-6 h-6 mx-auto text-white" />
          </div>
          
          {/* Yukti Mannikeri */}
          <div className="bg-blue-600 rounded-2xl p-6 text-center text-white">
            <div className="w-32 h-32 bg-gray-400 rounded-lg mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Yukti Mannikeri</h3>
            <p className="text-blue-100 mb-4">Roadmap Ruler</p>
            <Linkedin className="w-6 h-6 mx-auto text-white" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;