import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                AI-Powered Healthcare Innovation
              </div>
              <h1 className="text-5xl lg:text-6xl leading-tight text-gray-900">
                Revolutionizing
                <span className="text-primary block">Healthcare</span>
                with AI
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Advanced artificial intelligence technology that transforms patient care, 
                accelerates diagnosis, and empowers healthcare professionals with 
                intelligent insights for better outcomes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:border-primary hover:text-primary transition-all duration-200 flex items-center justify-center group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl text-primary">500K+</div>
                <div className="text-sm text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">95%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-primary">24/7</div>
                <div className="text-sm text-gray-600">AI Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right side - Video/Image placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-cyan-200/30 p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGhlYWx0aGNhcmUlMjB0ZWNobm9sb2d5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTkzNDE0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Healthcare Technology"
                className="w-full h-80 object-cover rounded-xl"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-lg hover:scale-110 transition-all duration-200 group">
                  <Play className="h-8 w-8 text-primary ml-1" />
                </button>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700">Live AI Analysis</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <div className="text-sm text-gray-700">Neural Network Active</div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-200/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}