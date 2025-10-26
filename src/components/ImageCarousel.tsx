import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const images = [
  {
    url: "https://images.unsplash.com/photo-1631563020941-c0c6bc534b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neSUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzU5MzQxNTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Advanced Diagnostics",
    description: "AI-powered imaging analysis for faster, more accurate diagnoses"
  },
  {
    url: "https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmslMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1OTM0MTUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Neural Networks",
    description: "Deep learning algorithms that continuously improve patient outcomes"
  },
  {
    url: "https://images.unsplash.com/photo-1758691463203-cce9d415b2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaGVhbHRoJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkzNDE1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Digital Health",
    description: "Seamless integration of AI technology with healthcare workflows"
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative group">
      <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
        <ImageWithFallback
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        {/* Overlay with content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-xl mb-2">{images[currentIndex].title}</h3>
            <p className="text-sm text-gray-200">{images[currentIndex].description}</p>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white"
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white"
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}