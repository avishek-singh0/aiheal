import { ImageCarousel } from './ImageCarousel';
import { PartnersList } from './PartnersList';

export function MiddleSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Image Carousel */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl text-gray-900 mb-4">
                Cutting-Edge AI Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Explore our advanced AI technologies that are transforming healthcare 
                delivery and improving patient outcomes worldwide.
              </p>
            </div>
            <ImageCarousel />
          </div>

          {/* Right side - Partners List */}
          <div>
            <PartnersList />
          </div>
        </div>
      </div>
    </section>
  );
}