import { Target, Eye, Heart, Award, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Quality',
      description: 'Uncompromising commitment to pharmaceutical quality and safety standards',
    },
    {
      icon: Heart,
      title: 'Trust',
      description: 'Building lasting relationships through reliability and transparency',
    },
    {
      icon: Users,
      title: 'Customer Commitment',
      description: 'Dedicated to meeting and exceeding partner expectations',
    },
    {
      icon: CheckCircle,
      title: 'Ethical Practices',
      description: 'Operating with integrity in all business dealings',
    },
  ];

  const milestones = [
    { year: '2009', title: 'Company Established', description: 'Cheminnova Life Sciences founded in Zirakpur, Punjab' },
    { year: '2012', title: 'WHO-GMP Certification', description: 'Achieved WHO-GMP certification for quality standards' },
    { year: '2015', title: 'Product Range Expansion', description: 'Expanded into multiple therapeutic segments' },
    { year: '2020', title: 'Distribution Network Growth', description: 'Established pan-India distribution partnerships' },
    { year: '2024', title: 'Market Leadership', description: 'Recognized as trusted pharmaceutical distributor' },
  ];

  const capabilities = [
    'DCGI-approved pharmaceutical formulations',
    'WHO-GMP certified quality systems',
    'Multi-therapeutic product portfolio',
    'Gynaecology medicines',
    'Orthopaedic formulations',
    'General healthcare products',
    'Tablets and capsules',
    'Injectable formulations',
    'Reliable supply chain management',
    'Quality control at every stage',
    'Timely product delivery',
    'Customer-centric approach',
  ];

  return (
    <>
      <SEO
        title="About Cheminnova Life Sciences | WHO-GMP Certified Pharmaceutical Company"
        description="Learn about Cheminnova Life Sciences, a trusted WHO-GMP certified pharmaceutical distributor established in 2009. Delivering quality DCGI-approved medicines across India."
        keywords="pharmaceutical company India, WHO-GMP certified pharma, DCGI approved medicines, pharmaceutical distributor Punjab, Cheminnova Life Sciences"
      />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cheminnova Life Sciences</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Trusted pharmaceutical distributor committed to delivering quality healthcare solutions since 2009
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cheminnova Life Sciences was incorporated in 2009 with a vision to become a trusted partner in pharmaceutical distribution. Based in Zirakpur, Punjab, India, we have grown into a multi-specialty healthcare pharmaceutical company serving the diverse needs of the healthcare industry.
                </p>
                <p>
                  As a WHO-GMP certified pharmaceutical organization, we strictly adhere to WHO-CGMP systems and quality standards in all our operations. Our commitment to quality has helped us build strong trust and reputation among our partners, distributors, and healthcare providers.
                </p>
                <p>
                  Over the years, we have expanded our product portfolio to include DCGI-approved pharmaceutical formulations across multiple therapeutic segments including gynaecology, orthopaedics, and general healthcare. We deal in tablets, injections, and various healthcare medicines, ensuring that each product meets the highest pharmaceutical standards.
                </p>
                <p>
                  Led by Mr. Rajesh Batra, our experienced team focuses strongly on quality control, reliable supply chains, and customer satisfaction. Every system and procedure is carefully designed to ensure that our products meet required pharmaceutical standards and specifications.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pharmaceutical Laboratory"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-blue-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver reliable and high-quality pharmaceutical products to healthcare partners across India, ensuring accessibility to essential medicines while maintaining the highest standards of quality and service excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-green-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a trusted pharmaceutical distribution partner recognized for our commitment to quality, innovation, and customer service, expanding our reach to serve healthcare needs across India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-blue-900" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Commitment</h3>
              <p className="text-gray-600 leading-relaxed">
                WHO-GMP certified operations ensuring every product meets international pharmaceutical standards. DCGI-approved formulations with rigorous quality control at every stage of the supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">Guiding principles that define who we are</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-blue-900" size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-blue-100">Key milestones in our growth story</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg">
                <div className="text-3xl font-bold mb-2 text-green-400">{milestone.year}</div>
                <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                <p className="text-sm text-blue-200">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive pharmaceutical solutions backed by expertise and certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Company Leadership
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Mr. Rajesh Batra</h3>
                <p className="text-xl text-blue-200">CEO & Proprietor</p>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed">
                Under the leadership of Mr. Rajesh Batra, Cheminnova Life Sciences has grown from a small pharmaceutical distributor to a trusted name in the industry. His vision, commitment to quality, and customer-centric approach have been instrumental in building lasting partnerships with healthcare providers across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <TrendingUp size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Business Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
              <div>
                <p className="text-blue-200 mb-1">Established</p>
                <p className="text-xl font-semibold">2009</p>
              </div>
              <div>
                <p className="text-blue-200 mb-1">Legal Status</p>
                <p className="text-xl font-semibold">Proprietorship</p>
              </div>
              <div>
                <p className="text-blue-200 mb-1">Annual Turnover</p>
                <p className="text-xl font-semibold">1-2 Crore INR</p>
              </div>
              <div>
                <p className="text-blue-200 mb-1">Banker</p>
                <p className="text-xl font-semibold">Punjab National Bank</p>
              </div>
              <div>
                <p className="text-blue-200 mb-1">Team Size</p>
                <p className="text-xl font-semibold">Up to 10 Employees</p>
              </div>
              <div>
                <p className="text-blue-200 mb-1">Location</p>
                <p className="text-xl font-semibold">Zirakpur, Punjab, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
