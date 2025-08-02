import React, { useState } from 'react';
import { Calendar, Trophy, Users, BookOpen, Target, Award, Star, Clock, ChevronRight, Plus } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation/>
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-20 left-4 z-30 lg:hidden bg-white p-2 rounded-xl shadow-lg border"
      >
      </button>

      {/* Main Content */}
      <div className={`pt-16 transition-all duration-300`}>
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="pt-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Welcome Maithili! 👋</h1>
                  <p className="text-gray-600">Next Session Date</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">📅 Next Session Date</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Archive Webinar at 2:00 pm</span>
                    <span className="text-xs text-blue-600 cursor-pointer">View Profile</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">Archive Webinar at 3:00 pm</span>
                  <span className="text-xs text-blue-600 cursor-pointer">View Profile</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Track Your Progress */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    📈 Track your Progress
                  </h2>
                  
                  {/* Progress Chart */}
                  <div className="mb-6">
                    <div className="flex items-end justify-center space-x-6 h-48 bg-gray-50 rounded-lg p-4">
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-blue-600 rounded-t-lg" style={{height: '100px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">MON</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-blue-600 rounded-t-lg" style={{height: '140px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">TUES</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-gray-300 rounded-t-lg" style={{height: '70px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">WED</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-gray-300 rounded-t-lg" style={{height: '110px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">THURS</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-16 bg-gray-300 rounded-t-lg" style={{height: '80px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">FRI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    🎯 Milestones
                  </h2>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <Clock className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">This Sprint</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <Trophy className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">First Course</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">First Course Completed</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <BookOpen className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">View Course Completion</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">New Achievement</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">Project Completed</div>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    🏆 Badges
                  </h2>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Star className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">Participant</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Trophy className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">First Engagement</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">First Mentor</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Progress towards Goals */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">📊 Progress towards Goals</h3>
                    <button className="text-sm text-blue-600 hover:text-blue-700">Add Goal</button>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Your Goals for the Next 30 Days</p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="text-sm font-semibold text-blue-600 mb-1">Front-End Development</div>
                      <div className="text-sm text-gray-500">Leadership</div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="text-sm font-semibold text-green-600 mb-1">Leadership</div>
                      <div className="text-sm text-gray-500">New Development</div>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="text-sm font-semibold text-purple-600 mb-1">Project Management</div>
                      <div className="text-sm text-gray-500">Project Management</div>
                    </div>
                  </div>
                </div>

                {/* This Week's Activities */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 This Week's Activities</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Archive Webinar</div>
                        <div className="text-sm text-gray-600 mb-1">Learn Python Tutorial on Zen Legend</div>
                        <div className="text-xs text-blue-600 font-medium">Front-End Development</div>
                      </div>
                      <span className="text-xs text-gray-500 flex-shrink-0">Due May 26</span>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Archive Webinar</div>
                        <div className="text-sm text-gray-600 mb-1">Watch Python Tutorial on Zen Legend</div>
                        <div className="text-xs text-green-600 font-medium">Front-End Development</div>
                      </div>
                      <span className="text-xs text-gray-500 flex-shrink-0">Due May 26</span>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Archive Webinar</div>
                        <div className="text-sm text-gray-600 mb-1">Learn Python Tutorial on Zen Legend</div>
                        <div className="text-xs text-purple-600 font-medium">Front-End Development</div>
                      </div>
                      <span className="text-xs text-gray-500 flex-shrink-0">Due May 26</span>
                    </div>
                  </div>
                </div>

                {/* Book a New Session */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Book a New Session</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="flex -space-x-2 justify-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">Book Another</div>
                    </div>
                    <div className="text-center">
                      <div className="flex -space-x-2 justify-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">Book Weekend</div>
                    </div>
                  </div>
                </div>
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