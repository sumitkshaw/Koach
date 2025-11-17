import { Star, Heart, Linkedin, Twitter, ChevronLeft, ChevronRight, Calendar, Briefcase, GraduationCap, MapPin, Mail, Phone, CheckCircle, X, User, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../utils/AuthContext';

function Demo() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [bookingError, setBookingError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showIntroCallPopup, setShowIntroCallPopup] = useState(false);
  const [showSessionDetails, setShowSessionDetails] = useState(false);
  const [showMentorshipPlan, setShowMentorshipPlan] = useState(false);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [callGoal, setCallGoal] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

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
    '8:00 AM',
    '10:00 AM',
    '12:00 PM',
    '2:00 PM',
    '4:00 PM',
    '6:00 PM'
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

  // Get today's date for comparison
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  // Check if a date is available (green) or unavailable (red)
  const isDateAvailable = (day) => {
    if (!day) return false;
    
    // If viewing current month and year
    if (currentMonth === todayMonth && currentYear === todayYear) {
      // Days 1-10 from today are unavailable (red)
      // Days after 10 from today are available (green)
      return day > todayDate + 10;
    }
    
    // If viewing future months, all days are available
    if (currentYear > todayYear || (currentYear === todayYear && currentMonth > todayMonth)) {
      return true;
    }
    
    // Past months are unavailable
    return false;
  };

  // Check if date is in the past or within 10 days
  const isDateUnavailable = (day) => {
    if (!day) return false;
    
    if (currentMonth === todayMonth && currentYear === todayYear) {
      return day <= todayDate + 10;
    }
    
    if (currentYear < todayYear || (currentYear === todayYear && currentMonth < todayMonth)) {
      return true;
    }
    
    return false;
  };

  // Handle date selection
  const handleDateSelect = (day) => {
    if (!day) return;
    
    setSelectedDate(day);
    setSelectedTime(null); // Reset time selection when date changes
    setBookingError('');
  };

  // Handle intro call request
  const handleIntroCallRequest = () => {
    if (!selectedDate) {
      setBookingError('Please select a date from the calendar');
      return;
    }
    
    if (isDateUnavailable(selectedDate)) {
      setBookingError('Selected date is not available. Please choose a green date.');
      return;
    }
    
    if (!selectedTime) {
      setBookingError('Please select a time slot');
      return;
    }
    
    setBookingError('');
    // Show intro call popup
    setShowIntroCallPopup(true);
  };

  // Handle intro call submission
  const handleIntroCallSubmit = () => {
    if (!callGoal.trim()) {
      return; // Don't submit if goal is empty
    }
    
    // Here you would typically send the call goal to your backend
    console.log('Call goal:', callGoal);
    
    // Close the popup and show session details
    setShowIntroCallPopup(false);
    setCallGoal('');
    setShowSessionDetails(true);
  };

  // Handle session confirmation
  const handleConfirmSession = () => {
    setShowSessionDetails(false);
    setShowSuccessModal(true);
  };

  // Handle session edit
  const handleEditSession = () => {
    setShowSessionDetails(false);
    // Reset selected date and time to allow re-selection
    setSelectedDate(null);
    setSelectedTime(null);
  };

  // Handle OPT button click
  const handleOptClick = (plan) => {
    setSelectedPlan(plan);
    setShowMentorshipPlan(true);
  };

  // Handle continue to payment
  const handleContinueToPayment = () => {
    setShowMentorshipPlan(false);
    setShowPaymentPage(true);
  };

  // Handle payment submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment
    console.log('Processing payment with details:', paymentDetails);
    
    // For demo purposes, show success page after a short delay
    setShowPaymentPage(false);
    setShowSuccessPage(true);
  };

  // Handle payment input changes
  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Format card number
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Handle card number input
  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setPaymentDetails(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
  };

  // Format expiry date
  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return v;
  };

  // Handle expiry date input
  const handleExpiryDateChange = (e) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setPaymentDetails(prev => ({
      ...prev,
      expiryDate: formattedValue
    }));
  };

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
                    <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center overflow-hidden">
                      <img 
                        src="/jessica.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
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
                {/* Check Availability Header Style */}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-[#2D488F] mb-2">
                    Check Availability
                  </h3>

                  <p className="text-sm text-gray-700 text-center leading-relaxed">
                    Select a green date box along with a time slot to request an intro call
                  </p>
                </div>


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
                    {generateCalendar().map((day, index) => {
                      const available = isDateAvailable(day);
                      const unavailable = isDateUnavailable(day);
                      
                      return (
                        <button
                          key={index}
                          onClick={() => handleDateSelect(day)}
                          disabled={!day}
                          className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                            !day
                              ? 'invisible'
                              : day === selectedDate
                              ? 'bg-[#2D488F] text-white font-bold ring-2 ring-[#2D488F] ring-offset-2'
                              : unavailable
                              ? 'bg-red-500 text-white font-medium cursor-not-allowed'
                              : available
                              ? 'bg-green-500 text-white font-medium hover:bg-green-600'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
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
                  <button 
                    onClick={handleIntroCallRequest}
                    disabled={!selectedDate || !selectedTime || isDateUnavailable(selectedDate)}
                    className={`w-full py-4 rounded-xl font-semibold transition-colors shadow-lg ${
                      !selectedDate || !selectedTime || isDateUnavailable(selectedDate)
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-[#2D488F] text-white hover:bg-[#1e3260]'
                    }`}
                  >
                    Request Intro Call
                  </button>
                  {bookingError && (
                    <p className="text-red-600 text-sm text-center border-t-2 border-red-600 pt-2">
                      {bookingError}
                    </p>
                  )}
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
                          
                          <button 
                            onClick={() => handleOptClick(plan)}
                            className="w-full py-3 rounded-lg font-bold transition-colors bg-[#2D488F] text-white hover:bg-[#1e3260] shadow-lg"
                          >
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

      {/* Intro Call Popup */}
      {showIntroCallPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowIntroCallPopup(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowIntroCallPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Goal of the Intro Call (15 mins.)
            </h3>
            <textarea
              value={callGoal}
              onChange={(e) => setCallGoal(e.target.value)}
              placeholder="What's your goal during this call?"
              className="w-full h-32 p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#2D488F] focus:border-transparent"
            />
            <button
              onClick={handleIntroCallSubmit}
              disabled={!callGoal.trim()}
              className={`w-full py-3 rounded-lg font-semibold ${
                callGoal.trim()
                  ? 'bg-[#2D488F] text-white hover:bg-[#1e3260]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } transition-colors shadow-lg`}
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Session Details Popup */}
      {showSessionDetails && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowSessionDetails(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 relative transform transition-all duration-300 scale-95 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Session Confirmation</h3>
              <p className="text-gray-500 mt-1">Review your session details</p>
            </div>
            
            {/* Close Button */}
            <button
              onClick={() => setShowSessionDetails(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Content */}
            <div className="space-y-4 mb-8">
              {/* Date & Time Card */}
              <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Calendar className="w-6 h-6 text-[#2D488F]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 mb-1">DATE & TIME</p>
                  <p className="font-semibold text-gray-800">
                    {new Date(currentYear, currentMonth, selectedDate).toLocaleDateString('en-US', { 
                      weekday: 'short',
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                  <p className="text-gray-600">{selectedTime}</p>
                </div>
              </div>
              
              {/* Meeting Link Card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-[#2D488F] p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 mb-1">MEETING LINK</p>
                  <a 
                    href="https://meet.google.com/vxw-ngwo-sww" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#2D488F] hover:text-[#1e3260] font-medium hover:underline break-all"
                  >
                    https://meet.google.com/vxw-ngwo-sww
                  </a>
                </div>
              </div>
            </div>
            
            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleConfirmSession}
                className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-[#2D488F] to-[#1e3260] text-white hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl active:scale-95"
              >
                Confirm Session
              </button>
              <button
                onClick={handleEditSession}
                className="w-full py-3.5 rounded-xl font-medium text-[#2D488F] hover:bg-gray-50 transition-colors border-2 border-[#2D488F] hover:border-[#1e3260]"
              >
                Edit Details
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Add to global styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>

      {/* Mentorship Plan Popup */}
      {showMentorshipPlan && selectedPlan && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowMentorshipPlan(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative transform transition-all duration-300 scale-95 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowMentorshipPlan(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Mentor Photo */}
              <div className="w-full md:w-1/3 bg-gray-50 p-6 flex flex-col items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="/jessica.png" 
                    alt="Jessica Barney" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Jessica Barney</h3>
                <p className="text-gray-600">Marketing Head at PWC</p>
                
                <div className="mt-6 w-full">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium">10+ years</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="text-gray-600">Sessions</span>
                    <span className="font-medium">200+</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 font-medium">4.9</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setShowProfile(true)}
                  className="mt-6 w-full py-3 rounded-lg font-semibold bg-white text-[#2D488F] border-2 border-[#2D488F] hover:bg-gray-50 hover:shadow-md transition-all"
                >
                  View Full Profile
                </button>
              </div>
              
              {/* Right Side - Plan Details */}
              <div className="w-full md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mentorship Plan - {selectedPlan.name}</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">What's included:</h3>
                    <ul className="space-y-2">
                      {selectedPlan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Total</span>
                      <span className="text-lg font-bold">${selectedPlan.price}.00</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">Billed monthly. Cancel anytime.</p>
                    
                    <button 
                      onClick={handleContinueToPayment}
                      className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-[#2D488F] to-[#1e3260] text-white hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl active:scale-95"
                    >
                      Continue with {selectedPlan.name}
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center mt-3">
                      By continuing, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="ml-2 text-sm text-gray-600">
                      Secure payment. All transactions are encrypted and secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mentor Profile Modal */}
      {showProfile && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowProfile(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden relative transform transition-all duration-300 scale-95 animate-fadeIn max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowProfile(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Profile Header */}
            <div className="bg-gradient-to-r from-[#2D488F] to-[#1e3260] p-8 text-white">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-white p-1 mb-4 shadow-xl">
                  <img 
                    src="/jessica.png" 
                    alt="Jessica Barney" 
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+';
                    }}
                  />
                </div>
                <h2 className="text-2xl font-bold">Jessica Barney</h2>
                <p className="text-blue-100">Marketing Head @ PWC</p>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`w-5 h-5 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-blue-100'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-blue-100">4.9 (128 reviews)</span>
                </div>
              </div>
            </div>
            
            {/* Profile Details */}
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About Me</h3>
                <p className="text-gray-700 leading-relaxed">
                  MSc Engineer by training. Marketeer by passion. I hold an MBA degree and have led Sales and Marketing both in SMBs and Multinational Corporations. My approach is data driven and customer centric, I'm fascinated by human behaviour and that informs my approach on every project.
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900">Marketing Head</h4>
                    <p className="text-gray-600 text-sm">PWC, USA • June 2023 - Current</p>
                    <p className="text-gray-700 mt-1">Assisted in developing marketing strategies for social media campaigns. Analyzed consumer data to support targeted advertising efforts.</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900">Customer Service Representative</h4>
                    <p className="text-gray-600 text-sm">DHL, Germany • January 2022 - May 2023</p>
                    <p className="text-gray-700 mt-1">Responded to customer inquiries and resolved issues effectively. Trained new staff on company protocols and customer service excellence.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowProfile(false)}
                  className="px-6 py-2.5 bg-[#2D488F] text-white font-medium rounded-lg hover:bg-[#1e3260] transition-colors"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Page */}
      {showPaymentPage && selectedPlan && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-4 sm:p-6 relative">
            <button
              onClick={() => setShowPaymentPage(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
              <p className="text-gray-600 mt-2">Complete your purchase of {selectedPlan.name}</p>
              <div className="mt-4">
                <span className="text-lg font-bold text-gray-900">Total: ${selectedPlan.price}.00</span>
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Details</h2>
              
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <h3 className="font-medium text-gray-900 mb-2">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${selectedPlan.price}.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sales Tax (2%)</span>
                    <span className="font-medium">${(selectedPlan.price * 0.02).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>${(selectedPlan.price * 1.02).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handlePaymentSubmit}>
              <div className="space-y-3 mb-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={paymentDetails.expiryDate}
                      onChange={handleExpiryDateChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={paymentDetails.cvv}
                      onChange={handlePaymentInputChange}
                      placeholder="123"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="nameOnCard"
                    name="nameOnCard"
                    value={paymentDetails.nameOnCard}
                    onChange={handlePaymentInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D488F] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-[#2D488F] to-[#1e3260] text-white hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl active:scale-95"
              >
                Pay $${(selectedPlan.price * 1.02).toFixed(2)}
              </button>

              <div className="mt-3 flex items-center justify-center">
                <Lock className="w-4 h-4 text-gray-500 mr-2" />
                <span className="text-xs text-gray-500">Your payment is secured with SSL encryption</span>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Page */}
      {showSuccessPage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-6">Your {selectedPlan?.name} has been activated successfully.</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600 mb-1">Order Number</p>
              <p className="font-medium">#KOACH-{Math.floor(100000 + Math.random() * 900000)}</p>
            </div>
            
            <button
              onClick={() => {
                setShowSuccessPage(false);
                setShowMentorshipPlan(false);
                setShowPaymentPage(false);
              }}
              className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-[#2D488F] to-[#1e3260] text-white hover:opacity-90 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl active:scale-95"
            >
              Back to Profile
            </button>
            
            <p className="text-sm text-gray-500 mt-4">
              A confirmation has been sent to your email
            </p>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Success Content */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#2D488F] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Intro Call Requested Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Your intro call request has been submitted. The mentor will review your request and get back to you soon.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 rounded-lg font-semibold bg-[#2D488F] text-white hover:bg-[#1e3260] transition-colors shadow-lg"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Demo;