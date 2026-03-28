import { useState } from 'react';
import { TrendingUp, Award, Handshake, DollarSign, Package, Users } from 'lucide-react';
import { SEO } from '../components/SEO';
import { supabase } from '../lib/supabase';

export function Distributor() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    city: '',
    country: '',
    product_interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const benefits = [
    {
      icon: Award,
      title: 'Premium Product Range',
      description: 'Access to WHO-GMP certified, DCGI-approved pharmaceutical products',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Attractive pricing structures and flexible payment terms',
    },
    {
      icon: Package,
      title: 'Wide Product Portfolio',
      description: 'Comprehensive range across multiple therapeutic segments',
    },
    {
      icon: Handshake,
      title: 'Dedicated Support',
      description: 'Personalized support from our experienced team',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Marketing support and growth opportunities',
    },
    {
      icon: Users,
      title: 'Strong Partnership',
      description: 'Long-term relationships built on trust and reliability',
    },
  ];

  const requirements = [
    'Valid pharmaceutical distribution license',
    'Established distribution network',
    'Proper storage facilities',
    'Business registration documents',
    'GST registration',
    'Commitment to quality standards',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!supabase) {
      alert('Application submission is temporarily unavailable. Please contact us by phone or email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('distributor_applications').insert([formData]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
        city: '',
        country: '',
        product_interest: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Become a Distributor | Partner with Cheminnova Life Sciences"
        description="Join our distribution network and grow your pharmaceutical business. Partner with a trusted WHO-GMP certified pharmaceutical distributor offering quality products and support."
        keywords="pharmaceutical distributor opportunity, pharma distribution partnership, become pharma distributor, pharmaceutical wholesale business, distributor application"
      />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Distribution Partner</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Join our growing network of successful pharmaceutical distributors and grow your business with quality products and dedicated support
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-xl text-gray-600">
              What you gain by partnering with Cheminnova Life Sciences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Partner with Us?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cheminnova Life Sciences offers a lucrative partnership opportunity for pharmaceutical distributors, wholesalers, and medical suppliers looking to expand their product portfolio with quality DCGI-approved medicines.
                </p>
                <p>
                  With over 14 years of experience in pharmaceutical distribution, we understand the challenges and opportunities in the industry. Our partnership model is designed to support your business growth while ensuring quality and compliance at every step.
                </p>
                <p>
                  As our distribution partner, you'll gain access to our comprehensive product range, competitive pricing, marketing support, and dedicated account management. We believe in building long-term relationships based on mutual trust and success.
                </p>
                <p>
                  Our streamlined processes, reliable supply chain, and quality assurance make it easy for you to serve your customers while growing your business profitably.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3825463/pexels-photo-3825463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Pharmaceutical Distribution"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To ensure quality partnerships, we look for distributors who meet the following criteria:
              </p>

              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                      <Award className="text-green-600" size={16} />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Our Commitment to Partners
                </h3>
                <p className="text-blue-800">
                  We are committed to your success. Our team provides ongoing support, training, marketing materials, and prompt responses to ensure your business thrives with our partnership.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Apply for Distribution Partnership
                </h2>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Application Submitted Successfully!</p>
                    <p className="text-sm mt-1">
                      Thank you for your interest in partnering with us. Our team will review your application and contact you within 2-3 business days.
                    </p>
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
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Product Interest *
                      </label>
                      <select
                        required
                        value={formData.product_interest}
                        onChange={(e) => setFormData({ ...formData, product_interest: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select product category</option>
                        <option value="Pharmaceutical Tablets">Pharmaceutical Tablets</option>
                        <option value="Pharmaceutical Injections">Pharmaceutical Injections</option>
                        <option value="Gynaecology Medicines">Gynaecology Medicines</option>
                        <option value="Orthopaedic Formulations">Orthopaedic Formulations</option>
                        <option value="General Healthcare">General Healthcare</option>
                        <option value="All Products">All Products</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        placeholder="Tell us about your business and distribution experience..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:bg-gray-400"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Apply for Distribution Partnership'}
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
