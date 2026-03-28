import { Link } from 'react-router-dom';
import { Shield, Award, TrendingUp, Users, Package, CheckCircle, Clock, Headphones, Globe, FileCheck } from 'lucide-react';
import { SEO } from '../components/SEO';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'WHO-GMP Certified Supply Chain',
      description: 'Our entire supply chain operates under WHO-GMP certification, ensuring quality at every stage from procurement to delivery. Every product undergoes rigorous quality checks before reaching our partners.',
    },
    {
      icon: Award,
      title: 'DCGI Approved Product Range',
      description: 'All our pharmaceutical products are DCGI-approved, meeting the highest regulatory standards in India. We only deal in certified, safe, and effective medicines.',
    },
    {
      icon: TrendingUp,
      title: 'Reliable Pharmaceutical Distribution',
      description: 'With 14+ years of experience, we have established robust distribution networks ensuring timely delivery and consistent supply. Our partners can count on us for uninterrupted pharmaceutical supplies.',
    },
    {
      icon: Users,
      title: 'Customized Solutions for Healthcare Partners',
      description: 'We understand that each healthcare partner has unique needs. We offer tailored solutions, flexible ordering, and personalized support to meet specific requirements.',
    },
    {
      icon: Package,
      title: 'Wide Product Range',
      description: 'From tablets and injections to specialized formulations across gynaecology, orthopaedics, and general healthcare, we offer a comprehensive product portfolio to serve diverse healthcare needs.',
    },
    {
      icon: CheckCircle,
      title: 'Experienced Pharmaceutical Expertise',
      description: 'Our team brings years of pharmaceutical industry experience, providing expert guidance on product selection, regulatory compliance, and market trends.',
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Efficient logistics ensuring products reach you on schedule',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: 'Responsive customer service team available to assist you',
    },
    {
      icon: Globe,
      title: 'Pan-India Presence',
      description: 'Extensive distribution network across India',
    },
    {
      icon: FileCheck,
      title: 'Complete Documentation',
      description: 'All necessary certificates and documentation provided',
    },
  ];

  const clientTypes = [
    {
      title: 'Pharmaceutical Distributors',
      description: 'Partner with us for reliable wholesale pharmaceutical supplies with competitive pricing and flexible terms.',
    },
    {
      title: 'Hospital & Healthcare Facilities',
      description: 'Ensure uninterrupted supply of quality medicines for your patients with our dependable healthcare solutions.',
    },
    {
      title: 'Pharmacy Chains',
      description: 'Stock your shelves with DCGI-approved products from a trusted pharmaceutical distributor.',
    },
    {
      title: 'Medical Wholesalers',
      description: 'Expand your product portfolio with our comprehensive range of pharmaceutical formulations.',
    },
  ];

  return (
    <>
      <SEO
        title="Why Choose Cheminnova Life Sciences | WHO-GMP Certified Pharmaceutical Distributor"
        description="Discover why healthcare partners trust Cheminnova Life Sciences for pharmaceutical distribution. WHO-GMP certified, DCGI approved products, 14+ years experience, reliable supply chain."
        keywords="pharmaceutical distributor advantages, WHO-GMP certified supplier, reliable pharma distribution, DCGI approved medicines supplier, trusted pharmaceutical company"
      />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Cheminnova Life Sciences</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your trusted partner for quality pharmaceutical distribution with proven reliability and excellence
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining quality, reliability, and expertise to serve your pharmaceutical needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Benefits
            </h2>
            <p className="text-xl text-blue-100">
              More reasons to partner with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-blue-200">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality is not just a promise, it's our foundation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3825463/pexels-photo-3825463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pharmaceutical Quality Control"
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Stringent Quality Control
                  </h3>
                  <p className="text-gray-600">
                    Every product undergoes multiple quality checks ensuring it meets pharmaceutical standards before reaching our partners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-600">
                    Full compliance with WHO-GMP standards and DCGI regulations, ensuring all products are safe and effective.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Proper Storage & Handling
                  </h3>
                  <p className="text-gray-600">
                    Temperature-controlled storage facilities and careful handling procedures maintain product integrity throughout the supply chain.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Traceability
                  </h3>
                  <p className="text-gray-600">
                    Complete batch tracking and documentation ensuring full traceability from manufacturer to end user.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by diverse healthcare partners across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{client.title}</h3>
                <p className="text-gray-600 leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of satisfied healthcare partners who trust Cheminnova Life Sciences for their pharmaceutical needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/distributor"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Become a Distributor
            </Link>
            <Link
              to="/contact"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
