import { Building2, Shield, Award, Users } from "lucide-react";

const partners = [
  {
    name: "MedTech Solutions",
    description: "Leading medical device manufacturer",
    icon: Building2,
    category: "Technology"
  },
  {
    name: "HealthGuard Insurance",
    description: "Comprehensive healthcare coverage",
    icon: Shield,
    category: "Insurance"
  },
  {
    name: "Medical Excellence Award",
    description: "2024 Healthcare Innovation",
    icon: Award,
    category: "Recognition"
  },
  {
    name: "Global Health Network",
    description: "International healthcare alliance",
    icon: Users,
    category: "Partnership"
  },
  {
    name: "Research Institute",
    description: "Advanced medical research",
    icon: Building2,
    category: "Research"
  },
  {
    name: "Digital Health Partners",
    description: "Healthcare technology leaders",
    icon: Building2,
    category: "Technology"
  }
];

export function PartnersList() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl text-gray-900 mb-2">Trusted Collaborations</h3>
        <p className="text-gray-600">Working with industry leaders to advance healthcare AI</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {partners.map((partner, index) => {
          const IconComponent = partner.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group hover:border-primary/20"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-gray-900 group-hover:text-primary transition-colors duration-200">
                      {partner.name}
                    </h4>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-primary/5 to-cyan-50 p-6 rounded-xl mt-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl text-primary mb-1">50+</div>
            <div className="text-sm text-gray-600">Partners</div>
          </div>
          <div>
            <div className="text-2xl text-primary mb-1">25</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-2xl text-primary mb-1">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
        </div>
      </div>
    </div>
  );
}