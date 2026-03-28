import { Link } from 'react-router-dom';
import { Shield, Award, Users, TrendingUp, Package, FileCheck, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { FAQ } from '../components/FAQ';

export function Home() {
  const features = [
    {
      icon: Shield,
      title: 'WHO-GMP Certified',
      description: 'Quality assured pharmaceutical products meeting international standards',
    },
    {
      icon: Award,
      title: 'DCGI Approved',
      description: 'All products approved by Drug Controller General of India',
    },
    {
      icon: Users,
      title: '14+ Years Experience',
      description: 'Trusted pharmaceutical distribution since 2009',
    },
    {
      icon: TrendingUp,
      title: 'Wide Distribution Network',
      description: 'Serving distributors, hospitals, and pharmacies across India',
    },
  ];

  const productCategories = [
    {
      title: 'Pharmaceutical Tablets',
      description: 'High-quality DCGI-approved tablets for various therapeutic segments',
      image: 'https://images.pexels.com/photos/3683052/pexels-photo-3683052.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Pharmaceutical Injections',
      description: 'Sterile injectable formulations manufactured under strict quality control',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Healthcare Medicines',
      description: 'Comprehensive range of medicines for gynaecology, orthopaedics, and general healthcare',
      image: 'https://images.pexels.com/photos/5910971/pexels-photo-5910971.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <>
      <SEO
        title="Cheminnova Life Sciences | Trusted Pharmaceutical Supplier & Distributor in India"
        description="Leading pharmaceutical distributor in India supplying DCGI-approved tablets, injections, and healthcare medicines. WHO-GMP certified with 14+ years of experience."
        keywords="pharmaceutical distributor India, pharma injection supplier, pharmaceutical tablets supplier, DCGI approved medicines, pharma wholesale supplier, pharmaceutical trading company"
      />

      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3825463/pexels-photo-3825463.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Pharmaceutical Laboratory"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trusted Pharmaceutical Supplier & Distributor in India
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Cheminnova Life Sciences delivers high-quality DCGI-approved pharmaceutical products including tablets, injections, and healthcare medicines to distributors, pharmacies, and healthcare providers across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-center"
              >
                Send Inquiry
              </Link>
              <Link
                to="/distributor"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition text-center"
              >
                Become a Distributor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive pharmaceutical solutions for diverse healthcare needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link
                    to="/products"
                    className="text-blue-900 font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Explore Products <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              View Complete Product Catalogue
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Cheminnova Life Sciences
              </h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                Established in 2009, Cheminnova Life Sciences is a trusted multi-specialty pharmaceutical company based in Zirakpur, Punjab, India.
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                We are a WHO-GMP certified organization committed to delivering high-quality pharmaceutical products across therapeutic segments including gynaecology, orthopaedics, and general healthcare.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-800 p-6 rounded-lg">
                <Package size={40} className="mb-4" />
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-blue-200">Products</div>
              </div>
              <div className="bg-blue-800 p-6 rounded-lg">
                <Users size={40} className="mb-4" />
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Partners</div>
              </div>
              <div className="bg-blue-800 p-6 rounded-lg">
                <Award size={40} className="mb-4" />
                <div className="text-3xl font-bold mb-2">14+</div>
                <div className="text-blue-200">Years</div>
              </div>
              <div className="bg-blue-800 p-6 rounded-lg">
                <FileCheck size={40} className="mb-4" />
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-200">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Partner with Cheminnova Life Sciences
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our growing network of distributors, wholesalers, and healthcare partners. Access high-quality pharmaceutical products with reliable supply chain and competitive pricing.
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
              Request Catalogue
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
