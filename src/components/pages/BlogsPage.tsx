import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Brain, 
  Heart, 
  Activity, 
  Clock, 
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Medical Diagnostics",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we diagnose and treat diseases with unprecedented accuracy.",
    fullContent: `Artificial Intelligence is transforming medical diagnostics in ways we never imagined possible. With advanced machine learning algorithms analyzing millions of medical images and patient records, AI systems can now detect diseases earlier and more accurately than ever before.

Recent studies show that AI-powered diagnostic tools can identify conditions like cancer, heart disease, and neurological disorders with accuracy rates exceeding 95%. This breakthrough technology is not replacing doctors but empowering them with powerful tools to make better-informed decisions.

The integration of AI in healthcare facilities has led to a 60% reduction in diagnosis time and a 40% improvement in treatment outcomes. As we continue to develop more sophisticated algorithms and gather more comprehensive datasets, the future of medical diagnostics looks brighter than ever.

Our team at HealthAI is at the forefront of this revolution, developing cutting-edge diagnostic tools that are accessible, accurate, and affordable for healthcare providers worldwide.`,
    author: "Dr. Sarah Chen",
    authorTitle: "Chief Medical Officer",
    date: "October 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGhlYWx0aGNhcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDM3OTczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "AI Technology",
    tags: ["AI", "Diagnostics", "Machine Learning"],
    featured: true
  },
  {
    id: "2",
    title: "Neural Networks in Surgical Precision",
    excerpt: "How machine learning algorithms are enhancing surgical outcomes and reducing recovery times through intelligent assistance.",
    fullContent: `The operating room of the future is here, and it's powered by artificial intelligence. Neural networks are revolutionizing surgical procedures by providing real-time guidance, predictive analytics, and unprecedented precision.

Surgeons using AI-assisted robotic systems report a 40% reduction in operation time and significantly improved patient outcomes. These intelligent systems can predict potential complications before they occur, allowing medical teams to take preventive measures.

The technology analyzes thousands of previous surgical procedures to identify the most effective techniques for specific patient conditions. It adapts to individual surgeon preferences while maintaining optimal safety standards.

As we continue to refine these systems, we're seeing a future where complex surgeries become safer, faster, and more accessible to patients worldwide.`,
    author: "Dr. Michael Rodriguez",
    authorTitle: "Director of Surgical Innovation",
    date: "October 8, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2MDM3OTczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Surgery",
    tags: ["Neural Networks", "Surgery", "Robotics"],
    featured: true
  },
  {
    id: "3",
    title: "Predictive Healthcare: Early Detection Systems",
    excerpt: "Leveraging AI to predict health complications before they become critical medical emergencies, saving lives through prevention.",
    fullContent: `Prevention is always better than cure, and AI is making preventive healthcare more effective than ever. Our early detection systems use advanced predictive analytics to identify health risks before they become serious problems.

By analyzing patient data including vital signs, medical history, lifestyle factors, and genetic information, our AI systems can predict potential health issues with remarkable accuracy. This allows healthcare providers to implement preventive measures and lifestyle interventions early.

Studies show that early intervention based on AI predictions can reduce hospital admissions by 35% and improve long-term health outcomes significantly. Patients with chronic conditions benefit especially from continuous monitoring and predictive alerts.

The future of healthcare is proactive rather than reactive, and AI is making this vision a reality for millions of patients worldwide.`,
    author: "Dr. Emily Watson",
    authorTitle: "Head of Preventive Medicine",
    date: "October 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1758691462668-046fd85ceac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGlnaXRhbCUyMGlubm92YXRpb258ZW58MXx8fHwxNzYwMzUxNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Preventive Care",
    tags: ["Prediction", "Prevention", "Analytics"],
    featured: true
  },
  {
    id: "4",
    title: "Machine Learning in Drug Discovery",
    excerpt: "Accelerating pharmaceutical research and development through AI-powered molecular analysis and prediction.",
    fullContent: `The traditional drug discovery process can take over a decade and cost billions of dollars. AI is changing this paradigm by accelerating research and reducing costs dramatically.

Machine learning algorithms can analyze millions of molecular compounds in days, identifying promising drug candidates that would take years to discover through traditional methods. This technology is particularly valuable in developing treatments for rare diseases and personalized medicine.

Our AI systems have already contributed to the discovery of several breakthrough treatments, cutting development time by up to 70%. The potential to bring life-saving medications to market faster is transforming the pharmaceutical industry.`,
    author: "Dr. James Lee",
    authorTitle: "Pharmaceutical AI Research Lead",
    date: "October 3, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1760074032551-fef8992ca72d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVzZWFyY2glMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2MDMyMDY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Research",
    tags: ["Drug Discovery", "Research", "AI"],
  },
  {
    id: "5",
    title: "Telemedicine Enhanced by AI Assistants",
    excerpt: "How intelligent virtual health assistants are making remote healthcare more effective and accessible for everyone.",
    fullContent: `Telemedicine has grown exponentially, and AI is making it even more powerful. Virtual health assistants powered by advanced AI can triage patients, provide preliminary assessments, and even monitor chronic conditions remotely.

These AI assistants use natural language processing to understand patient symptoms and concerns, providing accurate guidance and determining when professional medical attention is needed. The technology is particularly valuable in underserved areas with limited access to healthcare facilities.

Our AI-powered telemedicine platform has served over 1 million patients, reducing wait times by 80% and improving access to healthcare for remote communities. The future of healthcare delivery is digital, intelligent, and accessible to all.`,
    author: "Dr. Priya Patel",
    authorTitle: "Telemedicine Innovation Director",
    date: "October 1, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1642975967602-653d378f3b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwMzc5NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Telemedicine",
    tags: ["Telemedicine", "Virtual Care", "Accessibility"],
  },
  {
    id: "6",
    title: "Data Privacy in AI Healthcare Solutions",
    excerpt: "Ensuring patient data security and privacy while leveraging AI for better healthcare outcomes through advanced encryption.",
    fullContent: `As AI becomes more prevalent in healthcare, data privacy and security are paramount concerns. We're implementing cutting-edge encryption and privacy-preserving technologies to protect patient information.

Our systems use federated learning, allowing AI models to learn from data without actually accessing sensitive patient information. Blockchain technology ensures transparent and secure data transactions.

With HIPAA compliance and advanced security measures, we're proving that AI-powered healthcare can be both innovative and secure. Protecting patient privacy is not just a legal requirement—it's a moral imperative.`,
    author: "Dr. Robert Kim",
    authorTitle: "Chief Security Officer",
    date: "September 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGF0YSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjAzNTkxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Security",
    tags: ["Privacy", "Security", "Data Protection"],
  }
];

const categories = ["All", "AI Technology", "Surgery", "Preventive Care", "Research", "Telemedicine", "Security"];
const popularPosts = blogPosts.slice(0, 3);

export function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Technology": return <Brain className="w-4 h-4" />;
      case "Surgery": return <Activity className="w-4 h-4" />;
      case "Preventive Care": return <Heart className="w-4 h-4" />;
      default: return <Tag className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <AnimatePresence mode="wait">
        {selectedBlog ? (
          // Detailed Blog View
          <motion.div
            key="blog-detail"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="py-8 sm:py-12"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Back Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="mb-6 flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to Blogs
              </button>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Featured Image */}
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100">
                    <ImageWithFallback
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Blog Content */}
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-700 hover:from-cyan-200 hover:to-teal-200 flex items-center gap-1">
                        {getCategoryIcon(selectedBlog.category)}
                        {selectedBlog.category}
                      </Badge>
                      <span className="text-gray-500">{selectedBlog.readTime}</span>
                    </div>

                    {/* Title */}
                    <h1 className="mb-6 text-gray-900">{selectedBlog.title}</h1>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-200">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-900">{selectedBlog.author}</p>
                        <p className="text-gray-500">{selectedBlog.authorTitle}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedBlog.date}</span>
                      </div>
                    </div>

                    {/* Full Content */}
                    <div className="prose prose-lg max-w-none">
                      {selectedBlog.fullContent.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {selectedBlog.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="border-cyan-200 text-cyan-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Related Posts */}
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
                    <h3 className="mb-6 text-gray-900">Related Articles</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {blogPosts.filter(post => post.id !== selectedBlog.id && post.category === selectedBlog.category).slice(0, 2).map((post) => (
                        <button
                          key={post.id}
                          onClick={() => setSelectedBlog(post)}
                          className="group bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-200 text-left"
                        >
                          <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3 bg-gradient-to-br from-cyan-50 to-teal-100">
                            <ImageWithFallback
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">{post.title}</h4>
                          <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subscribe CTA */}
                  <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl p-6 sm:p-8 text-white shadow-lg">
                    <h3 className="mb-2 text-white">Stay Updated</h3>
                    <p className="mb-4 text-cyan-50">Subscribe to our newsletter for the latest insights in AI healthcare.</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/20 border-white/30 text-white placeholder:text-cyan-100 flex-grow"
                      />
                      <button className="bg-white text-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-50 transition-colors duration-200 whitespace-nowrap">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sticky Sidebar */}
                <div className="lg:sticky lg:top-20 space-y-6 h-fit">
                  {/* Share */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="mb-4 text-gray-900 flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share Article
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center gap-2 p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                        <Facebook className="w-5 h-5" />
                        <span className="hidden xl:inline">Facebook</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 p-3 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors">
                        <Twitter className="w-5 h-5" />
                        <span className="hidden xl:inline">Twitter</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                        <Linkedin className="w-5 h-5" />
                        <span className="hidden xl:inline">LinkedIn</span>
                      </button>
                      <button className="flex items-center justify-center gap-2 p-3 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                        <Mail className="w-5 h-5" />
                        <span className="hidden xl:inline">Email</span>
                      </button>
                    </div>
                  </div>

                  {/* Popular Posts */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="mb-4 text-gray-900">Popular Posts</h4>
                    <div className="space-y-4">
                      {popularPosts.map((post) => (
                        <button
                          key={post.id}
                          onClick={() => setSelectedBlog(post)}
                          className="group w-full text-left flex gap-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100 flex-shrink-0">
                            <ImageWithFallback
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <p className="text-gray-900 line-clamp-2 mb-1 group-hover:text-cyan-600 transition-colors">
                              {post.title}
                            </p>
                            <p className="text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="mb-4 text-gray-900">Categories</h4>
                    <div className="space-y-2">
                      {categories.filter(cat => cat !== "All").map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedBlog(null)}
                          className="w-full text-left px-4 py-2 rounded-lg hover:bg-cyan-50 hover:text-cyan-700 transition-colors text-gray-600 flex items-center gap-2"
                        >
                          {getCategoryIcon(category)}
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          // Blog List View
          <motion.div
            key="blog-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="py-8 sm:py-12 lg:py-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Hero Section */}
              <div className="text-center mb-12 sm:mb-16">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="mb-4 text-gray-900">Insights on AI in Healthcare</h1>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Discover the latest breakthroughs, research, and innovations in AI-powered healthcare. 
                    Stay informed with expert insights from our team of medical professionals and AI researchers.
                  </p>
                </motion.div>
              </div>

              {/* Blog Grid Section */}
              <div>
                <h2 className="mb-6 sm:mb-8 text-gray-900">All Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {blogPosts.map((post, index) => (
                      <motion.button
                        key={post.id}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => setSelectedBlog(post)}
                        className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2 text-left"
                      >
                        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <Badge variant="outline" className="mb-3 border-cyan-200 text-cyan-700 flex items-center gap-1 w-fit">
                            {getCategoryIcon(post.category)}
                            {post.category}
                          </Badge>
                          <h3 className="mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-gray-500 mb-4">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span className="truncate">{post.author}</span>
                            </div>
                            <span className="flex items-center gap-1 flex-shrink-0">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-cyan-600 group-hover:gap-3 transition-all">
                            Read Article
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </motion.button>
                    ))}
                </div>
              </div>

              {/* Newsletter Subscription */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-16 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl p-8 sm:p-12 text-white shadow-xl"
              >
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="mb-4 text-white">Never Miss an Update</h2>
                    <p className="mb-8 text-cyan-50">
                      Subscribe to our newsletter and get the latest AI healthcare insights delivered directly to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-white/20 border-white/30 text-white placeholder:text-cyan-100 flex-grow py-6"
                      />
                      <button className="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-cyan-50 transition-colors duration-200 shadow-lg whitespace-nowrap">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
