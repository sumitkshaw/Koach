import React, { useState } from 'react';
import { Plus, Calendar, Target, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';

const Goals = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const coursesData = [
    {
      title: "UX Design fundamentals",
      progress: 60,
      status: "Progress Tracker",
      description: "Learn the core principles of user experience design, including user research, wireframing, prototyping, and usability testing.",
      month: "June",
      tasks: [
        { name: "User Research", status: "completed" },
        { name: "Wireframing", status: "in-progress" },
        { name: "Prototyping", status: "not-started" },
        { name: "Testing", status: "not-started" }
      ]
    },
    {
      title: "Finance Fundamentals",
      progress: 45,
      status: "Progress Tracker",
      description: "Master fundamental financial concepts including budgeting, investing, financial analysis, and market dynamics.",
      month: "June",
      tasks: [
        { name: "Budgeting Basics", status: "completed" },
        { name: "Investment Principles", status: "in-progress" },
        { name: "Market Analysis", status: "not-started" },
        { name: "Risk Management", status: "not-started" }
      ]
    }
  ];

  const monthlyGoals = [
    { 
      goal: "Complete 5 UX projects and submit for mentor review",
      progress: 80,
      priority: "high",
      daysLeft: 5
    },
    { 
      goal: "Read 3 finance books and write summaries",
      progress: 33,
      priority: "medium",
      daysLeft: 12
    },
    { 
      goal: "Attend 10 webinars on design thinking",
      progress: 70,
      priority: "low",
      daysLeft: 8
    },
    { 
      goal: "Build a portfolio website with 5 case studies",
      progress: 25,
      priority: "high",
      daysLeft: 15
    }
  ];

  const inProgressTasks = [
    { task: "Design mobile app wireframes", progress: 85, priority: "high" },
    { task: "Financial modeling exercise", progress: 60, priority: "medium" },
    { task: "User interview analysis", progress: 40, priority: "low" },
    { task: "Investment portfolio review", progress: 90, priority: "high" },
    { task: "Prototype usability testing", progress: 30, priority: "medium" }
  ];

  const tasksList = [
    { name: "Complete UX research report", status: "pending", priority: "high", due: "Today" },
    { name: "Review finance case study", status: "pending", priority: "medium", due: "Tomorrow" },
    { name: "Submit design mockups", status: "pending", priority: "low", due: "This week" },
    { name: "Attend mentor session", status: "pending", priority: "high", due: "Today" },
    { name: "Practice presentation skills", status: "pending", priority: "medium", due: "Next week" }
  ];

  const completedTasks = [
    { name: "User persona creation", status: "completed", priority: "high", date: "Yesterday" },
    { name: "Market research analysis", status: "completed", priority: "medium", date: "2 days ago" },
    { name: "Design system documentation", status: "completed", priority: "low", date: "3 days ago" },
    { name: "Financial planning workshop", status: "completed", priority: "high", date: "1 week ago" },
    { name: "Competitive analysis report", status: "completed", priority: "medium", date: "1 week ago" }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'not-started': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navigation/>
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard/goals" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-20 left-4 z-30 lg:hidden bg-white/80 backdrop-blur-lg p-2 rounded-xl shadow-lg border border-white/20"
      >
      </button>

      {/* Main Content */}
      <div className={`pt-16 transition-all duration-300`}>
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="pt-6 mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Goals & Progress
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">Track your learning journey and achieve your milestones</p>
            </div>

            {/* Course Progress Cards */}
            <div className="space-y-6 mb-8">
              {coursesData.map((course, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    {/* Left Side - Course Info */}
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3">
                        {course.status}
                      </span>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{course.description}</p>
                      
                      {/* Task Status Indicators */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                            <div className={`w-3 h-3 rounded-full ${getStatusColor(task.status)}`}></div>
                            <span className="text-gray-600">{task.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Side - Progress Circle */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 mb-3">
                        <svg className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="40" 
                            fill="none" 
                            stroke="url(#gradient)" 
                            strokeWidth="8"
                            strokeDasharray={`${course.progress * 2.51} 251`}
                            strokeLinecap="round"
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
                            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {course.month}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">{course.progress}%</div>
                        <div className="text-sm text-gray-500">Complete</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Activity Tracker */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Activity Tracker</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">Add a task</span>
                </button>
              </div>

              {/* Goals of the Month */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl mb-4">
                  <h3 className="font-bold text-center">Goals of the Month</h3>
                </div>
                <div className="space-y-3">
                  {monthlyGoals.map((goal, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200/50">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-3 h-3 rounded-full ${getPriorityColor(goal.priority)}`}></div>
                          <span className="text-sm font-medium text-gray-800">{goal.goal}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-sm font-bold text-gray-800">{goal.progress}%</div>
                        <div className="text-xs text-gray-500">{goal.daysLeft} days left</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* In Progress */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl mb-4">
                  <h3 className="font-bold text-center">In Progress</h3>
                </div>
                <div className="space-y-3">
                  {inProgressTasks.map((task, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200/50">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></div>
                          <span className="text-sm font-medium text-gray-800">{task.task}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <div className="text-sm font-bold text-gray-800">{task.progress}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasks and Completed Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Tasks */}
                <div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl mb-4">
                    <h3 className="font-bold text-center">Tasks</h3>
                  </div>
                  <div className="space-y-2">
                    {tasksList.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200/50">
                        <div className="flex items-center gap-2 flex-1">
                          <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">{task.name}</div>
                            <div className="text-xs text-gray-500">{task.due}</div>
                          </div>
                        </div>
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Completed */}
                <div>
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-xl mb-4">
                    <h3 className="font-bold text-center">Completed</h3>
                  </div>
                  <div className="space-y-2">
                    {completedTasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50">
                        <div className="flex items-center gap-2 flex-1">
                          <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></div>
                          <div>
                            <div className="text-sm font-medium text-gray-800">{task.name}</div>
                            <div className="text-xs text-gray-500">{task.date}</div>
                          </div>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500" />
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