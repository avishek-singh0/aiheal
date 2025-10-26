export function RDPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">Research & Development</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our cutting-edge research initiatives and breakthrough innovations 
            in AI-powered healthcare technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Research Areas */}
          {[
            {
              title: "Neural Network Architecture",
              description: "Advancing deep learning models for medical image analysis and pattern recognition."
            },
            {
              title: "Predictive Analytics",
              description: "Developing algorithms to predict patient outcomes and optimize treatment plans."
            },
            {
              title: "Robotic Surgery Innovation",
              description: "Pioneering next-generation surgical robotics with enhanced precision and safety."
            }
          ].map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="mb-3 text-gray-900">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}