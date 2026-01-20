
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-24 pb-12 font-cairo">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Brand Identity */}
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex flex-col items-start leading-none mb-8 group">
            <div className="flex items-center gap-1 mb-1">
               <div className="w-8 h-8 bg-[#007cc2] rounded-lg rounded-tr-[15px] relative overflow-hidden flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full absolute -bottom-1"></div>
               </div>
               <div className="text-orange-400 text-2xl">☀️</div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-tight group-hover:text-[#007cc2] transition-colors">
                المسافر<span className="text-[#007cc2]">سريلانكا</span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] -mt-1">
                ALMUSAFIR <span className="text-[#007cc2]">SRILANKA</span>
              </span>
            </div>
          </Link>
          <p className="text-gray-400 leading-relaxed font-medium">
            شريكك الموثوق في سريلانكا. متخصصون في تقديم تجارب سياحية فاخرة ومخصصة للمسافرين من دول مجلس التعاون الخليجي منذ عام 2014.
          </p>
          <div className="mt-6 flex flex-col gap-2">
            <a href="https://www.almusafirsrilanka.com" className="text-xs text-[#007cc2] font-bold hover:underline">www.almusafirsrilanka.com</a>
            <a href="https://www.figoholidays.com" className="text-xs text-gray-500 font-bold hover:underline">www.figoholidays.com (English)</a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-xl font-black mb-8 relative inline-block">
            اكتشف سريلانكا
            <div className="absolute -bottom-2 right-0 w-10 h-1 bg-orange-500 rounded-full"></div>
          </h3>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-gray-400 hover:text-white hover:translate-x-[-5px] transition-all flex items-center gap-2"><span>•</span> عن الوجهة</Link></li>
            <li><Link to="/hotels" className="text-gray-400 hover:text-white hover:translate-x-[-5px] transition-all flex items-center gap-2"><span>•</span> الفنادق والمنتجعات</Link></li>
            <li><Link to="/offers" className="text-gray-400 hover:text-white hover:translate-x-[-5px] transition-all flex items-center gap-2"><span>•</span> العروض الحالية</Link></li>
            <li><Link to="/transportation" className="text-gray-400 hover:text-white hover:translate-x-[-5px] transition-all flex items-center gap-2"><span>•</span> خدمات التوصيل</Link></li>
            <li><Link to="/visa" className="text-gray-400 hover:text-white hover:translate-x-[-5px] transition-all flex items-center gap-2"><span>•</span> تأشيرة الدخول</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-xl font-black mb-8 relative inline-block">
            تواصل معنا
            <div className="absolute -bottom-2 right-0 w-10 h-1 bg-orange-50 rounded-full"></div>
          </h3>
          <ul className="space-y-6 text-gray-400">
            <li className="flex items-start gap-4">
              <span className="bg-white/5 p-3 rounded-xl text-orange-500">📍</span>
              <div>
                <p className="text-white font-bold text-sm">المكتب الرئيسي</p>
                <p className="text-xs mt-1">225- شارع غالي الرئيسي، كولومبو، سريلانكا</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-white/5 p-3 rounded-xl text-green-500">📞</span>
              <div>
                <p className="text-white font-bold text-sm">واتساب (WhatsApp)</p>
                <div className="text-xs mt-1 flex flex-col gap-1">
                  <a href="https://wa.me/94771440707" className="hover:text-white transition-colors">0094 771 440 707</a>
                  <a href="https://wa.me/94711307773" className="hover:text-white transition-colors">0094 711 307 773</a>
                </div>
                <p className="text-white font-bold text-sm mt-3">هاتف أرضي (Landline)</p>
                <div className="text-xs mt-1 flex flex-col gap-1">
                  <a href="tel:0094112559960" className="hover:text-white transition-colors">0094 112 559 960</a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-white/5 p-3 rounded-xl text-[#007cc2]">✉️</span>
              <div>
                <p className="text-white font-bold text-sm">البريد الإلكتروني</p>
                <div className="text-xs mt-1 flex flex-col gap-1">
                  <a href="mailto:info@almusafirsrilanka.com" className="hover:text-white transition-colors">info@almusafirsrilanka.com</a>
                  <a href="mailto:mumthaz@figoholidays.com" className="hover:text-white transition-colors">mumthaz@figoholidays.com</a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="text-xl font-black mb-8 relative inline-block">
            تابع رحلتنا
            <div className="absolute -bottom-2 right-0 w-10 h-1 bg-blue-500 rounded-full"></div>
          </h3>
          <p className="text-xs text-gray-400 mb-6 font-medium">انضم إلى أكثر من 20 ألف مشترك في قائمتنا البريدية للحصول على العروض السرية.</p>
          <div className="flex gap-2 mb-10">
            <input type="email" placeholder="بريدك الإلكتروني" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#007cc2] flex-grow" />
            <button className="bg-[#007cc2] p-3 rounded-xl hover:bg-[#005fa3] transition-colors">✔</button>
          </div>
          <div className="flex gap-4">
            {['FB', 'IG', 'TW', 'SC'].map(s => (
              <a key={s} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all font-black text-xs">{s}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-xs font-bold">&copy; 2026 المسافر سريلانكا. جميع الحقوق محفوظة.</p>
        <div className="flex items-center gap-8">
           <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" alt="Visa" />
           <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" alt="MasterCard" />
           <img src="https://img.icons8.com/color/48/000000/amex.png" className="h-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" alt="Amex" />
        </div>
      </div>
    </footer>
  );
};
