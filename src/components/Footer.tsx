import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Cheminnova <span className="text-green-500">Life Sciences</span>
            </h3>
            <p className="text-sm mb-4 leading-relaxed">
              Trusted pharmaceutical supplier and distributor delivering high-quality DCGI-approved medicines across India since 2009.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-blue-600 transition">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-white transition">Why Choose Us</Link></li>
              <li><Link to="/distributor" className="hover:text-white transition">Become a Distributor</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Pharmaceutical Tablets</li>
              <li className="hover:text-white transition">Pharmaceutical Injections</li>
              <li className="hover:text-white transition">Healthcare Medicines</li>
              <li className="hover:text-white transition">Gynaecology Products</li>
              <li className="hover:text-white transition">Orthopaedic Medicines</li>
              <li className="hover:text-white transition">General Healthcare</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>SCO-3, Cheema Complex, Preet Colony, Zirakpur, Punjab - 140603, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <div>
                  <a href="tel:6280185695" className="hover:text-white transition">6280185695</a>
                  <span className="mx-1">|</span>
                  <a href="tel:9877530744" className="hover:text-white transition">9877530744</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:cheminnova91@gmail.com" className="hover:text-white transition">
                  cheminnova91@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cheminnova Life Sciences. All rights reserved.</p>
          <p className="mt-2 text-xs">WHO-GMP Certified | DCGI Approved Products | Established 2009</p>
        </div>
      </div>
    </footer>
  );
}
