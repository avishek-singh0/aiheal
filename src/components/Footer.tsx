import { Heart, Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Product", href: "#product" },
    { name: "Research", href: "#research" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "HIPAA Compliance", href: "#hipaa" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Heart className="h-8 w-8 text-primary" />
                <Brain className="h-4 w-4 text-primary absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-semibold text-gray-900">HealthAI</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Revolutionizing healthcare through advanced AI technology, 
              empowering medical professionals with intelligent insights 
              for better patient outcomes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-gray-900">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-gray-900">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-gray-600 text-sm">contact@healthai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-gray-600 text-sm">
                  123 Innovation Drive<br />
                  San Francisco, CA 94105
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h5 className="text-gray-900 text-sm mb-2">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r-lg text-sm hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2024 HealthAI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>SOC 2 Compliant</span>
              <span>•</span>
              <span>HIPAA Certified</span>
              <span>•</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}