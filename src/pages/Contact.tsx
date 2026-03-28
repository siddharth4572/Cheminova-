import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Building, User } from 'lucide-react';
import { SEO } from '../components/SEO';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!supabase) {
      alert('Inquiry submission is temporarily unavailable. Please contact us by phone or email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('general_inquiries').insert([formData]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company_name: '',
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
        title="Contact Cheminnova Life Sciences | Pharmaceutical Distributor Zirakpur, Punjab"
        description="Get in touch with Cheminnova Life Sciences for pharmaceutical distribution inquiries. Located in Zirakpur, Punjab. Call 6280185695 or email cheminnova91@gmail.com"
        keywords="contact pharmaceutical distributor, pharma supplier Zirakpur, pharmaceutical company Punjab, Cheminnova contact, pharma inquiry"
      />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get in touch with our team for inquiries, product information, or partnership opportunities
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      SCO-3, Cheema Complex, Preet Colony<br />
                      Adjacent Royal Estate<br />
                      Chandigarh-Ambala Highway<br />
                      Zirakpur, Punjab - 140603<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <p className="text-gray-600">
                      <a href="tel:6280185695" className="hover:text-blue-900 transition">
                        +91 6280185695
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:9877530744" className="hover:text-blue-900 transition">
                        +91 9877530744
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:cheminnova91@gmail.com" className="hover:text-blue-900 transition">
                        cheminnova91@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <User className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Person</h3>
                    <p className="text-gray-600">Mr. Rajesh Batra</p>
                    <p className="text-sm text-gray-500">CEO & Proprietor</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Building className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Banker</h3>
                    <p className="text-gray-600">Punjab National Bank</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-gray-200 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Message Sent Successfully!</p>
                    <p className="text-sm mt-1">
                      Thank you for contacting us. We will get back to you within 24 hours.
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
                        Message *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:bg-gray-400"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Quick Response</h3>
                <p className="text-blue-800 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-300 rounded-lg overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1899999999997!2d76.8194!3d30.6425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzMzLjAiTiA3NsKwNDknMDkuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Cheminnova Life Sciences Location"
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Chandigarh-Ambala Highway, Zirakpur, Punjab - 140603, India
          </p>
        </div>
      </section>
    </>
  );
}
