import React, { useState, useRef, useEffect } from 'react';
import { Settings as SettingsIcon, User, Bell, Target, BookOpen, Users, Shield, HelpCircle, ExternalLink, Globe, Calendar, MapPin, Briefcase, Star, Mail, Phone, Map, Linkedin, Link as LinkIcon, Edit2, Download, FileText, Menu, ChevronDown, Check, CheckCircle, XCircle, Clock, Slash } from 'lucide-react';
import Navigation from '../Navigation';
import Sidenav from './Sidenav';
import Footer from '../Footer';

import { useAuth } from '../../utils/AuthContext';

const Settings2 = () => {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Profile');

  // Status Dropdown State
  const [careerStatus, setCareerStatus] = useState('Available for Mentoring');
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const statusRef = useRef(null);

  const careerOptions = [
    { label: 'Available for Mentoring', color: 'text-green-600', icon: CheckCircle },
    { label: 'Fully Booked', color: 'text-red-500', icon: XCircle },
    { label: 'Taking a Break', color: 'text-orange-500', icon: Clock },
    { label: 'Inactive', color: 'text-gray-500', icon: Slash }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusRef.current && !statusRef.current.contains(event.target)) {
        setStatusDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getInitials = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const sidebarItems = [
    { name: 'General', icon: SettingsIcon },
    { name: 'Profile', icon: User },
    { name: 'Notifications', icon: Bell },
    { name: 'Expertise & Domains', icon: BookOpen },
    { name: 'Password & Privacy', icon: Shield },
    { name: 'Security & 2FA', icon: Shield }
  ];

  const ProfileContent = () => (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">
      {/* Left Column (Main Content) */}
      <div className="xl:col-span-8 space-y-6 lg:space-y-8">

        {/* Main Header Card */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8">
            {/* Avatar */}
            <div className="relative group flex-shrink-0">
              <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#2D488F] to-blue-600 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-100">
                {getInitials(user?.name || user?.email)}
              </div>
              <button className="absolute -bottom-3 -right-3 bg-white p-2.5 rounded-xl shadow-md border border-gray-100 text-blue-600 hover:text-blue-700 hover:scale-105 transition-all">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left w-full min-w-0">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 truncate max-w-[200px] md:max-w-md">{user?.name || "User Name"}</h2>
                  <p className="text-gray-500 font-medium mt-1 text-sm lg:text-base">Software Engineer</p>
                </div>
                <button className="flex items-center gap-2 bg-[#0077B5] text-white px-5 py-2.5 rounded-xl hover:bg-[#006097] transition-all shadow-sm shadow-blue-100 text-sm font-medium whitespace-nowrap">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Account</span>
                </button>
              </div>

              {/* Internal Tabs */}
              <div className="flex items-center gap-6 lg:gap-8 mt-8 border-b border-gray-100 w-full overflow-x-auto no-scrollbar mask-linear-fade">
                <button className="pb-3 text-blue-600 font-bold border-b-2 border-blue-600 text-xs lg:text-sm whitespace-nowrap">Overview</button>
                <button className="pb-3 text-gray-400 font-medium hover:text-gray-600 transition-colors text-xs lg:text-sm whitespace-nowrap">Notes</button>
                <button className="pb-3 text-gray-400 font-medium hover:text-gray-600 transition-colors text-xs lg:text-sm whitespace-nowrap">Tests</button>
                <button className="pb-3 text-gray-400 font-medium hover:text-gray-600 transition-colors text-xs lg:text-sm whitespace-nowrap">History</button>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information Form */}
        <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6 lg:mb-8">
            <h3 className="text-lg font-bold text-gray-900">All Personal Information</h3>
            <button className="text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-gray-50 rounded-lg">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Email Field */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-2xl bg-orange-50 flex-shrink-0 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">Email Address</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    disabled
                    className="w-full bg-transparent border-none text-gray-900 font-semibold p-0 focus:ring-0 text-sm h-auto placeholder-gray-400 truncate"
                    placeholder="Add email"
                  />
                </div>
              </div>
            </div>

            {/* Language Field */}
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-2xl bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 transition-all duration-300">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">Language</label>
                  <input
                    type="text"
                    defaultValue="English, Spanish"
                    className="w-full bg-transparent border-none text-gray-900 font-semibold p-0 focus:ring-0 text-sm h-auto placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-2xl bg-purple-50 flex-shrink-0 flex items-center justify-center text-purple-500 group-hover:bg-purple-100 transition-all duration-300">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">Job Title</label>
                  <input
                    type="text"
                    defaultValue="Software Engineer"
                    className="w-full bg-transparent border-none text-gray-900 font-semibold p-0 focus:ring-0 text-sm h-auto placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-2xl bg-green-50 flex-shrink-0 flex items-center justify-center text-green-500 group-hover:bg-green-100 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block">Location</label>
                  <input
                    type="text"
                    placeholder="Add Location"
                    className="w-full bg-transparent border-none text-gray-900 font-semibold p-0 focus:ring-0 text-sm h-auto placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full pt-4 border-t border-gray-50 mt-2">
              <div className="flex gap-4">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-2xl bg-gray-50 flex-shrink-0 flex items-center justify-center text-gray-500">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Bio</label>
                  <textarea
                    className="w-full bg-gray-50/50 border border-gray-100 rounded-xl p-4 text-sm text-gray-700 resize-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all font-medium leading-relaxed"
                    rows="3"
                    placeholder="Tell us about yourself..."
                  ></textarea>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Resume/Download Section */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600">
              <FileText className="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-gray-900 truncate">resume-file.pdf</h4>
              <p className="text-xs text-gray-500 font-medium truncate">2.4 MB • Uploaded on Feb 2, 2024</p>
            </div>
          </div>
          <button className="w-full sm:w-auto bg-[#2D488F] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 whitespace-nowrap">
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      </div>

      {/* Right Column (Widgets) */}
      <div className="xl:col-span-4 space-y-6">

        {/* Career Status Widget Dropdown */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 relative z-10" ref={statusRef}>
          <h3 className="font-bold text-gray-900 mb-4 text-lg">Availability Status</h3>
          <div
            className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-all border border-gray-50 group"
            onClick={() => setStatusDropdownOpen(!statusDropdownOpen)}
          >
            <span className={`text-sm font-semibold transition-colors ${careerOptions.find(o => o.label === careerStatus)?.color || 'text-gray-700'
              }`}>
              {careerStatus}
            </span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${statusDropdownOpen ? 'rotate-180' : ''}`} />
          </div>

          {/* Dropdown Menu */}
          {statusDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              {careerOptions.map((option) => (
                <div
                  key={option.label}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => {
                    setCareerStatus(option.label);
                    setStatusDropdownOpen(false);
                  }}
                >
                  <div className={`p-1.5 rounded-lg bg-gray-50 ${option.color}`}>
                    <option.icon className="w-4 h-4" />
                  </div>
                  <span className={`text-sm font-medium ${option.label === careerStatus ? 'text-gray-900' : 'text-gray-600'}`}>
                    {option.label}
                  </span>
                  {option.label === careerStatus && <Check className="w-4 h-4 ml-auto text-blue-600" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Skills & Expertise Section - Moved to Right Column for visibility */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Skills & Expertise</h3>
            <button className="text-gray-400 hover:text-blue-600 transition-colors p-2 hover:bg-gray-50 rounded-lg">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {['React Native', 'System Design', 'JavaScript', 'Technical Leadership', 'Career Mentoring', 'Python', 'Cloud Architecture', 'Startups'].map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 bg-blue-50/50 hover:bg-blue-50 text-[#2D488F] px-3 py-2 rounded-xl text-xs font-bold border border-blue-100/50 hover:border-blue-200 transition-all duration-200 cursor-default"
              >
                <span>{skill}</span>
              </div>
            ))}
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-gray-500 border border-dashed border-gray-300 hover:border-[#2D488F] hover:text-[#2D488F] transition-all duration-200">
              <span>+ Add</span>
            </button>
          </div>
        </div>

        {/* Social presence widget */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-900 text-lg">Social Accounts</h3>
            <button className="text-blue-600 text-sm font-semibold hover:text-blue-700">Edit</button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl border border-gray-50 hover:border-blue-100 transition-all group">
              <div className="w-10 h-10 bg-[#0077B5] rounded-xl flex items-center justify-center text-white shadow-sm">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-bold text-gray-900 truncate">LinkedIn</p>
                <a href="#" className="text-xs text-gray-500 truncate block hover:text-blue-600 font-medium mt-0.5">linkedin.com/in/user</a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl border border-gray-50 hover:border-gray-200 transition-all group">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white shadow-sm">
                <LinkIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-bold text-gray-900 truncate">Portfolio</p>
                <a href="#" className="text-xs text-gray-500 truncate block hover:text-blue-600 font-medium mt-0.5">portfolio.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Personnel Information / Additional */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-6 text-lg">Additional Info</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">+1 (555) 000-0000</p>
                <p className="text-xs text-gray-500 font-medium">Phone Number</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-100 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">{user?.email}</p>
                <p className="text-xs text-gray-500 font-medium">Primary Email</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );

  const GeneralContent = () => (
    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-900 mb-4">General Settings</h3>
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
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">{activeTab}</h3>
            <p className="text-gray-600">{activeTab} settings content will be displayed here.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans">
      <Navigation />
      <Sidenav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} currentRoute="/dashboard/settings" />

      {/* Main Content - Dynamic Left Margin */}
      <div className={`pt-20 transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        <div className="px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
          <div className="w-full max-w-6xl">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Settings</h1>
                <p className="text-base text-gray-500 mt-2 font-medium">Manage your account settings and preferences.</p>
              </div>
            </div>

            {/* Layout Grid */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Settings Sidebar - Horizontal scroll on mobile */}
              <div className="w-full lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden lg:sticky lg:top-28">
                  <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible p-3 gap-1 custom-scrollbar">
                    {sidebarItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = activeTab === item.name;

                      return (
                        <button
                          key={item.name}
                          onClick={() => setActiveTab(item.name)}
                          className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 text-sm font-semibold whitespace-nowrap lg:whitespace-normal group flex-shrink-0 ${isActive
                            ? 'bg-[#2D488F]/5 text-[#2D488F]'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                          <IconComponent className={`w-5 h-5 flex-shrink-0 transition-colors ${isActive ? 'text-[#2D488F]' : 'text-gray-400 group-hover:text-gray-600'}`} />
                          <span>{item.name}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 min-w-0">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pb-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Settings2;