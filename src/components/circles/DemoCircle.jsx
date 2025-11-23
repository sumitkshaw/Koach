import { Share2, Flag, Bookmark, ThumbsUp, MessageCircle, Users, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import uxDesignImage from '../../assets/circle/r1.png'; // Replace with your image
import Footer from '../../components/Footer';

function DemoCircle() {
  const [isFollowing, setIsFollowing] = useState(false);

  const circleInfo = {
    name: "User Experience Design",
    category: "Product Designer",
    location: "Global",
    members: "2.5k",
    posts: "1.2k",
    description: "Every UX designer has a unique set of tools that power their process—from research to wireframing to prototyping and testing. Whether you rely on industry staples or niche gems, your toolkit says a lot about how you work.",
    coverImage: uxDesignImage,
    rules: [
      {
        number: 1,
        text: "Consectetur nunc purus nullam. Phasellus feugiat lectus pharetra ultrices."
      },
      {
        number: 2,
        text: "At donec nulla ut lorem in. Pulvinar feugiat lectus pharetra ultrices. Sodales porttitor mauris in euismod a mi commodo bibendum. Mauris at mauris euismod non elit."
      },
      {
        number: 3,
        text: "Et erat ipsum nunc mi lectus enim lectus odin. Laoreet pulvinar mauris euismod non elit."
      }
    ],
    recentPosts: [
      {
        id: 1,
        title: "What's in Your UX Toolkit Right Now?",
        author: "Sarah Johnson",
        role: "Product Designer @Google",
        preview: "Every UX designer has a unique set of tools that power their process—from research to wireframing to prototyping and testing. Whether you rely on industry staples or niche gems, your toolkit says a lot about how you work.",
        likes: 234,
        comments: 45,
        date: "2 days ago"
      },
      {
        id: 2,
        title: "What's in Your UX Toolkit Right Now?",
        author: "Mike Chen",
        role: "Product Designer @Google",
        preview: "Every UX designer has a unique set of tools that power their process—from research to wireframing to prototyping and testing. Whether you rely on industry staples or niche gems, your toolkit says a lot about how you work.",
        likes: 189,
        comments: 32,
        date: "3 days ago"
      }
    ],
    thoughts: [
      { id: 1, author: "John Doe", text: "Every UX designer has a unique set of tools that power their process.", color: "bg-blue-100" },
      { id: 2, author: "Jane Smith", text: "Every UX designer has a unique set of tools that power their process.", color: "bg-yellow-100" },
      { id: 3, author: "Alex Brown", text: "Every UX designer has a unique set of tools that power their process.", color: "bg-green-100" },
      { id: 4, author: "Emily White", text: "Every UX designer has a unique set of tools that power their process.", color: "bg-purple-100" },
      { id: 5, author: "Chris Black", text: "Every UX designer has a unique set of tools that power their process.", color: "bg-pink-100" }
    ]
  };

  const PostCard = ({ post }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        {/* Post Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
            <div>
              <h4 className="font-semibold text-[#2D488F] text-sm">{post.author}</h4>
              <p className="text-xs text-gray-500">{post.role}</p>
            </div>
          </div>
          <span className="text-xs text-gray-400">{post.date}</span>
        </div>

        {/* Post Title */}
        <h3 className="text-lg font-bold text-[#2D488F] mb-3">{post.title}</h3>

        {/* Post Preview */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.preview}</p>

        {/* Post Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-[#2D488F] transition-colors">
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-[#2D488F] transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{post.comments}</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bookmark className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Flag className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#efeff3]">
      {/* Back Button */}
      <div className="px-4 md:px-8 lg:px-20 xl:px-40 pt-6">
        <button className="flex items-center space-x-2 text-[#2D488F] hover:text-[#1e3260] transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Circles</span>
        </button>
      </div>

      {/* Hero Section with Cover Image and About */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-40 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            {/* Cover Image Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left - Image */}
              <div className="relative h-64 md:h-80 lg:h-96 bg-gray-200">
                <img 
                  src={circleInfo.coverImage} 
                  alt={circleInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right - About Section */}
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  About {circleInfo.name}
                </h2>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  {circleInfo.description}
                </p>
              </div>
            </div>

            {/* Circle Info Bar */}
            <div className="bg-[#2D488F] px-6 md:px-8 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{circleInfo.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{circleInfo.members} Members</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{circleInfo.posts} Posts</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{circleInfo.location}</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                      isFollowing
                        ? 'bg-white text-[#2D488F] hover:bg-gray-100'
                        : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                    }`}
                  >
                    {isFollowing ? 'Following' : 'Follow'}
                  </button>
                  <button className="px-6 py-2.5 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Rules Section */}
            <div className="bg-gradient-to-br from-yellow-300 to-yellow-400 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Rules about this Circle</h3>
              <ol className="space-y-4">
                {circleInfo.rules.map((rule) => (
                  <li key={rule.number} className="flex space-x-3">
                    <span className="font-bold text-gray-900 flex-shrink-0">{rule.number}.</span>
                    <p className="text-sm md:text-base text-gray-800">{rule.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-4 md:px-8 lg:px-20 xl:px-40 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Posts */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-[#2D488F]">Recent Posts</h2>
              {circleInfo.recentPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Right Column - Thoughts */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#2D488F] mb-4">See what others think about it</h3>
                <div className="space-y-3">
                  {circleInfo.thoughts.map((thought) => (
                    <div key={thought.id} className={`${thought.color} p-3 rounded-lg`}>
                      <p className="text-xs text-gray-700 mb-1 font-medium">{thought.author}</p>
                      <p className="text-sm text-gray-800">{thought.text}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-[#2D488F] font-semibold hover:bg-gray-50 rounded-lg transition-colors flex items-center justify-center space-x-1">
                  <span>Share your thoughts</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DemoCircle;