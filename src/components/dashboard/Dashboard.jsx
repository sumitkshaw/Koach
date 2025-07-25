import React, { useState } from 'react';
import { Calendar, Trophy, Users, BookOpen, Target, Award, Star, Clock, ChevronRight, Plus } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navigation/>
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-20 left-4 z-30 lg:hidden bg-white/80 backdrop-blur-lg p-2 rounded-xl shadow-lg border border-white/20"
      >
      </button>

      {/* Main Content - Removed lg:ml-64 */}
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
                {/* Streak Maintenance Card */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">Streak Maintenance</h2>
                    <Trophy className="w-6 h-6 text-yellow-500 animate-bounce" />
                  </div>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <div className="w-28 h-28 sm:w-36 sm:h-36 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                        <div className="text-center">
                          <div className="text-2xl sm:text-4xl font-bold text-white mb-1">500</div>
                          <div className="text-xs sm:text-sm text-yellow-100 px-2">Days of continuous learning</div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-700" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    60% of 1st milestones completed
                  </div>
                </div>

                {/* Progress Tracker */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">Progress Tracker</h2>
                  
                  {/* Status Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs sm:text-sm font-medium shadow-sm">Not started</span>
                    <span className="px-3 py-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 rounded-full text-xs sm:text-sm font-medium shadow-sm">In progress</span>
                    <span className="px-3 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 rounded-full text-xs sm:text-sm font-medium shadow-sm">Sustainable challenge</span>
                    <span className="px-3 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium shadow-sm cursor-pointer hover:shadow-md transition-all">View all</span>
                  </div>

                  {/* Circular Progress */}
                  <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                      <svg className="w-40 h-40 sm:w-48 sm:h-48 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                        <circle 
                          cx="50" 
                          cy="50" 
                          r="45" 
                          fill="none" 
                          stroke="url(#gradient)" 
                          strokeWidth="8"
                          strokeDasharray={`${60 * 2.83} 283`}
                          strokeLinecap="round"
                          className="animate-pulse"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">June</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 lg:ml-6">
                      <div className="space-y-3">
                        <div className="text-sm text-gray-600 leading-relaxed bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                          Congrats! By the end of month you completed 60% of milestone course in time. 
                          Different challenges are going smooth according to your plan. 
                          You have been consistent with your learning pattern. 
                          Make sure to maintain it further and reach new milestones. 
                          Keep it up and learn new things ahead.
                        </div>
                      </div>
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
                    {[
                      { time: "09:00", course: "Course event", day: "Today", date: "02 Aug 2023" },
                      { time: "10:00", course: "Course event", day: "Today", date: "02 Aug 2023" },
                      { time: "13:00", course: "Course event", day: "Today", date: "02 Aug 2023" },
                      { time: "14:00", course: "Course event", day: "Today", date: "02 Aug 2023" }
                    ].map((event, index) => (
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

                {/* Milestones */}
                <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base sm:text-lg font-bold text-gray-800">Milestones</h2>
                    <ChevronRight className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Your achievements on important topics and upward trajectory towards your goals
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Trophy, label: "Leaderboard", color: "bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600" },
                      { icon: Award, label: "Mentor Award", color: "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600" },
                      { icon: Target, label: "First Goal", color: "bg-gradient-to-br from-green-100 to-green-200 text-green-600" },
                      { icon: BookOpen, label: "First Course", color: "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600" },
                      { icon: Users, label: "Projects Completed", color: "bg-gradient-to-br from-red-100 to-red-200 text-red-600" },
                      { icon: Clock, label: "Quick Access", color: "bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-600" }
                    ].map((item, index) => (
                      <div key={index} className="flex flex-col items-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md transform hover:scale-105">
                        <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center mb-2 shadow-sm`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="text-xs text-center font-semibold text-gray-700">{item.label}</div>
                      </div>
                    ))}
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
                {[
                  {
                    title: "Finance",
                    description: "Join 4 learners in Finance Circles for Banking and associated courses",
                    members: ["", "", ""],
                    color: "from-blue-500 via-blue-600 to-indigo-600",
                    textColor: "text-blue-600"
                  },
                  {
                    title: "Design & Creative",
                    description: "Join 5 learners in Design Circles for Banking and associated courses",
                    members: ["", "", ""],
                    color: "from-orange-500 via-pink-500 to-red-600",
                    textColor: "text-orange-600"
                  },
                  {
                    title: "Data Science",
                    description: "Join 3 learners in Data Science Circles for Banking and associated courses",
                    members: ["", ""],
                    color: "from-purple-500 via-indigo-500 to-blue-600",
                    textColor: "text-purple-600"
                  }
                ].map((circle, index) => (
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
                          {circle.members.map((member, idx) => (
                            <div key={idx} className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full border-2 border-white flex items-center justify-center text-sm shadow-sm">
                              {member}
                            </div>
                          ))}
                          <div className="w-8 h-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full border-2 border-white flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer">
                            <Plus className="w-4 h-4 text-gray-500" />
                          </div>
                        </div>
                        <span className={`text-sm font-semibold ${circle.textColor}`}>20 Circles</span>
                      </div>
                      <button className="w-full mt-4 bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-800 font-bold py-3 rounded-xl hover:from-yellow-500 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                        Join Now!
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View Mentors Section */}
            <div className="mt-6 sm:mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">View Mentors</h2>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm sm:text-base">See more</button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { name: "John Doe", role: "UX Designer", experience: "5+ Years of experience", bgColor: "bg-gradient-to-br from-blue-500 to-indigo-600" },
                  { name: "Jane Smith", role: "UX Designer", experience: "3+ Years of experience", bgColor: "bg-gradient-to-br from-green-500 to-emerald-600" },
                  { name: "Mike Johnson", role: "UX Designer", experience: "7+ Years of experience", bgColor: "bg-gradient-to-br from-pink-500 to-rose-600" },
                  { name: "Sarah Wilson", role: "UX Designer", experience: "4+ Years of experience", bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600" }
                ].map((mentor, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-lg rounded-3xl p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className={`w-16 h-16 ${mentor.bgColor} rounded-2xl mx-auto mb-3 flex items-center justify-center shadow-lg`}>
                      <div className="w-12 h-12 bg-white bg-opacity-30 rounded-xl backdrop-blur-sm"></div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-gray-800 mb-1">{mentor.name}</h3>
                      <div className="text-sm text-gray-600 mb-1 font-medium">{mentor.role}</div>
                      <div className="text-xs text-gray-500 mb-3">{mentor.experience}</div>
                      <div className="flex justify-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
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

export default Dashboard;