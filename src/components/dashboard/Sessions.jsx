import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, ChevronDown, Users, Clock, FileText, Target, Calendar } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';

const Sessions = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1)); // May 2025
  const [selectedDate, setSelectedDate] = useState(13);
  const [searchTerm, setSearchTerm] = useState('');

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const sessionNotes = [
    {
      id: 1,
      text: "Share progress checklist to complete",
      notes: "View Notes"
    },
    {
      id: 2,
      text: "Share student's checklist to complete",
      notes: "View Notes"
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: "Archive Webinar at 2:30 pm",
      profile: "View Profile"
    },
    {
      id: 2,
      title: "Archive Webinar at 3:30 pm",
      profile: "View Profile"
    }
  ];

  const pastSessions = [
    {
      id: 1,
      date: "April 30th, 2024",
      mentorName: "Andrew Gibson",
      sessionType: "Public Speaking Help",
      tags: ["New", "Performance", "Leadership", "Career", "Networking", "Product"],
      sessionNotes: [
        "The best way to overcome anxiety is to prepare properly and prepare some more. Take the first full hour just purely mental focus. Once you have turned your mind off of everything else and focus solely on the moment at hand, you will have a much better experience.",
        "In particular in thinking of speaking or similar, let's say you've got a lot to say. Get in front of your audience and you can. This will help you dimension your course thoughts, avoid unproductive organizational patterns, and emotionally sustained coherent."
      ],
      attachments: [
        { name: "New_Public_Speaking_Tips.pdf", icon: "📄" }
      ],
      attendees: [
        { name: "Andrew Gibson", role: "Mentor", avatar: "", dueDate: "Due May 26" },
        { name: "Andrew Gibson", role: "Mentor", avatar: "", dueDate: "Due May 26" }
      ]
    },
    {
      id: 2,
      date: "April 30th, 2024",
      mentorName: "Andrew Gibson",
      sessionType: "Public Speaking Help",
      tags: ["New", "Performance", "Leadership", "Career", "Networking", "Product"],
      sessionNotes: [
        "The best way to overcome anxiety is to prepare properly and prepare some more. Take the first full hour just purely mental focus. Once you have turned your mind off of everything else and focus solely on the moment at hand, you will have a much better experience.",
        "In particular in thinking of speaking or similar, let's say you've got a lot to say. Get in front of your audience and you can. This will help you dimension your course thoughts, avoid unproductive organizational patterns, and emotionally sustained coherent."
      ],
      attachments: [
        { name: "New_Public_Speaking_Tips.pdf", icon: "📄" }
      ],
      attendees: [
        { name: "Andrew Gibson", role: "Mentor", avatar: "", dueDate: "Due May 26" },
        { name: "Andrew Gibson", role: "Mentor", avatar: "", dueDate: "Due May 26" }
      ]
    }
  ];

  const getTagColor = (tag) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800',
      'Performance': 'bg-yellow-100 text-yellow-800',
      'Leadership': 'bg-green-100 text-green-800',
      'Career': 'bg-purple-100 text-purple-800',
      'Networking': 'bg-pink-100 text-pink-800',
      'Product': 'bg-indigo-100 text-indigo-800'
    };
    return colors[tag] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation/>
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard/calendar" />

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
                <h1 className="text-2xl font-bold tracking-wide">Sessions</h1>
                <Calendar className="w-8 h-8" />
              </div>
            </div> 

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Left Column */}
              <div className="space-y-4 sm:space-y-6">
                {/* Your Session Notes */}
                <div className="bg-white rounded-xl shadow-sm border">
                  <div className="p-4 sm:p-6 border-b">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center">
                      📝 Your Session Notes
                    </h2>
                  </div>
                  <div className="p-4 sm:p-6 space-y-3">
                    {sessionNotes.map((note) => (
                      <div key={note.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm sm:text-base text-gray-700">{note.text}</span>
                        </div>
                        <button className="text-blue-600 text-sm sm:text-base font-medium hover:text-blue-800">
                          {note.notes}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Session Date */}
                <div className="bg-white rounded-xl shadow-sm border">
                  <div className="p-4 sm:p-6 border-b">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 flex items-center">
                      📅 Next Session Date
                    </h2>
                  </div>
                  <div className="p-4 sm:p-6 space-y-3">
                    {upcomingSessions.map((session) => (
                      <div key={session.id} className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                          <span className="text-sm sm:text-base text-gray-700">{session.title}</span>
                        </div>
                        <button className="text-blue-600 text-sm sm:text-base font-medium hover:text-blue-800">
                          {session.profile}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Search */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-xl shadow-sm border p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm sm:text-base text-gray-600">Search Sessions</span>
                  </div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type="text"
                      placeholder="Search sessions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Past Sessions */}
            <div className="mt-6 sm:mt-8">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Past Sessions</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-gray-500">Sort by:</span>
                  <button className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                    Recent
                  </button>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {pastSessions.map((session) => (
                  <div key={session.id} className="bg-white rounded-xl shadow-sm border">
                    {/* Session Header */}
                    <div className="p-4 sm:p-6 border-b">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-800">{session.date}</h3>
                          <p className="text-sm sm:text-base text-gray-600">{session.mentorName} • {session.sessionType}</p>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <ChevronDown className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Session Content */}
                    <div className="p-4 sm:p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {session.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Session Notes */}
                      <div className="mb-4">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-2">Session Notes</h4>
                        <div className="space-y-2">
                          {session.sessionNotes.map((note, index) => (
                            <p key={index} className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                              • {note}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Attachments */}
                      <div className="mb-4">
                        <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-2">Attachments</h4>
                        {session.attachments.map((attachment, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <span className="text-lg">{attachment.icon}</span>
                            <button className="text-blue-600 text-sm sm:text-base font-medium hover:text-blue-800 underline">
                              {attachment.name}
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Also in Attendance */}
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold text-gray-700 mb-2">Also in Attendance</h4>
                        <div className="space-y-2">
                          {session.attendees.map((attendee, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <div>
                                  <p className="text-sm sm:text-base font-semibold text-gray-800">{attendee.name}</p>
                                  <p className="text-xs sm:text-sm text-gray-600">{attendee.role}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <button className="text-blue-600 text-sm sm:text-base font-medium hover:text-blue-800">
                                  Add-Send
                                </button>
                                <p className="text-xs sm:text-sm text-gray-600">{attendee.dueDate}</p>
                              </div>
                            </div>
                          ))}
                        </div>
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

export default Sessions;