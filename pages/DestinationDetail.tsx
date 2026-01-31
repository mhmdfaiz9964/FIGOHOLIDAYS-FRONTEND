import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDestination, getOffers } from "../api";
import { DestinationDetailSkeleton } from "../components/Skeleton";

export const DestinationDetail: React.FC = () => {
  const { id } = useParams();
  const [dest, setDest] = useState<any>(null);
  const [relatedPackages, setRelatedPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    Promise.all([getDestination(id), getOffers()])
      .then(([destData, allOffers]) => {
        setDest(destData);
        // Assuming offer has destinationId or related logic.
        // For now, filter by title match or other similarity if destinationId is not present.
        setRelatedPackages(
          allOffers
            .filter(
              (p: any) =>
                p.destination_id?.toString() === id?.toString() ||
                p.title?.includes(destData.name),
            )
            .slice(0, 3),
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching destination details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <DestinationDetailSkeleton />;

  if (!dest)
    return (
      <div className="py-40 text-center text-2xl font-cairo">
        الوجهة غير موجودة
      </div>
    );

  return (
    <div className="bg-white font-cairo">
      {/* Hero */}
      <div className="relative h-[50vh]">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-black drop-shadow-2xl mb-4">
              {dest.name}
            </h1>
            <p className="text-xl opacity-90">
              {dest.icon || "🌴"} {dest.label || "استكشف لؤلؤة المحيط"}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="text-3xl font-black text-blue-950 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-white text-xl">ℹ</span>
                عن {dest.name}
              </h2>
              <div
                className="text-xl text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: dest.description }}
              />
            </section>

            {/* Quick Tips / Destination Info */}
            <div className="bg-gray-50 rounded-[2.5rem] p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-100">
              <div className="flex flex-col gap-2">
                <div className="text-orange-500 font-black flex items-center gap-2">
                  <span>⏰</span> أفضل وقت للزيارة
                </div>
                <p className="text-sm text-gray-600 font-medium">الصباح الباكر أو قبل الغروب للاستمتاع بالأجواء الساحرة.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-blue-500 font-black flex items-center gap-2">
                  <span>🌡️</span> الطقس المتوقع
                </div>
                <p className="text-sm text-gray-600 font-medium">معتدل غالباً، ينصح بملابس مريحة وقبعة شمسية.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-green-500 font-black flex items-center gap-2">
                  <span>🍛</span> الأطعمة المحلية
                </div>
                <p className="text-sm text-gray-600 font-medium">لا تفوت تجربة الشاي السيلاني الأصيل والمأكولات البحرية.</p>
              </div>
            </div>

            <section>
              <h3 className="text-3xl font-black text-blue-950 mb-16 flex items-center gap-3">
                <span className="bg-[#007cc2] p-2 rounded-lg text-white">📸</span>
                أبرز المعالم والأنشطة السياحية
              </h3>
              
              <div className="space-y-24">
                {(dest.attractions || []).map((attr: any, i: number) => (
                  <div
                    key={attr.id || i}
                    className="flex flex-col md:flex-row gap-12 items-center group relative"
                  >
                    {/* Background number behind title */}
                    <div className={`absolute -top-10 ${i % 2 === 0 ? '-right-4' : '-left-4'} text-[120px] font-black text-blue-50/50 -z-10 leading-none pointer-events-none`}>
                      0{i + 1}
                    </div>

                    <div className={`w-full md:w-1/2 h-80 overflow-hidden rounded-[2.5rem] shadow-2xl relative ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                      <img
                        src={attr.image}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        alt={attr.title || attr.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    <div className={`w-full md:w-1/2 ${i % 2 !== 0 ? "md:order-1 text-right" : "text-right"}`}>
                      <div className="flex items-center gap-4 mb-6 justify-end">
                        <h4 className="text-3xl font-black text-blue-950 group-hover:text-[#007cc2] transition-colors">
                          {attr.title || attr.name}
                        </h4>
                        <span className="text-2xl font-black text-blue-100 italic">0{i+1}</span>
                      </div>
                      
                      {attr.description && (
                        <div
                          className="text-gray-600 leading-relaxed text-lg mb-8"
                          dangerouslySetInnerHTML={{ __html: attr.description }}
                        />
                      )}
                      
                      <a
                        href={`https://wa.me/94771440707?text=استفسار عن ${attr.title || attr.name}`}
                        className="inline-flex items-center gap-2 text-[#007cc2] font-black border-b-2 border-[#007cc2] pb-1 hover:text-orange-500 hover:border-orange-500 transition-all text-sm group-link"
                      >
                        <span>تحدث مع خبيرنا عن هذا المعلم</span>
                        <span className="text-blue-200">←</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <h3 className="text-2xl font-black text-blue-950 mb-8 border-r-4 border-orange-500 pr-4">
                برامج تشمل {dest.name}
              </h3>
              <div className="space-y-6">
                {relatedPackages.length > 0 ? (
                  relatedPackages.map((pkg: any) => (
                    <Link
                      key={pkg.id}
                      to={`/package/${pkg.id}`}
                      className="block group"
                    >
                      <div className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all">
                        <div className="h-32 overflow-hidden">
                          <img
                            src={pkg.thumbnail_image}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="font-black text-blue-900 group-hover:text-[#007cc2] transition-colors line-clamp-1 mb-2">
                            {pkg.title}
                          </h4>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500 font-bold">
                              {pkg.duration}
                            </span>
                            <span className="font-black text-orange-500">
                              ${pkg.discountPrice || pkg.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="bg-gray-50 p-8 rounded-[2rem] text-center">
                    <p className="text-gray-500 font-bold mb-4">
                      لا توجد برامج مخصصة لهذه الوجهة حالياً.
                    </p>
                    <Link
                      to="/offers"
                      className="text-[#007cc2] font-black underline"
                    >
                      تصفح كل البرامج
                    </Link>
                  </div>
                )}

                <div className="bg-blue-900 rounded-[2rem] p-8 text-white text-center mt-12">
                  <h4 className="text-xl font-black mb-4">
                    خطط لزيارة {dest.name}
                  </h4>
                  <p className="text-sm opacity-80 mb-6 font-medium">
                    اتصل بنا الآن لتنظيم جولة خاصة لك في هذه الوجهة الساحرة.
                  </p>
                  <a
                    href="https://wa.me/94771440707"
                    className="bg-white text-blue-900 block py-4 rounded-xl font-black shadow-lg hover:scale-105 transition-transform"
                  >
                    واتساب مباشر 💬
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
