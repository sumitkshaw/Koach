import React, { useState } from 'react';
import { Calendar, Trophy, Users, BookOpen, Target, Award, Star, Clock, ChevronRight, Plus, TrendingUp, Eye, ChevronDown } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';

const Dashmentor = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('Last 30 days');
  const [selectedEarningsPeriod, setSelectedEarningsPeriod] = useState('July');

  const studentProgress = [
    {
      name: "Name of mentee",
      courseName: "Course name",
      assignments: "Assignments",
      tests: "Tests",
      progress: 85,
      meeting: "Meeting",
      status: "Scheduled"
    },
    {
      name: "Name of mentee", 
      courseName: "Course name",
      assignments: "Assignments",
      tests: "Tests",
      progress: 72,
      meeting: "Meeting",
      status: "Completed"
    },
    {
      name: "Name of mentee",
      courseName: "Course name",
      assignments: "Assignments",
      tests: "Tests", 
      progress: 90,
      meeting: "Meeting",
      status: "Scheduled"
    }
  ];

  const upcomingEvents = [
    { time: "09:00", course: "Course event", day: "Today", date: "02 Aug 2023" },
    { time: "10:00", course: "Course event", day: "Today", date: "02 Aug 2023" },
    { time: "13:00", course: "Course event", day: "Today", date: "02 Aug 2023" },
    { time: "14:00", course: "Course event", day: "Today", date: "02 Aug 2023" }
  ];

  const profileVisits = [
    { source: "5 from Design and creatives", count: 5 },
    { source: "Mentor ABC", count: 1 },
    { source: "24 from Startup foundations", count: 24 },
    { source: "3D from ABC circle", count: 3 }
  ];

  const circles = [
    {
      title: "Finance",
      description: "Share knowledge in FinTech, Finance, Banking and associated courses",
      members: 3,
      totalCircles: "80 Circles",
      color: "from-blue-500 via-blue-600 to-indigo-600"
    },
    {
      title: "Design & Creative", 
      description: "Share knowledge in FinTech, Finance, Banking and associated courses",
      members: 3,
      totalCircles: "80 Circles",
      color: "from-orange-500 via-pink-500 to-red-600"
    },
    {
      title: "Data Science",
      description: "Share knowledge in FinTech, Finance, Banking and associated courses", 
      members: 2,
      totalCircles: "80 Circles",
      color: "from-purple-500 via-indigo-500 to-blue-600"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700';
      case 'Completed':
        return 'bg-gradient-to-r from-green-100 to-green-200 text-green-700';
      case 'Pending':
        return 'bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-700';
      default:
        return 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navigation/>
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashmentor" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-20 left-4 z-30 lg:hidden bg-white/80 backdrop-blur-lg p-2 rounded-xl shadow-lg border border-white/20"
      >
      </button>

      {/* Main Content */}
      <div className={`pt-16 transition-all duration-300`}>
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="pt-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Welcome back, Maithili!</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {/* Student Progress Tracker */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Student Progress Tracker</h2>
                  
                  <div className="space-y-3">
                    {studentProgress.map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="flex-1 grid grid-cols-4 gap-4 items-center">
                          <div>
                            <div className="font-semibold text-sm text-gray-800">{student.name}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">{student.courseName}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">{student.assignments}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">{student.tests}</div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6 bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500" style={{width: '65%'}}></div>
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-2">65% Done</div>
                </div>

                {/* Analytics */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">Analytics</h2>
                    <div className="relative">
                      <select 
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                        className="appearance-none bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 pr-8 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 cursor-pointer text-sm"
                      >
                        <option>Last 30 days</option>
                        <option>Last 7 days</option>
                        <option>Last 90 days</option>
                      </select>
                      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Profile Visits */}
                  <div className="mb-6">
                    <h3 className="text-md font-semibold text-gray-700 mb-4">Profile Visits</h3>
                    
                    {/* Chart Area */}
                    <div className="h-32 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mb-4 flex items-end justify-center p-4">
                      <div className="flex items-end space-x-2 h-full">
                        {[20, 40, 60, 45, 70, 35, 80, 55, 65, 50, 75, 60].map((height, index) => (
                          <div 
                            key={index}
                            className="bg-gradient-to-t from-blue-400 to-blue-600 rounded-sm flex-1 max-w-3 transition-all duration-300 hover:from-blue-500 hover:to-blue-700"
                            style={{height: `${height}%`}}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Profile Visit Details */}
                    <div className="space-y-2">
                      {profileVisits.map((visit, index) => (
                        <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-all duration-300">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                            <span className="text-sm text-gray-600">{visit.source}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Upcoming Events */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base sm:text-lg font-bold text-gray-800">Upcoming Events</h2>
                    <ChevronRight className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  </div>
                  
                  <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm"></div>
                          <div>
                            <div className="font-semibold text-sm">{event.time}</div>
                            <div className="text-xs text-gray-500">{event.course}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-semibold text-blue-600">{event.day}</div>
                          <div className="text-xs text-gray-500">{event.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Your Earnings */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base sm:text-lg font-bold text-gray-800">Your earnings</h2>
                    <div className="relative">
                      <select 
                        value={selectedEarningsPeriod}
                        onChange={(e) => setSelectedEarningsPeriod(e.target.value)}
                        className="appearance-none bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 pr-6 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 cursor-pointer text-sm"
                      >
                        <option>July</option>
                        <option>June</option>
                        <option>May</option>
                      </select>
                      <ChevronDown className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">$96,000</div>
                    <div className="flex items-center justify-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-600 font-medium">8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Circles Section */}
            <div className="mt-6 sm:mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Your Circles</h2>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm sm:text-base">See more</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {circles.map((circle, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className={`h-32 bg-gradient-to-r ${circle.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white font-bold text-lg drop-shadow-lg">{circle.title}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{circle.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {Array.from({length: circle.members}).map((_, idx) => (
                            <div key={idx} className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full border-2 border-white flex items-center justify-center text-sm shadow-sm">
                            </div>
                          ))}
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full border-2 border-white flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer">
                            <Plus className="w-4 h-4 text-gray-500" />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-blue-600">{circle.totalCircles}</span>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-800 font-bold py-3 rounded-xl hover:from-yellow-500 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Join Now!
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Dashmentor;