import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyInquiry } from './components/StickyInquiry';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { Distributor } from './pages/Distributor';
import { Contact } from './pages/Contact';

function getRouterBasename() {
  if (typeof window === 'undefined') return '/';

  // On GitHub Pages project sites, use the repository segment as router basename.
  if (window.location.hostname.endsWith('github.io')) {
    const repoSegment = window.location.pathname.split('/').filter(Boolean)[0] || '';
    return repoSegment ? `/${repoSegment}` : '/';
  }

  return '/';
}

function App() {
  const routerBasename = getRouterBasename();

  return (
    <Router basename={routerBasename}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/distributor" element={<Distributor />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <StickyInquiry />
      </div>
    </Router>
  );
}

export default App;
