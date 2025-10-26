import { Users, Target, Award } from "lucide-react";

export function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">About HealthAI</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are pioneers in AI-powered healthcare technology, dedicated to revolutionizing 
            patient care through innovative solutions that bridge the gap between artificial 
            intelligence and medical expertise.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-3 text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              To democratize advanced healthcare through AI-powered solutions that enhance 
              diagnostic accuracy and improve patient outcomes globally.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-3 text-gray-900">Our Team</h3>
            <p className="text-gray-600">
              A diverse team of AI researchers, medical professionals, and engineers 
              working together to push the boundaries of healthcare technology.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-3 text-gray-900">Our Impact</h3>
            <p className="text-gray-600">
              Trusted by 500+ healthcare institutions worldwide, our solutions have 
              helped improve diagnostic accuracy by 40% and reduce analysis time by 60%.
            </p>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-gray-900 mb-1">500+</div>
              <div className="text-gray-600">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-gray-900 mb-1">1M+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div>
              <div className="text-gray-900 mb-1">95%</div>
              <div className="text-gray-600">Diagnostic Accuracy</div>
            </div>
            <div>
              <div className="text-gray-900 mb-1">24/7</div>
              <div className="text-gray-600">AI Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}