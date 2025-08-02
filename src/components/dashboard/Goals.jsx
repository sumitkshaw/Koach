import React, { useState } from 'react';
import { Plus, Calendar, Target, TrendingUp, Clock, CheckCircle, AlertCircle, Filter, ChevronDown, Trophy } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';

const Goals = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const progressGoals = [
    { 
      title: "Front-End Development",
      subtitle: "Leadership",
      color: "blue"
    },
    { 
      title: "Leadership",
      subtitle: "New Development",
      color: "green"
    },
    { 
      title: "Project Management",
      subtitle: "Project Management",
      color: "purple"
    }
  ];

  const weekActivities = [
    {
      name: "Archive Webinar",
      description: "Watch Python Tutorial on Auto Layout",
      category: "Front-End Development",
      due: "Due May 26",
      color: "blue"
    },
    {
      name: "Archive Webinar",
      description: "Watch Python Tutorial on Auto Layout",
      category: "Front-End Development", 
      due: "Due May 26",
      color: "blue"
    },
    {
      name: "Archive Webinar",
      description: "Watch Python Tutorial on Auto Layout",
      category: "Front-End Development",
      due: "Due May 26", 
      color: "blue"
    }
  ];

  const allActivities = {
    notStarted: [
      {
        name: "Archive Webinar",
        description: "Watch Python Tutorial on Auto Layout",
        category: "Front-End Development",
        due: "Due May 26"
      },
      {
        name: "Archive Webinar", 
        description: "Watch Python Tutorial on Auto Layout",
        category: "Front-End Development",
        due: "Due May 26"
      },
      {
        name: "Archive Webinar",
        description: "Watch Python Tutorial on Auto Layout", 
        category: "Front-End Development",
        due: "Due May 26"
      }
    ],
    inProgress: [
      {
        name: "Archive Webinar",
        description: "Watch Python Tutorial on Auto Layout",
        category: "Front-End Development", 
        due: "Due May 26"
      },
      {
        name: "Archive Webinar",
        description: "Watch Python Tutorial on Auto Layout",
        category: "Front-End Development",
        due: "Due May 26"
      }
    ],
    complete: [
      {
        name: "Archive Webinar",
        description: "Watch Python Tutorial on Auto Layout",
        category: "Front-End Development",
        due: "Due May 26"
      },
      {
        name: "Archive Webinar", 
        description: "Watch Python Tutorial on Auto Layout",
        category: "Front-End Development",
        due: "Due May 26"
      }
    ]
  };

  const getColorClasses = (color) => {
    switch(color) {
      case 'blue': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'green': return 'text-green-600 bg-green-50 border-green-200';
      case 'purple': return 'text-purple-600 bg-purple-50 border-purple-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EDF0F6' }}>
      <Navigation/>
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard/goals" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-20 left-4 z-30 lg:hidden bg-white p-2 rounded-xl shadow-lg border"
      >
      </button>

      {/* Main Content */}
      <div className={`pt-16 transition-all duration-300`}>
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="pt-6 mb-8">
              <div className="bg-blue-600 text-white px-8 py-6 rounded-2xl flex items-center justify-between shadow-lg">
                <h1 className="text-2xl font-bold tracking-wide">Goals and Activities</h1>
                <Trophy className="w-8 h-8" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Progress towards Goals */}
              <div className="bg-white rounded-xl p-8 shadow-sm border">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">📊 Progress towards Goals</h2>
                </div>
                <p className="text-base text-gray-600 mb-6">Your Goals for the Next 30 Days</p>
                <div className="text-right mb-6">
                  <button className="text-base text-blue-600 hover:text-blue-700 font-medium">Add Goal</button>
                </div>
                <div className="space-y-6">
                  {progressGoals.map((goal, index) => (
                    <div key={index} className={`border-l-4 pl-6 ${goal.color === 'blue' ? 'border-blue-500' : goal.color === 'green' ? 'border-green-500' : 'border-purple-500'}`}>
                      <div className={`text-base font-bold mb-2 ${goal.color === 'blue' ? 'text-blue-600' : goal.color === 'green' ? 'text-green-600' : 'text-purple-600'}`}>
                        {goal.title}
                      </div>
                      <div className="text-base text-gray-500">{goal.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* This Week's Activities */}
              <div className="bg-white rounded-xl p-8 shadow-sm border">
                <h2 className="text-xl font-bold text-gray-900 mb-6">📅 This Week's Activities</h2>
                <div className="space-y-6">
                  {weekActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-base font-bold text-gray-900">{activity.name}</div>
                        <div className="text-base text-gray-600 mb-2">{activity.description}</div>
                        <div className="text-sm text-blue-600 font-semibold">{activity.category}</div>
                      </div>
                      <span className="text-sm text-gray-500 flex-shrink-0 font-medium">{activity.due}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* All Activities Section */}
            <div className="bg-white rounded-xl p-8 shadow-sm border hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900">All Activities</h2>
                <button className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-gray-800 border rounded-lg font-medium">
                  <Filter className="w-5 h-5" />
                  <span className="text-base">Filter</span>
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Not Started */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                      <h3 className="font-bold text-gray-900 text-lg">Not Started</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-4">
                    {allActivities.notStarted.map((activity, index) => (
                      <div key={index} className="p-5 bg-gray-50 rounded-lg border hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-base font-bold text-gray-900">{activity.name}</div>
                            <div className="text-sm text-gray-600 mb-2">{activity.description}</div>
                            <div className="text-sm text-blue-600 font-semibold">{activity.category}</div>
                          </div>
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </div>
                        <div className="text-sm text-gray-500 mt-3 font-medium">{activity.due}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* In Progress */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <h3 className="font-bold text-gray-900 text-lg">In Progress</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-4">
                    {allActivities.inProgress.map((activity, index) => (
                      <div key={index} className="p-5 bg-gray-50 rounded-lg border hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-base font-bold text-gray-900">{activity.name}</div>
                            <div className="text-sm text-gray-600 mb-2">{activity.description}</div>
                            <div className="text-sm text-blue-600 font-semibold">{activity.category}</div>
                          </div>
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </div>
                        <div className="text-sm text-gray-500 mt-3 font-medium">{activity.due}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complete */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <h3 className="font-bold text-gray-900 text-lg">Complete</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="space-y-4">
                    {allActivities.complete.map((activity, index) => (
                      <div key={index} className="p-5 bg-gray-50 rounded-lg border hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-base font-bold text-gray-900">{activity.name}</div>
                            <div className="text-sm text-gray-600 mb-2">{activity.description}</div>
                            <div className="text-sm text-blue-600 font-semibold">{activity.category}</div>
                          </div>
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        </div>
                        <div className="text-sm text-gray-500 mt-3 font-medium">{activity.due}</div>
                      </div>
                    ))}
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

export default Goals;