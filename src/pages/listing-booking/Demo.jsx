import { Star, Heart, Linkedin, Twitter, ChevronLeft, ChevronRight, Calendar, Briefcase, GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import Footer from '../../components/Footer';

function Demo() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(4); // May 2025 (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);

  const mentor = {
    name: 'Jessica Barney',
    role: 'Marketing Head',
    company: 'PWC',
    location: 'Paris, France',
    experienceSummary: '6+ years building, growing & scaling high-performing B2B Marketing teams',
    rating: 4,
    isNewMentor: true,
    skills: [
      'Digital Marketing',
      'Go To Market',
      'Design',
      'Growth Marketing',
      'Strategy',
      'Sales',
      'Scaling Teams'
    ],
    about: "MSc Engineer by training. Marketeer by passion. I hold an MBA degree and have led Sales and Marketing both in SMBs and Multinational Corporations. My approach is data driven and customer centric, I'm fascinated by human behaviour and that informs my approach on every project.",
    experience: [
      {
        title: 'Marketing Head',
        company: 'PWC, USA',
        period: 'June 2023 - Current',
        description: 'Assisted in developing marketing strategies for social media campaigns. Analyzed consumer data to support targeted advertising efforts.'
      },
      {
        title: 'Customer Service Representative',
        company: 'DHL, Germany',
        period: 'January 2022 - May 2023',
        description: 'Responded to customer inquiries and resolved issues effectively. Trained new staff on company protocols and customer service excellence.'
      }
    ],
    education: {
      degree: 'Master of Arts in Marketing',
      institution: 'Northeastern University'
    },
    reviews: [
      {
        name: 'Jane Doe',
        rating: 3,
        title: 'Supervisor at Company Name',
        comment: 'A dedicated team player with excellent problem-solving skills. Highly recommended.'
      },
      {
        name: 'John Smith',
        rating: 4,
        title: 'Professor at University Name',
        comment: 'An outstanding student with a strong work ethic and leadership qualities.'
      }
    ]
  };

  const timeSlots = [
    '1:00 AM',
    '1:00 AM',
    '1:00 AM',
    '1:00 AM',
    '1:00 AM',
    '1:00 AM'
  ];

  const plans = [
    {
      name: 'Basic Plan',
      price: 330,
      features: [
        '2 Calls a month',
        'Resume Feedback',
        'Unlimited Q&A via chat',
        'Career guidance'
      ],
      recommended: true
    }
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="w-full bg-[#ECF0F6] min-h-screen">
      {/* Main Content */}
      <section className="px-6 md:px-20 lg:px-40 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                      <span className="text-5xl font-bold text-gray-400">JB</span>
                    </div>
                    {mentor.isNewMentor && (
                      <div className="absolute top-2 right-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                        New mentor
                      </div>
                    )}
                  </div>

                  {/* Profile Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{mentor.name}</h1>
                        <p className="text-lg font-semibold text-gray-700 mb-1">
                          {mentor.role} @ {mentor.company}
                        </p>
                        <p className="text-sm text-gray-600 mb-3">{mentor.experienceSummary}</p>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{mentor.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < mentor.rating
                                  ? 'fill-[#2D488F] text-[#2D488F]'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <button
                          onClick={() => setIsFavorite(!isFavorite)}
                          className="transition-colors"
                        >
                          <Heart
                            className={`w-6 h-6 ${
                              isFavorite
                                ? 'fill-red-500 text-red-500'
                                : 'text-gray-400'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {mentor.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a href="#" className="text-[#2D488F] hover:text-[#1e3260] transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-[#2D488F] hover:text-[#1e3260] transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">{mentor.about}</p>
              </div>

              {/* Professional Experience */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
                <div className="space-y-6">
                  {mentor.experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-[#2D488F] pl-6">
                      <h3 className="text-lg font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-gray-600 mb-2">{exp.company} ({exp.period})</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-[#2D488F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{mentor.education.degree}</h3>
                    <p className="text-gray-600">{mentor.education.institution}</p>
                  </div>
                </div>
              </div>

              {/* References/Reviews */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">References/Reviews</h2>
                <div className="space-y-6">
                  {mentor.reviews.map((review, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-lg font-bold text-gray-400">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900">{review.name}</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'fill-[#2D488F] text-[#2D488F]'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{review.title}</p>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Calendar Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      {monthNames[currentMonth]} {currentYear}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          if (currentMonth === 0) {
                            setCurrentMonth(11);
                            setCurrentYear(currentYear - 1);
                          } else {
                            setCurrentMonth(currentMonth - 1);
                          }
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => {
                          if (currentMonth === 11) {
                            setCurrentMonth(0);
                            setCurrentYear(currentYear + 1);
                          } else {
                            setCurrentMonth(currentMonth + 1);
                          }
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                      <div key={day} className="text-center text-xs font-semibold text-gray-500 py-2">
                        {day}
                      </div>
                    ))}
                    {generateCalendar().map((day, index) => (
                      <button
                        key={index}
                        onClick={() => day && setSelectedDate(day)}
                        disabled={!day}
                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                          !day
                            ? 'invisible'
                            : day === selectedDate
                            ? 'bg-[#2D488F] text-white font-bold'
                            : day === 1
                            ? 'bg-gray-900 text-white font-bold'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Availability */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Time Availability</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border-2 ${
                          selectedTime === time
                            ? 'bg-[#2D488F] text-white border-[#2D488F]'
                            : 'bg-white text-[#2D488F] border-[#2D488F] hover:bg-[#2D488F]/10'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-[#2D488F] text-white py-4 rounded-xl font-semibold hover:bg-[#1e3260] transition-colors shadow-lg">
                    Check Availability
                  </button>
                  <button className="w-full bg-[#2D488F] text-white py-4 rounded-xl font-semibold hover:bg-[#1e3260] transition-colors shadow-lg">
                    Request Intro Call
                  </button>
                </div>

                {/* Mentorship Plans */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-[#2D488F] text-white text-center py-4">
                    <h3 className="text-xl font-bold">Mentorship Plans</h3>
                  </div>
                  
                  {plans.map((plan, index) => (
                    <div key={index} className="relative">
                      <div className="bg-yellow-400 py-3 px-6 flex items-center justify-between">
                        <button className="text-gray-700">
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>
                        <button className="text-gray-700">
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="text-gray-900 mt-1">•</span>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                        
                        <div className="pt-4 border-t border-gray-200">
                          <div className="text-center mb-4">
                            <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                            <span className="text-gray-600">/ month</span>
                          </div>
                          
                          <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
                            OPT
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Demo;