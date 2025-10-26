import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 'diagnostic-ai',
    title: 'AI Diagnostic Assistant',
    shortDescription: 'Advanced machine learning algorithms that analyze medical imaging with 95% accuracy, reducing diagnosis time by 60%.',
    fullDescription: 'Our AI Diagnostic Assistant leverages cutting-edge deep learning models trained on millions of medical images to provide rapid, accurate diagnoses. The system integrates seamlessly with existing hospital workflows and supports multiple imaging modalities including X-rays, MRIs, and CT scans. With real-time analysis capabilities and comprehensive reporting features, healthcare providers can make informed decisions faster than ever before.',
    image: 'https://images.unsplash.com/photo-1758202292826-c40e172eed1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1lZGljYWwlMjBoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTk3NTQ3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Real-time image analysis', 'Multi-modal support', 'HIPAA compliant', 'Integration ready']
  },
  {
    id: 'neural-monitoring',
    title: 'Neural Pattern Monitor',
    shortDescription: 'Real-time brain activity monitoring system using AI to detect anomalies and predict neurological events.',
    fullDescription: 'The Neural Pattern Monitor represents a breakthrough in neurological care, utilizing advanced neural networks to continuously analyze brain activity patterns. Our system can predict seizures up to 30 minutes before they occur and identify early signs of cognitive decline. The non-invasive monitoring technology provides 24/7 surveillance with minimal patient discomfort, revolutionizing preventive neurological care.',
    image: 'https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwQUklMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc1OTc1NDc2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Predictive analytics', 'Non-invasive monitoring', 'Real-time alerts', 'Cloud-based dashboard']
  },
  {
    id: 'robotic-surgeon',
    title: 'Precision Surgery Robot',
    shortDescription: 'AI-powered robotic surgical assistant with sub-millimeter precision for minimally invasive procedures.',
    fullDescription: 'Our Precision Surgery Robot combines artificial intelligence with advanced robotics to deliver unprecedented surgical accuracy. The system provides surgeons with enhanced visualization, tremor reduction, and intelligent guidance throughout complex procedures. With machine learning capabilities that adapt to individual surgeon preferences and patient anatomy, our robot reduces operation time by 40% while improving patient outcomes and recovery times.',
    image: 'https://images.unsplash.com/photo-1622831618046-b70167f5f426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGlhZ25vc3RpYyUyMEFJJTIwcm9ib3R8ZW58MXx8fHwxNzU5NzU0NzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Sub-millimeter precision', 'Adaptive learning', 'Minimally invasive', 'Surgeon collaboration']
  }
];

interface ProductCardProps {
  product: Product;
  isExpanded: boolean;
  onToggle: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isExpanded, onToggle }) => {
  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
      initial={false}
      animate={{
        height: isExpanded ? 'auto' : 'auto',
        transition: { duration: 0.4, ease: 'easeInOut' }
      }}
    >
      <div className="p-4 sm:p-6">
        {!isExpanded ? (
          // Collapsed View
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Product Image */}
            <div className="flex-shrink-0 w-full sm:w-32 h-48 sm:h-32 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100">
              <ImageWithFallback
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex-grow w-full">
              <h3 className="mb-2 text-gray-900">{product.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{product.shortDescription}</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="w-full sm:w-auto px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" />
                  Demo
                </button>
                <button
                  onClick={onToggle}
                  className="w-full sm:w-auto px-4 py-2 border border-cyan-200 text-cyan-700 rounded-full hover:bg-cyan-50 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  View More
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Expanded View
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-gray-900">{product.title}</h3>
              <button
                onClick={onToggle}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 rotate-180 text-gray-500" />
              </button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Large Product Image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-cyan-50 to-teal-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Detailed Description */}
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{product.fullDescription}</p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Demo Button */}
                <div className="pt-4 sm:pt-6">
                  <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-full hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                    <Play className="w-5 h-5" />
                    Launch Demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export const ProductSection: React.FC = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const toggleProduct = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-gray-900 px-4">Our AI Healthcare Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto px-4">
            Discover our cutting-edge AI-powered healthcare products designed to revolutionize 
            patient care and medical diagnostics.
          </p>
        </div>

        {/* Product Cards */}
        <div className="space-y-4 sm:space-y-6">
          <AnimatePresence>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isExpanded={expandedProduct === product.id}
                onToggle={() => toggleProduct(product.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};