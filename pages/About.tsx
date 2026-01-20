
import React from 'react';
import { DESTINATIONS } from '../data/mockData';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative h-[60vh]">
        <img src="https://images.unsplash.com/photo-1544605170-384784466981?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">سريلانكا: لؤلؤة المحيط الهندي</h1>
            <p className="text-xl text-gray-200">اكتشف الطبيعة، الثقافة، والضيافة في قلب جنوب آسيا</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">لماذا يحب الخليجيون سريلانكا؟</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              سريلانكا ليست مجرد وجهة سياحية، بل هي تجربة حياة. بفضل الرحلات المباشرة القصيرة من دبي والرياض والكويت، أصبحت سريلانكا الخيار الأول للعائلات العربية.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-3xl">🍲</span>
                <div>
                  <h4 className="font-bold">الطعام الحلال</h4>
                  <p className="text-sm text-gray-500">يتوفر الطعام الحلال في كافة المدن الرئيسية وبجودة عالية.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center p-4 bg-gray-50 rounded-xl">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                <div>
                  <h4 className="font-bold">بيئة محافظة</h4>
                  <p className="text-sm text-gray-500">احترام الخصوصية والتقاليد، وتوفر المساجد في كل مكان.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=600" className="rounded-2xl h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=600" className="rounded-2xl h-64 w-full object-cover mt-12" />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">أفضل وقت للزيارة</h2>
          <p className="text-gray-500">سريلانكا وجهة طوال العام بفضل تنوع مناخها</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-10 rounded-3xl border-r-8 border-blue-900">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">الساحل الغربي والجنوبي</h3>
            <p className="text-gray-700">أفضل وقت للزيارة هو من ديسمبر حتى أبريل، حيث يكون الجو مشمساً ومثالياً للسباحة والأنشطة البحرية.</p>
          </div>
          <div className="bg-orange-50 p-10 rounded-3xl border-r-8 border-orange-500">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">الساحل الشرقي</h3>
            <p className="text-gray-700">أفضل وقت هو من مايو حتى سبتمبر، حيث تهدأ الأمواج ويكون الطقس رائعاً في ترينكومالي وباسيكودا.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
