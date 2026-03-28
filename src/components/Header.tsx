import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/products', label: 'Products' },
    { to: '/why-choose-us', label: 'Why Choose Us' },
    { to: '/distributor', label: 'Become a Distributor' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:6280185695" className="flex items-center gap-2 hover:text-blue-200 transition">
                <Phone size={14} />
                <span>6280185695</span>
              </a>
              <a href="mailto:cheminnova91@gmail.com" className="flex items-center gap-2 hover:text-blue-200 transition">
                <Mail size={14} />
                <span>cheminnova91@gmail.com</span>
              </a>
            </div>
            <div className="hidden sm:block text-xs">
              WHO-GMP Certified | DCGI Approved Products
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-900">
              Cheminnova <span className="text-green-600">Life Sciences</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition ${
                  isActive(link.to)
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-700 hover:text-blue-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 text-sm font-medium ${
                  isActive(link.to) ? 'text-blue-900' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
