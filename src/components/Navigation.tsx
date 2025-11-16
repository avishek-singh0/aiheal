import { useState } from "react";
import { Heart, Brain, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "R&D", path: "/rd" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" }
  ];

  const handlePageChange = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => handlePageChange("/")}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="relative">
                <Heart className="h-8 w-8 text-primary" />
                <Brain className="h-4 w-4 text-primary absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-semibold text-foreground">HealthAI</span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handlePageChange(item.path)}
                  className={`transition-colors duration-200 relative group ${
                    location.pathname === item.path
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                    location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              {/* CTA Button */}
              <button className="hidden sm:block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-sm">
                Get Started
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-64 bg-white shadow-xl z-40 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Navigation Links */}
                <div className="flex-1 py-6 px-4 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handlePageChange(item.path)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        location.pathname === item.path
                          ? "bg-gradient-to-r from-cyan-50 to-teal-50 text-primary"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* CTA Button in Mobile Menu */}
                <div className="p-4 border-t border-gray-100">
                  <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-sm">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}