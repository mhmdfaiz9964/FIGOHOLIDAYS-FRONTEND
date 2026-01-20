
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Offers } from './pages/Offers';
import { PackageDetail } from './pages/PackageDetail';
import { DestinationDetail } from './pages/DestinationDetail';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { VisaInfo } from './pages/VisaInfo';
import { Transportation } from './pages/Transportation';
import { Hotels } from './pages/Hotels';
import { Destinations } from './pages/Destinations';
import { WhatsAppButton } from './components/WhatsAppButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20"> {/* Padding to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/package/:id" element={<PackageDetail />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/visa" element={<VisaInfo />} />
            <Route path="/transportation" element={<Transportation />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;
