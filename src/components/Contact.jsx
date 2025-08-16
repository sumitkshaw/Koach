import { Phone, Mail, MapPin, Globe, Linkedin, Instagram,MessageSquareText, Twitter, BookOpen, Video   } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import contactImage from '../assets/contact123.svg';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = encodeURIComponent(`Contact Form: ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Create mailto link with multiple recipients
    const recipients = 'raj@koach.live,yukti@koach.live,shawsumit6286@gmail.com';
    const mailtoLink = `mailto:${recipients}?subject=${emailSubject}&body=${emailBody}`;
    
    // Open email client
    window.open(mailtoLink, '_self');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleSupportEmailClick = () => {
    const mailtoLink = 'mailto:support@koach.live';
    window.open(mailtoLink, '_self');
  };

  return (
    <div className="w-full bg-[#ECF0F6]">
      {/* Hero Section */}
      <section className="relative w-full bg-[#efeff3] px-4 md:px-8 lg:px-20 xl:px-40 pt-8 md:pt-16 lg:pt-20 pb-6 md:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto">
          {/* White container box */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-12 md:p-12 lg:p-16">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
              {/* Text content - Always first on mobile */}
              <div className="w-full space-y-3 md:space-y-4 lg:space-y-6 text-center lg:text-left order-1">
                <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D488F] leading-tight">
                  Contact Us
                </h1>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#2D488F]/75 leading-relaxed max-w-md lg:max-w-lg mx-auto lg:mx-0">
                  Want to get in touch? We'd love to hear from you. Here's how you can reach us.
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

      {/* Contact Cards Section */}
      <section className="px-6 md:px-20 lg:px-40 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Virtual meeeting  Card */}
          {/* <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#2D488F]/10 rounded-full flex items-center justify-center mb-6">
              <Video className="w-8 h-8 text-[#2D488F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Schedule a Call</h3>
            <a href='#' className="text-lg text-[#2D488F] font-medium">Book a 30-min consultation</a>
          </div> */}

          {/* Email Us Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#2D488F]/10 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-[#2D488F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Email Us</h3>
            <p 
              className="text-lg text-[#2D488F] font-medium cursor-pointer hover:underline"
              onClick={handleSupportEmailClick}
            >
              support@koach.live
            </p>
          </div>

          {/* Visit Us Card */}
          {/* <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#2D488F]/10 rounded-full flex items-center justify-center mb-6">
              <MessageSquareText className="w-8 h-8 text-[#2D488F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Support Chat</h3>
            <a href='#' className="text-lg text-[#2D488F] font-medium">Chat Now →</a>
          </div> */}

          {/* Help Center Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#2D488F]/10 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-[#2D488F]" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Help Center</h3>
            <a href="/faq" className="text-lg text-[#2D488F] font-medium">FAQ</a>
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
            <form onSubmit={handleSendMessage} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent outline-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about how we can help you..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent outline-none resize-vertical"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#2D488F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e3260] transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media Section
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
              <Twitter className="w-6 h-8" />
            </a>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

export default Contact;