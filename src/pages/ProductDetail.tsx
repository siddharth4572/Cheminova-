import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Shield, TrendingUp, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import { supabase } from '../lib/supabase';

export function ProductDetail() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    quantity: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const productData: Record<string, any> = {
    tablets: {
      title: 'Pharmaceutical Tablets',
      description: 'High-quality DCGI-approved tablets manufactured under strict WHO-GMP standards for various therapeutic applications.',
      image: 'https://images.pexels.com/photos/3683052/pexels-photo-3683052.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'DCGI-approved formulations',
        'WHO-GMP certified manufacturing',
        'Multiple therapeutic segments',
        'Various dosage strengths available',
        'Blister packaging',
        'Extended shelf life',
      ],
      applications: [
        'General healthcare treatments',
        'Pain management',
        'Antibiotic therapy',
        'Vitamin supplementation',
        'Chronic disease management',
      ],
      packaging: 'Available in blister packs of 10, 14, and 30 tablets',
    },
    injections: {
      title: 'Pharmaceutical Injections',
      description: 'Sterile injectable formulations manufactured in state-of-the-art facilities under stringent quality control measures.',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Sterile formulations',
        'Quality-tested injectables',
        'Multiple dosage forms',
        'Safe packaging',
        'Temperature-controlled storage',
        'Extended stability',
      ],
      applications: [
        'Emergency medical treatments',
        'Chronic disease management',
        'Vitamin therapy',
        'Pain management',
        'Hormonal treatments',
      ],
      packaging: 'Available in vials and ampoules with appropriate packaging',
    },
    gynaecology: {
      title: 'Gynaecology Medicines',
      description: 'Specialized pharmaceutical formulations addressing women\'s healthcare needs across various life stages.',
      image: 'https://images.pexels.com/photos/5910971/pexels-photo-5910971.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Women-specific formulations',
        'Hormonal preparations',
        'Prenatal supplements',
        'Contraceptive medications',
        'Bone health supplements',
        'Iron formulations',
      ],
      applications: [
        'Reproductive health',
        'Pregnancy care',
        'Hormonal balance',
        'Bone health maintenance',
        'Nutritional supplementation',
      ],
      packaging: 'Various packaging options as per product requirements',
    },
    orthopaedics: {
      title: 'Orthopaedic Formulations',
      description: 'Comprehensive range of medicines and supplements for bone and joint health, supporting musculoskeletal wellness.',
      image: 'https://images.pexels.com/photos/5473174/pexels-photo-5473174.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Joint care formulations',
        'Calcium supplements',
        'Vitamin D3 combinations',
        'Pain relief medications',
        'Anti-inflammatory drugs',
        'Bone health supplements',
      ],
      applications: [
        'Arthritis management',
        'Bone health maintenance',
        'Post-fracture recovery',
        'Joint pain relief',
        'Osteoporosis prevention',
      ],
      packaging: 'Available in tablets, capsules, and liquid formulations',
    },
    'general-healthcare': {
      title: 'General Healthcare Medicines',
      description: 'Essential pharmaceutical products for common healthcare needs and everyday wellness maintenance.',
      image: 'https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Common cold & flu remedies',
        'Digestive health products',
        'Fever management',
        'Pain relief medications',
        'Multivitamin formulations',
        'General wellness supplements',
      ],
      applications: [
        'Symptomatic relief',
        'Preventive healthcare',
        'Nutritional supplementation',
        'Acute condition management',
        'Daily wellness maintenance',
      ],
      packaging: 'Consumer-friendly packaging in various sizes',
    },
    specialty: {
      title: 'Specialty Formulations',
      description: 'Advanced pharmaceutical products for specific therapeutic needs requiring specialized treatment approaches.',
      image: 'https://images.pexels.com/photos/3683073/pexels-photo-3683073.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Cardiac care medicines',
        'Diabetes management',
        'Respiratory treatments',
        'Dermatology products',
        'Specialized formulations',
        'Advanced therapeutics',
      ],
      applications: [
        'Chronic disease management',
        'Specialized treatments',
        'Advanced therapy',
        'Targeted interventions',
        'Specific condition management',
      ],
      packaging: 'Specialized packaging as per product requirements',
    },
  };

  const product = productData[id || 'tablets'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('product_inquiries').insert([
        {
          ...formData,
          product_name: product.title,
        },
      ]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        quantity: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={`${product.title} | DCGI Approved | Cheminnova Life Sciences`}
        description={product.description}
        keywords={`${product.title}, pharmaceutical products, DCGI approved, WHO-GMP certified, Cheminnova Life Sciences`}
      />

      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition">
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex gap-4 mb-8">
                <div className="bg-blue-100 px-4 py-2 rounded-lg">
                  <div className="text-sm text-blue-900 font-semibold">DCGI Approved</div>
                </div>
                <div className="bg-green-100 px-4 py-2 rounded-lg">
                  <div className="text-sm text-green-900 font-semibold">WHO-GMP Certified</div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Medical Applications
              </h2>
              <ul className="space-y-3">
                {product.applications.map((application: string, index: number) => (
                  <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                    <Package className="text-blue-900 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Packaging</h3>
                <p className="text-gray-600">{product.packaging}</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg text-center">
                  <Shield className="text-blue-900 mx-auto mb-2" size={32} />
                  <div className="font-semibold text-gray-900">Quality Assured</div>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <TrendingUp className="text-green-600 mx-auto mb-2" size={32} />
                  <div className="font-semibold text-gray-900">Reliable Supply</div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Product Inquiry Form
                </h2>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Thank you for your inquiry!</p>
                    <p className="text-sm mt-1">Our team will contact you shortly with product details and pricing.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity Required
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g., 1000 units"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:bg-gray-400"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
