import { Link } from 'react-router-dom';
import { Pill, Syringe, Heart, Bone, Stethoscope, Package } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Products() {
  const productCategories = [
    {
      id: 'tablets',
      icon: Pill,
      title: 'Pharmaceutical Tablets',
      description: 'High-quality DCGI-approved tablets across multiple therapeutic segments',
      image: 'https://images.pexels.com/photos/3683052/pexels-photo-3683052.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: [
        { name: 'Antibiotic Tablets', dosage: 'Various strengths', category: 'General Healthcare' },
        { name: 'Pain Relief Tablets', dosage: 'Multiple formulations', category: 'General Healthcare' },
        { name: 'Vitamin Supplements', dosage: 'Various combinations', category: 'Healthcare' },
        { name: 'Calcium Tablets', dosage: 'Multiple strengths', category: 'Orthopaedics' },
      ],
    },
    {
      id: 'injections',
      icon: Syringe,
      title: 'Pharmaceutical Injections',
      description: 'Sterile injectable formulations manufactured under strict quality control',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: [
        { name: 'Antibiotic Injections', dosage: 'Various strengths', category: 'General Healthcare' },
        { name: 'Vitamin B12 Injection', dosage: 'Multiple formulations', category: 'Healthcare' },
        { name: 'Pain Relief Injections', dosage: 'Various strengths', category: 'Orthopaedics' },
        { name: 'Hormonal Injections', dosage: 'Multiple strengths', category: 'Gynaecology' },
      ],
    },
    {
      id: 'gynaecology',
      icon: Heart,
      title: 'Gynaecology Medicines',
      description: 'Specialized formulations for women\'s healthcare needs',
      image: 'https://images.pexels.com/photos/5910971/pexels-photo-5910971.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: [
        { name: 'Hormonal Preparations', dosage: 'Various formulations', category: 'Gynaecology' },
        { name: 'Contraceptive Pills', dosage: 'Standard dosage', category: 'Gynaecology' },
        { name: 'Iron Supplements', dosage: 'Multiple strengths', category: 'Gynaecology' },
        { name: 'Calcium Supplements', dosage: 'Various combinations', category: 'Gynaecology' },
      ],
    },
    {
      id: 'orthopaedics',
      icon: Bone,
      title: 'Orthopaedic Formulations',
      description: 'Comprehensive range for bone and joint health',
      image: 'https://images.pexels.com/photos/5473174/pexels-photo-5473174.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: [
        { name: 'Joint Care Tablets', dosage: 'Various strengths', category: 'Orthopaedics' },
        { name: 'Calcium & Vitamin D3', dosage: 'Multiple combinations', category: 'Orthopaedics' },
        { name: 'Pain Relief Formulations', dosage: 'Various strengths', category: 'Orthopaedics' },
        { name: 'Bone Health Supplements', dosage: 'Multiple formulations', category: 'Orthopaedics' },
      ],
    },
    {
      id: 'general-healthcare',
      icon: Stethoscope,
      title: 'General Healthcare Medicines',
      description: 'Essential medicines for common healthcare needs',
      image: 'https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: [
        { name: 'Cough & Cold Medicines', dosage: 'Various formulations', category: 'General Healthcare' },
        { name: 'Digestive Health', dosage: 'Multiple strengths', category: 'General Healthcare' },
        { name: 'Fever & Pain Relief', dosage: 'Various dosages', category: 'General Healthcare' },
        { name: 'Multivitamins', dosage: 'Multiple combinations', category: 'Healthcare' },
      ],
    },
    {
      id: 'specialty',
      icon: Package,
      title: 'Specialty Formulations',
      description: 'Specialized pharmaceutical products for specific therapeutic needs',
      image: 'https://images.pexels.com/photos/3683073/pexels-photo-3683073.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: [
        { name: 'Cardiac Care Medicines', dosage: 'Various strengths', category: 'Specialty' },
        { name: 'Diabetes Management', dosage: 'Multiple formulations', category: 'Specialty' },
        { name: 'Respiratory Care', dosage: 'Various dosages', category: 'Specialty' },
        { name: 'Dermatology Products', dosage: 'Multiple formulations', category: 'Specialty' },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Pharmaceutical Products | DCGI Approved Tablets & Injections | Cheminnova Life Sciences"
        description="Explore our wide range of DCGI-approved pharmaceutical tablets, injections, and healthcare medicines. WHO-GMP certified products for gynaecology, orthopaedics, and general healthcare."
        keywords="pharmaceutical tablets India, pharma injections, gynaecology medicines, orthopaedic medicines, healthcare products, DCGI approved medicines, pharmaceutical products supplier"
      />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Range</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive portfolio of DCGI-approved pharmaceutical products manufactured under WHO-GMP certified standards
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality pharmaceutical solutions across multiple therapeutic segments
            </p>
          </div>

          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <category.icon className="text-blue-900" size={32} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>Dosage: {product.dosage}</span>
                          <span>Category: {product.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/product/${category.id}`}
                    className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                  >
                    View Details & Inquire
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-xl text-blue-200">DCGI Approved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">WHO-GMP</div>
              <div className="text-xl text-blue-200">Certified</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-xl text-blue-200">Products</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Request Product Catalogue
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get detailed information about our complete product range, specifications, and pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Request Catalogue
            </Link>
            <Link
              to="/distributor"
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Become a Distributor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
