import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { getSettings } from './api';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Offers = lazy(() => import('./pages/Offers').then(m => ({ default: m.Offers })));
const PackageDetail = lazy(() => import('./pages/PackageDetail').then(m => ({ default: m.PackageDetail })));
const DestinationDetail = lazy(() => import('./pages/DestinationDetail').then(m => ({ default: m.DestinationDetail })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const VisaInfo = lazy(() => import('./pages/VisaInfo').then(m => ({ default: m.VisaInfo })));
const Transportation = lazy(() => import('./pages/Transportation').then(m => ({ default: m.Transportation })));
const Hotels = lazy(() => import('./pages/Hotels').then(m => ({ default: m.Hotels })));
const Destinations = lazy(() => import('./pages/Destinations').then(m => ({ default: m.Destinations })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-900"></div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Dynamically set favicon from settings
    getSettings().then(settings => {
      if (settings && settings.favicon) {
        let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (!link) {
          link = document.createElement('link');
          link.rel = 'icon';
          document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = settings.favicon;
      }
    }).catch(console.error);
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20"> {/* Padding to account for fixed header */}
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;
