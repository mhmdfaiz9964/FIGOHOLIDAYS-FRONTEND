
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-20">
      <div className="bg-blue-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-blue-200 text-lg">فريقنا جاهز للرد على استفساراتكم على مدار الساعة</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">الموقع</h3>
              <p className="text-gray-600 text-sm leading-relaxed">225- شارع غالي الرئيسي، كولومبو، سريلانكا</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-900">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">بيانات الاتصال</h3>
              <div className="space-y-4 text-gray-600 font-medium">
                <div>
                  <p className="text-xs text-gray-400 mb-1">واتساب (WhatsApp)</p>
                  <div className="flex flex-col gap-1">
                    <a href="https://wa.me/94771440707" className="text-green-600 hover:underline font-bold text-lg">0094 771 440 707</a>
                    <a href="https://wa.me/94711307773" className="text-green-600 hover:underline font-bold text-lg">0094 711 307 773</a>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">هاتف أرضي (Landline)</p>
                  <a href="tel:0094112559960" className="hover:text-blue-900 transition-colors text-lg">0094 112 559 960</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#007cc2]">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">لبريد الإلكتروني</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <a href="mailto:info@almusafirsrilanka.com" className="block hover:text-[#007cc2] transition-colors font-bold">info@almusafirsrilanka.com</a>
                <a href="mailto:mumthaz@figoholidays.com" className="block hover:text-[#007cc2] transition-colors font-bold">mumthaz@figoholidays.com</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">مواقعنا الإلكترونية</h3>
              <div className="space-y-3 pt-2">
                <a href="http://www.almusafirsrilanka.com" target="_blank" rel="noopener noreferrer" className="block bg-blue-50 text-blue-900 p-3 rounded-xl text-center font-bold text-xs hover:bg-blue-100 transition-all border border-blue-100">
                  www.almusafirsrilanka.com (العربية)
                </a>
                <a href="http://www.figoholidays.com" target="_blank" rel="noopener noreferrer" className="block bg-gray-50 text-gray-600 p-3 rounded-xl text-center font-bold text-xs hover:bg-gray-100 transition-all border border-gray-100">
                  www.figoholidays.com (English)
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-2xl shadow-xl h-full">
              <h2 className="text-3xl font-bold text-blue-950 mb-8">أرسل لنا رسالة</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">الاسم بالكامل</label>
                  <input type="text" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-[#007cc2] outline-none" placeholder="مثال: أحمد محمد" />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">رقم الجوال</label>
                  <input type="tel" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-[#007cc2] outline-none" placeholder="+966" />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
                  <input type="email" className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-[#007cc2] outline-none" placeholder="email@example.com" />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-bold text-gray-700 mb-2">نوع الخدمة</label>
                  <select className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-[#007cc2] outline-none">
                    <option>باقة سياحية متكاملة</option>
                    <option>حجز فنادق فقط</option>
                    <option>تأجير سيارة مع سائق</option>
                    <option>تنسيق شهر عسل</option>
                  </select>
                </div>
                <div className="col-span-full">
                  <label className="block text-sm font-bold text-gray-700 mb-2">تفاصيل إضافية عن رحلتك</label>
                  <textarea rows={5} className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-[#007cc2] outline-none" placeholder="أدخل رسالتك هنا..."></textarea>
                </div>
                <div className="col-span-full">
                  <button type="submit" className="w-full bg-[#007cc2] text-white py-5 rounded-xl font-bold text-xl hover:bg-blue-800 transition shadow-xl">
                    إرسال الطلب
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl h-96 bg-gray-300 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9161678248883!2d79.8459419147728!3d6.921838634994264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a70ad%3A0x2db2e17c35413b19!2sGalle%20Road%2C%20Colombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1704981234567!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Google Maps Almusafir Sri Lanka"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
