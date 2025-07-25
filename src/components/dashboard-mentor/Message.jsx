import React, { useState } from 'react';
import { Search, Plus, Phone, Video, MoreHorizontal, Send, Paperclip, Smile } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';

const Message = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(0);
  const [message, setMessage] = useState('');

  const contacts = [
    { 
      name: "Name", 
      lastMessage: "Hey Amrita! I have a question about everything are you...", 
      time: "9:41 AM", 
      unread: 2,
      avatar: "N",
      bgColor: "bg-blue-500"
    },
    { 
      name: "Name", 
      lastMessage: "Yes of course here are some tips I found online, the if you...", 
      time: "9:41 AM", 
      unread: 0,
      avatar: "N",
      bgColor: "bg-green-500"
    },
    { 
      name: "Sarah Smith (FINA...)", 
      lastMessage: "Hey there! How are you?", 
      time: "Yesterday", 
      unread: 0,
      avatar: "S",
      bgColor: "bg-purple-500"
    },
    { 
      name: "Name", 
      lastMessage: "Thanks for the help!", 
      time: "Yesterday", 
      unread: 1,
      avatar: "N",
      bgColor: "bg-orange-500"
    },
    { 
      name: "Name", 
      lastMessage: "See you tomorrow", 
      time: "2 days ago", 
      unread: 0,
      avatar: "N",
      bgColor: "bg-pink-500"
    },
    { 
      name: "Group Chat", 
      lastMessage: "Meeting at 3 PM", 
      time: "3 days ago", 
      unread: 5,
      avatar: "G",
      bgColor: "bg-indigo-500"
    }
  ];

  const currentChat = [
    {
      sender: "them",
      message: "Hey Amrita! I have a question about everything are you available?",
      time: "9:41 AM"
    },
    {
      sender: "me",
      message: "Yes of course here are some tips I found online, the if you don't mind I can share the link",
      time: "9:42 AM"
    },
    {
      sender: "me",
      message: "www.pushstudy.com",
      time: "9:42 AM",
      isLink: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navigation/>
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard/messages" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed top-20 left-4 z-30 lg:hidden bg-white/80 backdrop-blur-lg p-2 rounded-xl shadow-lg border border-white/20"
      >
      </button>

      {/* Main Content */}
      <div className={`pt-16 transition-all duration-300`}>
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)]">
            {/* Messages Container */}
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 h-full flex overflow-hidden">
              
              {/* Left Sidebar - Contacts */}
              <div className="w-full md:w-80 lg:w-96 border-r border-gray-200/50 flex flex-col bg-white/30">
                {/* Header */}
                <div className="p-4 sm:p-6 border-b border-gray-200/50">
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Inbox</h1>
                    <button className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search Contacts"
                      className="w-full pl-10 pr-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Contacts List */}
                <div className="flex-1 overflow-y-auto">
                  {contacts.map((contact, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedContact(index)}
                      className={`p-4 cursor-pointer transition-all duration-200 border-b border-gray-100/50 hover:bg-white/40 ${
                        selectedContact === index ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-l-blue-500' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 ${contact.bgColor} rounded-full flex items-center justify-center text-white font-semibold shadow-lg flex-shrink-0`}>
                          {contact.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-gray-800 truncate text-sm">{contact.name}</h3>
                            <span className="text-xs text-gray-500 flex-shrink-0">{contact.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600 truncate pr-2">{contact.lastMessage}</p>
                            {contact.unread > 0 && (
                              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center px-1.5 flex-shrink-0">
                                {contact.unread}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Chat Area */}
              <div className="hidden md:flex flex-1 flex-col">
                {/* Chat Header */}
                <div className="p-4 sm:p-6 border-b border-gray-200/50 bg-white/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${contacts[selectedContact].bgColor} rounded-full flex items-center justify-center text-white font-semibold shadow-lg`}>
                        {contacts[selectedContact].avatar}
                      </div>
                      <div>
                        <h2 className="font-semibold text-gray-800">{contacts[selectedContact].name}</h2>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-500">Online</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-10 h-10 bg-white/50 hover:bg-white/70 rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-md">
                        <Phone className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="w-10 h-10 bg-white/50 hover:bg-white/70 rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-md">
                        <Video className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="w-10 h-10 bg-white/50 hover:bg-white/70 rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-md">
                        <MoreHorizontal className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
                  {currentChat.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex ${chat.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                          chat.sender === 'me'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                            : 'bg-white/70 backdrop-blur-sm text-gray-800 border border-gray-200/50'
                        } ${chat.isLink ? 'underline cursor-pointer hover:opacity-80' : ''}`}
                      >
                        <p className="text-sm">{chat.message}</p>
                        <div className={`text-xs mt-1 ${chat.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {chat.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 sm:p-6 border-t border-gray-200/50 bg-white/30">
                  <div className="flex items-center space-x-3">
                    <button className="w-10 h-10 bg-white/50 hover:bg-white/70 rounded-full flex items-center justify-center transition-all shadow-sm hover:shadow-md">
                      <Paperclip className="w-5 h-5 text-gray-600" />
                    </button>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type Something..."
                        className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-12"
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/50 hover:bg-white/70 rounded-full flex items-center justify-center transition-all">
                        <Smile className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <button className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Chat View (when contact is selected) */}
              <div className="md:hidden flex-1 flex-col" style={{display: selectedContact !== null ? 'flex' : 'none'}}>
                {/* Mobile Chat Header */}
                <div className="p-4 border-b border-gray-200/50 bg-white/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${contacts[selectedContact].bgColor} rounded-full flex items-center justify-center text-white font-semibold shadow-lg`}>
                        {contacts[selectedContact].avatar}
                      </div>
                      <div>
                        <h2 className="font-semibold text-gray-800">{contacts[selectedContact].name}</h2>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-500">Online</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="w-8 h-8 bg-white/50 hover:bg-white/70 rounded-full flex items-center justify-center transition-all shadow-sm">
                        <Phone className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 bg-white/50 hover:bg-white/70 rounded-full flex items-center justify-center transition-all shadow-sm">
                        <Video className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {currentChat.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex ${chat.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-2xl shadow-sm ${
                          chat.sender === 'me'
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                            : 'bg-white/70 backdrop-blur-sm text-gray-800 border border-gray-200/50'
                        } ${chat.isLink ? 'underline cursor-pointer hover:opacity-80' : ''}`}
                      >
                        <p className="text-sm">{chat.message}</p>
                        <div className={`text-xs mt-1 ${chat.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                          {chat.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile Message Input */}
                <div className="p-4 border-t border-gray-200/50 bg-white/30">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type Something..."
                        className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    <button className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                      <Send className="w-4 h-4" />
                    </button>
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

export default Message;