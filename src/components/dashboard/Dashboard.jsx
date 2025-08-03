import React, { useState } from 'react';
import { Calendar, Trophy, Users, BookOpen, Target, Award, Star, Clock, ChevronRight, Plus, ChevronLeft } from 'lucide-react';
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
            <div className="mb-8 flex items-start justify-between">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">M</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                    Welcome Maithili! 
                    <span className="ml-2">👋</span>
                  </h1>
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
                    <div className="flex items-end justify-center space-x-8 h-48 bg-gray-50 rounded-lg p-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 bg-blue-600 rounded-t-lg" style={{height: '120px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">MON</span>
                        <span className="text-xs text-gray-500">Done</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 bg-blue-600 rounded-t-lg" style={{height: '100px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">TUES</span>
                        <span className="text-xs text-gray-500">Done</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 bg-gray-300 rounded-t-lg" style={{height: '70px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">WED</span>
                        <span className="text-xs text-blue-600 font-medium">To be Done</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 bg-gray-300 rounded-t-lg" style={{height: '90px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">THURS</span>
                        <span className="text-xs text-blue-600 font-medium">To be Done</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 bg-gray-300 rounded-t-lg" style={{height: '80px'}}></div>
                        <span className="text-sm font-medium text-gray-700 mt-3">FRI</span>
                        <span className="text-xs text-blue-600 font-medium">To be Done</span>
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
                      <div className="text-sm font-semibold text-gray-900">100 mins</div>
                      <div className="text-xs text-gray-600">Time Saved</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <BookOpen className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">5</div>
                      <div className="text-xs text-gray-600">New Skills Learned</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">$80</div>
                      <div className="text-xs text-gray-600">Money Saved</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <Calendar className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">100%</div>
                      <div className="text-xs text-gray-600">Attendance Streak</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <Target className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">5</div>
                      <div className="text-xs text-gray-600">Goals Achieved</div>
                    </div>
                    <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                      <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                      <div className="text-sm font-semibold text-gray-900">3</div>
                      <div className="text-xs text-gray-600">Projects Completed</div>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    ⭐ Badges
                  </h2>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">First Post</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Star className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">First Engagement</div>
                    </div>
                    <div className="text-center p-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-gray-900">First Question</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Next Session Date */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      📅 Next Session Date
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded border border-blue-200">
                        <div className="text-center">
                          <div className="text-xs text-blue-600 font-medium">MAY</div>
                          <div className="text-sm font-bold text-blue-600">25</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Andrea Watson at 3:00 pm</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <span className="text-xs text-gray-600">View Profile</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded border border-blue-200">
                        <div className="text-center">
                          <div className="text-xs text-blue-600 font-medium">MAY</div>
                          <div className="text-sm font-bold text-blue-600">26</div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Andrea Watson at 3:00 pm</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <span className="text-xs text-gray-600">View Profile</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress towards Goals */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      ⭐ Progress towards Goals
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  {/* Progress bars */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">0%</span>
                    <span className="text-sm text-gray-600">25%</span>
                    <span className="text-sm text-gray-600">100%</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">Your Goals for the Next 30 Days</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-900">Add Goal</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Front End Development</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Leadership</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Leadership</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Web Development</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Project Management</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Project Management</span>
                    </div>
                  </div>
                </div>

                {/* This Week's Activities */}
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    📅 This Week's Activities
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Andrea Watson</div>
                        <div className="text-sm text-gray-600">Watch Figma Tutorial on Auto Layout</div>
                        <div className="text-xs text-blue-600 font-medium">Front End Development</div>
                      </div>
                      <span className="text-xs text-gray-500 flex-shrink-0">Due May 26</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Andrea Watson</div>
                        <div className="text-sm text-gray-600">Watch Figma Tutorial on Auto Layout</div>
                        <div className="text-xs text-blue-600 font-medium">Front End Development</div>
                      </div>
                      <span className="text-xs text-gray-500 flex-shrink-0">Due May 26</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Andrea Watson</div>
                        <div className="text-sm text-gray-600">Watch Figma Tutorial on Auto Layout</div>
                        <div className="text-xs text-blue-600 font-medium">Front End Development</div>
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
                        <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">Book Another</div>
                    </div>
                    <div className="text-center">
                      <div className="flex -space-x-2 justify-center mb-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">Book Featured</div>
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