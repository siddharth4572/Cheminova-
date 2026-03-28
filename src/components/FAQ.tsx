import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What pharmaceutical products does Cheminnova Life Sciences supply?',
    answer: 'We supply a comprehensive range of DCGI-approved pharmaceutical products including tablets, injections, and healthcare medicines across multiple therapeutic segments. Our product portfolio covers gynaecology, orthopaedics, general healthcare, and specialty formulations.',
  },
  {
    question: 'Are your medicines DCGI approved?',
    answer: 'Yes, all our pharmaceutical products are 100% DCGI (Drug Controller General of India) approved. We only deal in certified, safe, and effective medicines that meet all regulatory requirements in India.',
  },
  {
    question: 'Does Cheminnova Life Sciences supply medicines in bulk?',
    answer: 'Yes, we specialize in bulk pharmaceutical supply to distributors, wholesalers, hospitals, and pharmacy chains. We offer flexible ordering quantities and competitive pricing for bulk orders.',
  },
  {
    question: 'How can distributors partner with Cheminnova Life Sciences?',
    answer: 'Distributors can apply for partnership through our "Become a Distributor" page. We require valid pharmaceutical distribution licenses, proper storage facilities, and business registration documents. Our team reviews applications and contacts qualified distributors within 2-3 business days.',
  },
  {
    question: 'Where is Cheminnova Life Sciences located?',
    answer: 'We are located at SCO-3, Cheema Complex, Preet Colony, Adjacent Royal Estate, Chandigarh-Ambala Highway, Zirakpur, Punjab - 140603, India. You can contact us at 6280185695 or 9877530744.',
  },
  {
    question: 'What is WHO-GMP certification and why is it important?',
    answer: 'WHO-GMP (World Health Organization - Good Manufacturing Practice) is an internationally recognized quality standard for pharmaceutical manufacturing and distribution. Our WHO-GMP certification ensures that all our products and processes meet the highest international quality standards, guaranteeing safety and efficacy.',
  },
  {
    question: 'Do you provide product documentation and certificates?',
    answer: 'Yes, we provide complete documentation including product certificates, quality assurance documents, batch details, and all necessary regulatory paperwork. Full traceability and documentation are maintained for all our products.',
  },
  {
    question: 'What therapeutic segments do you cover?',
    answer: 'We cover multiple therapeutic segments including Gynaecology, Orthopaedics, General Healthcare, Cardiology, Diabetes Management, Respiratory Care, and Dermatology. Our diverse portfolio allows us to serve comprehensive healthcare needs.',
  },
  {
    question: 'How can I request a product catalogue?',
    answer: 'You can request our complete product catalogue by contacting us through our Contact page, calling us at 6280185695, or emailing cheminnova91@gmail.com. We will send you detailed product information, specifications, and pricing.',
  },
  {
    question: 'What is your minimum order quantity?',
    answer: 'Minimum order quantities vary by product. For bulk orders and distributor inquiries, we offer flexible MOQs tailored to your needs. Please contact our sales team for specific product MOQ information.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-900 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-blue-900 flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50 border border-blue-200 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our team is here to help. Contact us for more information.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
