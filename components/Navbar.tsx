
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getSettings } from '../api';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings();
        setSettings(data);
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      }
    };
    fetchSettings();
  }, [location.pathname]); // Re-fetch on navigation

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عروض سياحية', path: '/offers' },
    { name: 'الفنادق', path: '/hotels' },
    { name: 'الوجهات', path: '/destinations' },
    { name: 'المواصلات', path: '/transportation' },
    { name: 'تأشيرة سريلانكا', path: '/visa' },
    { name: 'اتصل بنا', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 font-cairo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col items-start leading-none group">
              {settings?.logo ? (
                <img src={settings.logo} alt="Logo" className="h-16 object-contain" />
              ) : (
                <>
                  <div className="flex items-center gap-1 mb-1">
                     <div className="w-8 h-8 bg-[#007cc2] rounded-lg rounded-tr-[15px] relative overflow-hidden flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-full absolute -bottom-1"></div>
                     </div>
                     <div className="text-orange-400 text-2xl">☀️</div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-[#1a1a1a] tracking-tight group-hover:text-[#007cc2] transition-colors">
                      المسافر<span className="text-[#007cc2]">سريلانكا</span>
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] -mt-1">
                      ALMUSAFIR <span className="text-[#007cc2]">SRILANKA</span>
                    </span>
                  </div>
                </>
              )}
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 space-x-reverse items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-[#007cc2] font-bold border-b-2 border-[#007cc2]'
                    : 'text-gray-600 hover:text-[#007cc2]'
                } transition-all px-2 py-2 text-sm font-bold`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-8 w-[1px] bg-gray-200 mx-4"></div>
            <Link
              to="/offers"
              className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg flex items-center gap-2"
            >
              <span>احجز رحلتك</span>
              <span className="text-xl">✈️</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#007cc2] focus:outline-none p-2 rounded-lg bg-gray-50"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen border-t' : 'max-h-0'}`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-4 text-base font-bold rounded-xl transition ${
                isActive(link.path) ? 'bg-blue-50 text-[#007cc2]' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              to="/offers"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-orange-500 text-white px-4 py-4 rounded-xl font-bold shadow-md"
            >
              احجز الآن
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
