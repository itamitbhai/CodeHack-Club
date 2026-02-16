import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  Search, 
  Filter,
  ArrowRight,
  TrendingUp,
  Code,
  Lightbulb,
  Rocket,
  BookOpen,
  Heart,
  MessageCircle,
  Share2,
  Eye
} from "lucide-react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { name: "All", icon: <BookOpen size={16} />, count: 24 },
    { name: "Web Dev", icon: <Code size={16} />, count: 8 },
    { name: "AI/ML", icon: <Lightbulb size={16} />, count: 6 },
    { name: "Projects", icon: <Rocket size={16} />, count: 5 },
    { name: "Tutorials", icon: <BookOpen size={16} />, count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Building a Real-time Chat App with React & Firebase",
      excerpt: "Learn how to create a fully functional real-time chat application using React, Firebase, and modern web technologies.",
      author: "Rahul Sharma",
      date: "Feb 10, 2026",
      readTime: "8 min read",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      tags: ["React", "Firebase", "Real-time"],
      likes: 234,
      comments: 45,
      views: "2.3k",
      featured: true
    },
    {
      id: 2,
      title: "Introduction to Machine Learning with Python",
      excerpt: "A beginner-friendly guide to understanding machine learning concepts and implementing your first ML model.",
      author: "Priya Singh",
      date: "Feb 8, 2026",
      readTime: "12 min read",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      tags: ["Python", "ML", "AI"],
      likes: 456,
      comments: 67,
      views: "4.1k",
      featured: true
    },
    {
      id: 3,
      title: "10 JavaScript Tips Every Developer Should Know",
      excerpt: "Boost your JavaScript skills with these essential tips and tricks that will make you a more efficient developer.",
      author: "Amit Kumar",
      date: "Feb 5, 2026",
      readTime: "6 min read",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop",
      tags: ["JavaScript", "Tips", "Web Dev"],
      likes: 189,
      comments: 23,
      views: "1.8k",
      featured: false
    },
    {
      id: 4,
      title: "Creating Stunning UI Animations with Framer Motion",
      excerpt: "Master the art of creating smooth, professional animations in React using Framer Motion library.",
      author: "Sneha Patel",
      date: "Feb 3, 2026",
      readTime: "10 min read",
      category: "Tutorials",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=400&fit=crop",
      tags: ["React", "Animation", "UI/UX"],
      likes: 312,
      comments: 34,
      views: "2.7k",
      featured: false
    },
    {
      id: 5,
      title: "Building a Weather App: Complete Project Guide",
      excerpt: "Step-by-step tutorial on building a beautiful weather application with API integration and dynamic UI.",
      author: "Vikram Reddy",
      date: "Jan 30, 2026",
      readTime: "15 min read",
      category: "Projects",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=400&fit=crop",
      tags: ["API", "Project", "JavaScript"],
      likes: 278,
      comments: 41,
      views: "3.2k",
      featured: false
    },
    {
      id: 6,
      title: "Understanding Neural Networks from Scratch",
      excerpt: "Deep dive into how neural networks work, with practical examples and code implementations.",
      author: "Anjali Mehta",
      date: "Jan 28, 2026",
      readTime: "20 min read",
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      tags: ["Neural Networks", "Deep Learning", "Python"],
      likes: 523,
      comments: 89,
      views: "5.6k",
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 w-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Tech Insights & Tutorials</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Our
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Tech Blog
                </span>
              </h1>
              
              <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
                Discover tutorials, project guides, and tech insights from our coding community.
                Learn, build, and grow with us.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-emerald-400 text-sm font-medium">{post.category}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded-lg">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-purple-500 flex items-center justify-center">
                          <User size={14} className="text-white" />
                        </div>
                        <span className="text-sm text-gray-400">{post.author}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Filter by Category</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/50"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === category.name ? "bg-white/20" : "bg-white/10"
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* All Blog Posts */}
        <section className="py-12 px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === "All" ? "All Articles" : selectedCategory}
              </h2>
              <span className="text-gray-400">{filteredPosts.length} articles</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <Tag className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-medium">{post.category}</span>
                      <span className="text-gray-600">•</span>
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-sm">
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex items-center gap-1">
                          <Heart size={14} />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle size={14} />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={14} />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-500 text-xs">{post.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/20 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header Image */}
              <div className="relative h-72">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 -mt-20 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    {selectedPost.category}
                  </span>
                  <span className="text-gray-400">{selectedPost.readTime}</span>
                </div>

                <h2 className="text-4xl font-black text-white mb-4">
                  {selectedPost.title}
                </h2>

                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-purple-500 flex items-center justify-center">
                      <User size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{selectedPost.author}</div>
                      <div className="text-gray-400 text-sm">{selectedPost.date}</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedPost.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map((tag, i) => (
                    <span key={i} className="bg-white/5 text-emerald-400 px-3 py-1 rounded-lg text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors">
                    <Heart size={20} />
                    <span>{selectedPost.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                    <MessageCircle size={20} />
                    <span>{selectedPost.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <Share2 size={20} />
                    <span>Share</span>
                  </button>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-full mt-6 bg-white/5 hover:bg-white/10 text-white font-medium py-3 rounded-xl transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;