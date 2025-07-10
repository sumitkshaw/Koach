import { Phone, Mail, MapPin, Globe, Linkedin, Instagram, Twitter } from 'lucide-react';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="w-full bg-[#ECF0F6]">
      {/* Hero Section */}
      <section className="relative w-full bg-[#efeff3] px-4 md:px-8 lg:px-20 xl:px-40 pt-8 md:pt-16 lg:pt-20 pb-8 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* White container box */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[400px] md:min-h-[500px]">
              {/* Left side - Text content */}
              <div className="order-2 lg:order-1 space-y-4 md:space-y-6 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2D488F] leading-tight">
                  Contact Us
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-[#2D488F]/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Want to get in touch? We'd love to hear from you. Here's how you can reach us.
                </p>
              </div>
              
              {/* Right side - Illustration */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <img 
                    src="/src/assets/image22.png" 
                    alt="Contact illustration showing people collaborating"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="px-6 md:px-20 lg:px-40 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Call Us Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#2D488F]/10 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-[#2D488F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Call Us</h3>
            <p className="text-lg text-[#2D488F] font-medium">+91 9035415284</p>
          </div>

          {/* Email Us Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#2D488F]/10 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-[#2D488F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Email Us</h3>
            <p className="text-lg text-[#2D488F] font-medium">abc@gmail.com</p>
          </div>

          {/* Visit Us Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#2D488F]/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-[#2D488F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Visit Us</h3>
            <p className="text-lg text-[#2D488F] font-medium">#05, ABC, Def</p>
          </div>

          {/* Website Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#2D488F]/10 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-[#2D488F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Website</h3>
            <p className="text-lg text-[#2D488F] font-medium">koach.live</p>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="px-6 md:px-20 lg:px-40 py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Get In Touch</h2>
          <p className="text-base md:text-xl text-gray-600 text-center mb-12 leading-8">
            Ready to start your coaching journey? We're here to help you every step of the way.
          </p>
          
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">First Name</div>
                  <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500">
                    Enter your first name
                  </div>
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Last Name</div>
                  <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500">
                    Enter your last name
                  </div>
                </div>
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Email</div>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500">
                  Enter your email
                </div>
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Subject</div>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500">
                  What's this about?
                </div>
              </div>
              
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Message</div>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 h-32 flex items-start">
                  Tell us more about how we can help you...
                </div>
              </div>
              
              <div className="text-center">
                <button
                  className="bg-[#2D488F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e3260] transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-6 md:px-20 lg:px-40 py-12 md:py-20">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Follow Us</h2>
          <p className="text-base md:text-xl text-gray-600 mb-8">
            Stay connected with us on social media for updates and insights.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 bg-[#2D488F]/10 rounded-full flex items-center justify-center hover:bg-[#2D488F] hover:text-white transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-[#2D488F]/10 rounded-full flex items-center justify-center hover:bg-[#2D488F] hover:text-white transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="w-12 h-12 bg-[#2D488F]/10 rounded-full flex items-center justify-center hover:bg-[#2D488F] hover:text-white transition-all duration-300">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;