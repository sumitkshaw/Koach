import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Target, BookOpen, Users, Shield, HelpCircle, ExternalLink, Globe, Calendar, MapPin, Briefcase, Star } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';

const Setting = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Profile');

  const sidebarItems = [
    { name: 'General', icon: SettingsIcon },
    { name: 'Profile', icon: User },
    { name: 'Languages', icon: Globe },
    { name: 'Notifications', icon: Bell },
    { name: 'Goals', icon: Target },
    { name: 'Expertise & Domains', icon: BookOpen },
    { name: 'Mentee Management', icon: Users },
    { name: 'Password & Privacy', icon: Shield },
    { name: 'Security & Two-Factor Authentication', icon: Shield },
    { name: 'Integrations', icon: ExternalLink },
    { name: 'Community', icon: Users },
    { name: 'Additional Resources', icon: HelpCircle }
  ];

  const ProfileContent = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-start gap-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
              <div className="w-12 h-12 bg-white bg-opacity-30 rounded-xl backdrop-blur-sm"></div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-800">Your Name</h2>
              <span className="text-sm font-medium text-blue-600">Andrea Watson</span>
            </div>
            <p className="text-gray-600 text-sm mb-1">Software Engineer</p>
            <p className="text-gray-500 text-sm">15 Years with Analyst Companies</p>
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
            <input
              type="text"
              defaultValue="Software Engineer"
              className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Open to Work</option>
              <option>Currently Employed</option>
              <option>Freelancing</option>
              <option>Student</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
            <input
              type="text"
              defaultValue="Reach"
              className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
            <select className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Tech</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* About and Expertise */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">About and Expertise</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              rows="4"
              placeholder="Tell us about yourself..."
              className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Skills & Expertise</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {['Entrepreneurship', 'Career Change', 'Breaking into tech workplace'].map((skill, index) => (
                <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add new skill..."
              className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
            <input
              type="text"
              defaultValue="English, Spanish, Hindi"
              className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio</label>
            <input
              type="url"
              defaultValue="www.portfolio.com"
              className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
            <input
              type="url"
              defaultValue="www.LinkedIn.com"
              className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
            <input
              type="url"
              defaultValue="www.xyz.com"
              className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Social Profile */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Social Profile</h3>
        <input
          type="text"
          placeholder="Add social media links..."
          className="w-full px-4 py-2.5 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700">
          Save Changes
        </button>
      </div>
    </div>
  );

  const GeneralContent = () => (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">General Settings</h3>
      <p className="text-gray-600">General settings content will be displayed here.</p>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Profile':
        return <ProfileContent />;
      case 'General':
        return <GeneralContent />;
      default:
        return (
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{activeTab}</h3>
            <p className="text-gray-600">{activeTab} settings content will be displayed here.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navigation />
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard/settings" />

      {/* Main Content */}
      <div className="pt-16 transition-all duration-300">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="pt-9 mb-8">
              <div className="bg-blue-600 text-white px-8 py-6 rounded-2xl flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-wide">Settings</h1>
                <SettingsIcon className="w-8 h-8" />
              </div>
            </div>

            {/* Settings Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-4 border border-white/20 sticky top-24">
                  <nav className="space-y-1">
                    {sidebarItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = activeTab === item.name;
                      
                      return (
                        <button
                          key={item.name}
                          onClick={() => setActiveTab(item.name)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 text-left text-sm ${
                            isActive
                              ? 'bg-blue-100 text-blue-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                          }`}
                        >
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{item.name}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                {renderContent()}
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

export default Setting;