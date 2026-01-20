
import { TourPackage, Destination, Attraction, Vehicle, TourCategory, Hotel, HotelCategory, Review, Restaurant } from '../types';

export const HOTEL_CATEGORIES: { id: HotelCategory; title: string }[] = [
  { id: 'villas', title: 'فلل خاصة بمسبح' },
  { id: 'boutique', title: 'فنادق بوتيك' },
  { id: 'beach', title: 'منتجعات شاطئية' },
  { id: '5star', title: 'فنادق 5 نجوم' },
  { id: '4star', title: 'فنادق 4 نجوم' },
  { id: '3star', title: 'فنادق 3 نجوم' },
  { id: 'ayurveda', title: 'منتجعات أيورفيدا' },
  { id: 'apartments', title: 'شقق فندقية' },
];

export const HOTEL_PARTNERS = [
  { name: 'Anantara Hotels', logo: 'https://logos-world.net/wp-content/uploads/2023/01/Anantara-Hotels-Resorts-Spas-Logo.png' },
  { name: 'Shangri-La', logo: 'https://logos-download.com/wp-content/uploads/2016/06/Shangri-La_Hotels_and_Resorts_logo_logotype.png' },
  { name: 'Jetwing Hotels', logo: 'https://www.jetwinghotels.com/wp-content/uploads/2018/01/jetwing-hotels-logo.png' },
  { name: 'Cinnamon Hotels', logo: 'https://www.cinnamonhotels.com/themes/custom/cinnamon/logo.svg' },
  { name: 'Heritance Hotels', logo: 'https://www.heritancehotels.com/images/heritance-logo-black.png' },
  { name: 'Hilton', logo: 'https://logos-world.net/wp-content/uploads/2020/12/Hilton-Logo.png' },
];

export const HOTELS: Hotel[] = [
  // كولومبو
  { id: 'h-col-1', name: 'شانغريلا كولومبو', description: 'قمة الفخامة العصرية في قلب العاصمة مع إطلالات خلابة.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800', location: 'كولومبو', category: '5star', stars: 5, pricePerNight: 320, currency: '$', amenities: ['مسبح لامتناهي', 'سبا', 'مركز تسوق'] },
  { id: 'h-col-2', name: 'هيريتانس كولومبو', description: 'تصميم أنيق وخدمة عالمية في المنطقة التجارية.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?q=80&w=800', location: 'كولومبو', category: '5star', stars: 5, pricePerNight: 240, currency: '$', amenities: ['مسبح', 'جيم', 'مطاعم فاخرة'] },
  { id: 'h-col-3', name: 'فندق مارينو بيتش', description: 'مسبح على السطح وشقق فندقية واسعة للعائلات.', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800', location: 'كولومبو', category: 'apartments', stars: 4, pricePerNight: 160, currency: '$', amenities: ['مسبح سطحي', 'إطلالة بحرية', 'مطبخ صغير'] },
  
  // كاندي
  { id: 'h-kan-1', name: 'إيرلز ريجنسي', description: 'منتجع ملكي يطل على جبال كاندي الخضراء.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800', location: 'كاندي', category: '5star', stars: 5, pricePerNight: 190, currency: '$', amenities: ['مسبح كبير', 'سبا', 'تنس'] },
  { id: 'h-kan-2', name: 'أمايا هيلز كاندي', description: 'إطلالة بانورامية على المدينة وتصميم كاندي تقليدي.', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=800', location: 'كاندي', category: 'boutique', stars: 4, pricePerNight: 130, currency: '$', amenities: ['إطلالة جبلية', 'عروض ثقافية', 'مسبح'] },
  { id: 'h-kan-3', name: 'فندق جولدن كراون', description: 'فخامة مطلقة قريبة من معبد السن الشهير.', image: 'https://images.unsplash.com/photo-1551882547-ff43c63e1c24?q=80&w=800', location: 'كاندي', category: '5star', stars: 5, pricePerNight: 210, currency: '$', amenities: ['فخامة', 'قريب من المعالم', 'سبا'] },

  // نوارا إليا
  { id: 'h-ne-1', name: 'غراند هوتيل نوارا إليا', description: 'أيقونة تاريخية من العصر الاستعماري في مدينة الضباب.', image: 'https://images.unsplash.com/photo-1551882547-ff43c63e1c24?q=80&w=800', location: 'نوارا إليا', category: '5star', stars: 5, pricePerNight: 200, currency: '$', amenities: ['حدائق شاي', 'بلياردو تاريخي', 'شاي المساء'] },
  { id: 'h-ne-2', name: 'أراليا جرين سيتي', description: 'فندق عصري فاخر يجمع بين الراحة والجمال الطبيعي.', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800', location: 'نوارا إليا', category: '5star', stars: 5, pricePerNight: 170, currency: '$', amenities: ['تدفئة داخلية', 'مسبح مدفأ', 'إطلالة بحيرة'] },
  { id: 'h-ne-3', name: 'هيريتانس تي فاكتوري', description: 'مصنع شاي قديم تحول إلى فندق مذهل في وسط المزارع.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800', location: 'نوارا إليا', category: 'boutique', stars: 5, pricePerNight: 230, currency: '$', amenities: ['تجربة شاي', 'تصميم فريد', 'هدوء تام'] },

  // بنتوتة
  { id: 'h-ben-1', name: 'سينامون باي بيرويلا', description: 'منتجع شاطئي ضخم بتصميم مغربي مذهل.', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800', location: 'بنتوتة', category: 'beach', stars: 5, pricePerNight: 180, currency: '$', amenities: ['شاطئ خاص', 'عدة مسابح', 'رياضات مائية'] },
  { id: 'h-ben-2', name: 'تاج بنتوتة ريزورت', description: 'مزيج من كرم الضيافة الهندي والجمال السريلانكي.', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800', location: 'بنتوتة', category: '5star', stars: 5, pricePerNight: 220, currency: '$', amenities: ['شاطئ', 'أرقى المطاعم', 'حدائق'] },
  { id: 'h-ben-3', name: 'أفاني بنتوتة ريزورت', description: 'منتجع عصري وأنيق مصمم من قبل جيفري باوا.', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800', location: 'بنتوتة', category: 'beach', stars: 4, pricePerNight: 150, currency: '$', amenities: ['تصميم معماري', 'هدوء', 'أنشطة بحرية'] },

  // نيجومبو
  { id: 'h-neg-1', name: 'جيتوينج بلو', description: 'منتجع شاطئي أنيق بالقرب من المطار.', image: 'https://images.unsplash.com/photo-1584285418504-0051b63c32e9?q=80&w=800', location: 'نيجومبو', category: 'beach', stars: 5, pricePerNight: 160, currency: '$', amenities: ['شاطئ', 'قريب من المطار', 'مسابح'] },
  { id: 'h-neg-2', name: 'هيريتانس نيجومبو', description: 'فخامة وراحة تامة قبل المغادرة أو بعد الوصول.', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800', location: 'نيجومبو', category: '5star', stars: 5, pricePerNight: 190, currency: '$', amenities: ['إطلالة بحرية', 'سبا', 'خدمة سريعة'] },
  { id: 'h-neg-3', name: 'كلوب هوتيل دولفين', description: 'منتجع عائلي مليء بالأنشطة والترفيه للأطفال.', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800', location: 'نيجومبو', category: 'family' as any, stars: 4, pricePerNight: 110, currency: '$', amenities: ['نادي أطفال', 'أطول مسبح', 'عروض'] },

  // دبولة
  { id: 'h-dam-1', name: 'هيريتانس كاندالاما', description: 'فندق أيقوني محفور في الصخر ويندمج مع الغابة.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?q=80&w=800', location: 'دبولة', category: 'boutique', stars: 5, pricePerNight: 250, currency: '$', amenities: ['حياة برية', 'تصميم معماري', 'هدوء'] },
  { id: 'h-dam-2', name: 'سينامون لودج حبورانة', description: 'فلل واسعة وسط الطبيعة تشعرك وكأنك في قرية ملكية.', image: 'https://images.unsplash.com/photo-1549294413-26f195af0cb0?q=80&w=800', location: 'دبولة', category: 'villas', stars: 5, pricePerNight: 180, currency: '$', amenities: ['طبيعة', 'فلل واسعة', 'سفاري'] },
  { id: 'h-dam-3', name: 'منتجع علياء', description: 'إطلالة مباشرة ومذهلة على صخرة سيجيريا.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800', location: 'دبولة', category: '5star', stars: 4, pricePerNight: 140, currency: '$', amenities: ['إطلالة سيجيريا', 'مسبح لامتناهي', 'تصميم مودرن'] },

  // إيلا
  { id: 'h-ella-1', name: '98 أكرز ريزورت', description: 'أشهر منتجع في إيلا يطل على مزارع الشاي وقبة آدم الصغيرة.', image: 'https://images.unsplash.com/photo-1582260654013-10d93544d934?q=80&w=800', location: 'إيلا', category: 'villas', stars: 5, pricePerNight: 450, currency: '$', amenities: ['خصوصية', 'إطلالة خلابة', 'عمارة خشبية'] },
  { id: 'h-ella-2', name: 'هايد إيلا', description: 'فندق بوتيك عصري يطل على وادي إيلا.', image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?q=80&w=800', location: 'إيلا', category: 'boutique', stars: 4, pricePerNight: 120, currency: '$', amenities: ['إطلالة وادي', 'شرفات خاصة', 'هدوء'] },
  { id: 'h-ella-3', name: 'إيكو إيلا ريزورت', description: 'إقامة مريحة بالقرب من محطة قطار إيلا الشهيرة.', image: 'https://images.unsplash.com/photo-1551882547-ff43c63e1c24?q=80&w=800', location: 'إيلا', category: '4star', stars: 4, pricePerNight: 90, currency: '$', amenities: ['قريب من المدينة', 'مطعم ممتاز', 'خدمة ودودة'] },

  // يالا
  { id: 'h-yala-1', name: 'جيتوينج يالا', description: 'مزيج بين السفاري والرفاهية الشاطئية.', image: 'https://images.unsplash.com/photo-1552423814-1493d303ec62?q=80&w=800', location: 'يالا', category: '5star', stars: 5, pricePerNight: 220, currency: '$', amenities: ['قرب الحديقة الوطنية', 'شاطئ', 'سفاري'] },
  { id: 'h-yala-2', name: 'سينامون وايلد يالا', description: 'أكواخ فاخرة تجعلك في قلب الغابة تماماً.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800', location: 'يالا', category: 'boutique', stars: 4, pricePerNight: 180, currency: '$', amenities: ['حياة برية حولك', 'مسبح خارجي', 'مطعم مفتوح'] },
  { id: 'h-yala-3', name: 'وايلد كوست تنيد لودج', description: 'تجربة تخييم فاخرة لا مثيل لها في العالم.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800', location: 'يالا', category: 'villas', stars: 5, pricePerNight: 650, currency: '$', amenities: ['خيم فاخرة', 'شاطئ بكر', 'خدمة ملكية'] },

  // ميريسا
  { id: 'h-mir-1', name: 'ماندارا ريزورت ميريسا', description: 'منتجع هادئ على شواطئ ميريسا الفيروزية.', image: 'https://images.unsplash.com/photo-1550965314-9f26839366df?q=80&w=800', location: 'ميريسا', category: 'beach', stars: 4, pricePerNight: 130, currency: '$', amenities: ['شاطئ', 'مشاهدة حيتان', 'مسابح'] },
  { id: 'h-mir-2', name: 'تريبل أو سيكس', description: 'فندق بوتيك عصري يجمع بين البساطة والفخامة.', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800', location: 'ميريسا', category: 'boutique', stars: 4, pricePerNight: 110, currency: '$', amenities: ['تصميم مودرن', 'مطعم بحري', 'هدوء'] },
  { id: 'h-mir-3', name: 'بارادايس بيتش كلوب', description: 'الأفضل للعائلات الباحثة عن المرح والشاطئ.', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800', location: 'ميريسا', category: 'beach', stars: 3, pricePerNight: 85, currency: '$', amenities: ['شاطئ', 'مسبح عائلي', 'قريب من المدينة'] },

  // ويليغاما
  { id: 'h-wel-1', name: 'ماريوت ويليغاما بيتش', description: 'أكبر وأفخم فندق في جنوب سريلانكا.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800', location: 'ويليغاما', category: '5star', stars: 5, pricePerNight: 280, currency: '$', amenities: ['نادي أطفال', 'سبا تشي', 'إطلالة كاملة'] },
  { id: 'h-wel-2', name: 'فندق W15 ويليغاما', description: 'أناقة عصرية وأجواء شبابية على الشاطئ.', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800', location: 'ويليغاما', category: 'boutique', stars: 4, pricePerNight: 170, currency: '$', amenities: ['ركوب أمواج', 'دي جي', 'مطعم شاطئي'] },
  { id: 'h-wel-3', name: 'كيب ويليغاما', description: 'فلل فاخرة جداً تقع على تلة تطل على المحيط.', image: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=800', location: 'ويليغاما', category: 'villas', stars: 5, pricePerNight: 550, currency: '$', amenities: ['مسابح خاصة', 'خصوصية مطلقة', 'طيران داخلي'] },

  // غالي
  { id: 'h-gal-1', name: 'جيتوينج لايت هاوس', description: 'تحفة معمارية تطل على الصخور والمحيط.', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800', location: 'غالي', category: '5star', stars: 5, pricePerNight: 240, currency: '$', amenities: ['تاريخي', 'مسبح لامتناهي', 'موقع حصن غالي'] },
  { id: 'h-gal-2', name: 'أماري غالي', description: 'فخامة عصرية وإطلالات مباشرة على البحر من جميع الغرف.', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800', location: 'غالي', category: '5star', stars: 5, pricePerNight: 210, currency: '$', amenities: ['شاطئ', 'روف توب بار', 'جيم'] },
  { id: 'h-gal-3', name: 'فندق لو غراند غالي', description: 'إطلالة مذهلة على حصن غالي والمنارة.', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800', location: 'غالي', category: '5star', stars: 5, pricePerNight: 260, currency: '$', amenities: ['إطلالة الحصن', 'مسبح', 'مطعم فاخر'] },

  // هاتون
  { id: 'h-hat-1', name: 'سيلان تي ترايلز - سمر فيل', description: 'العيش في منزل استعماري فاخر وسط مزارع الشاي.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800', location: 'هاتون', category: 'boutique', stars: 5, pricePerNight: 600, currency: '$', amenities: ['خادم خاص', 'جولات شاي', 'هدوء تام'] },
  { id: 'h-hat-2', name: 'كاسل راي بنغالو', description: 'إطلالة ساحرة على بحيرة كاسل راي في هاتون.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800', location: 'هاتون', category: 'villas', stars: 5, pricePerNight: 400, currency: '$', amenities: ['إطلالة بحيرة', 'طعام عضوي', 'شاي المساء'] },
  { id: 'h-hat-3', name: 'تي فور هاوس', description: 'بساطة وراحة في قلب الطبيعة الخضراء.', image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?q=80&w=800', location: 'هاتون', category: '3star', stars: 3, pricePerNight: 75, currency: '$', amenities: ['إطلالة جبلية', 'مسارات مشي', 'جو بارد'] }
];

export const HALAL_RESTAURANTS: Restaurant[] = [
  { id: 'r1', name: 'ذا لاغون كولومبو', city: 'كولومبو', cuisine: 'بحري حلال', description: 'أفخم مطعم بحري يقدم صيد اليوم الطازج.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600', rating: 5, address: 'فندق سينامون غراند' },
  { id: 'r2', name: 'مسلم هوتيل كاندي', city: 'كاندي', cuisine: 'سريلانكي حلال', description: 'مطعم تاريخي يشتهر بالبرياني والكوتو روتي.', image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=600', rating: 4.5, address: 'وسط كاندي' },
  { id: 'r3', name: 'غراند إنديان نوارا إليا', city: 'نوارا إليا', cuisine: 'هندي حلال', description: 'أفضل مذاق هندي أصيل في الجبال الباردة.', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600', rating: 4.8, address: 'بجانب فندق غراند' },
  { id: 'r4', name: 'مطعم أريحا نيجومبو', city: 'نيجومبو', cuisine: 'عربي حلال', description: 'مشويات وأطباق عربية متنوعة للمسافرين.', image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=600', rating: 4.2, address: 'طريق الشاطئ' },
  { id: 'r5', name: 'إنديان هت غالي', city: 'غالي', cuisine: 'هندي حلال', description: 'إطلالة على الحصن وطعام هندي شهي.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600', rating: 4, address: 'حصن غالي' }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'negombo',
    name: 'نيجومبو',
    description: 'بوابة سريلانكا وأول محطة للراحة والاسترخاء بعد عناء السفر.',
    image: 'https://images.unsplash.com/photo-1584285418504-0051b63c32e9?q=80&w=800',
    icon: '🏝️',
    attractions: [
      { id: 'n1', name: 'سوق السمك الشعبي', description: 'مشاهدة حياة الصيادين وتجارة الأسماك التقليدية على الشاطئ.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600' },
      { id: 'n2', name: 'القنوات الهولندية', description: 'جولة بالقارب في القنوات المائية التاريخية الهادئة.', image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=600' },
      { id: 'n3', name: 'شاطئ نيجومبو الذهبي', description: 'مكان مثالي لمشاهدة غروب الشمس والاستمتاع بالمشي.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600' }
    ]
  },
  {
    id: 'dambulla',
    name: 'دبولة',
    description: 'قلب الحضارة السريلانكية ومنبع التاريخ في المثلث الثقافي.',
    image: 'https://images.unsplash.com/photo-1625406853802-820d99dc3a61?q=80&w=800',
    icon: '🗿',
    attractions: [
      { id: 'd1', name: 'معبد الكهوف الذهبي', description: 'مجموعة مذهلة من التماثيل واللوحات داخل كهوف تاريخية.', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?q=80&w=600' },
      { id: 'd2', name: 'صخرة سيجيريا (الأسد)', description: 'أعجوبة معمارية فوق صخرة عملاقة في وسط الغابة.', image: 'https://images.unsplash.com/photo-1580196782182-3759bc438902?q=80&w=600' },
      { id: 'd3', name: 'سفاري في المناديل', description: 'مشاهدة قطعان الفيلة البرية في بيئتها الطبيعية.', image: 'https://images.unsplash.com/photo-1552423814-1493d303ec62?q=80&w=600' }
    ]
  },
  {
    id: 'kandy',
    name: 'كاندي',
    description: 'مدينة التراث العالمي والجو المعتدل والبحيرة الساحرة.',
    image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800',
    icon: '🕌',
    attractions: [
      { id: 'k1', name: 'معبد السن المقدس', description: 'أهم معلم ثقافي وديني في سريلانكا يضم بقايا سن بوذا.', image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=600' },
      { id: 'k2', name: 'الحديقة النباتية الملكية', description: 'واحدة من أجمل وأقدم الحدائق النباتية في آسيا.', image: 'https://images.unsplash.com/photo-1544605170-384784466981?q=80&w=600' },
      { id: 'k3', name: 'بحيرة كاندي', description: 'جولة مشي هادئة حول البحيرة في قلب المدينة.', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=600' }
    ]
  },
  {
    id: 'nuwara-eliya',
    name: 'نوارا إليا',
    description: 'إنجلترا الصغيرة، حيث الجبال الخضراء ومزارع الشاي والجو البارد.',
    image: 'https://images.unsplash.com/photo-1544605170-384784466981?q=80&w=800',
    icon: '☕',
    attractions: [
      { id: 'ne1', name: 'مزارع ومصانع الشاي', description: 'تجربة قطف الشاي ومعرفة مراحل تصنيعه وتذوق أفضل الأنواع.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600' },
      { id: 'ne2', name: 'بحيرة غريغوري', description: 'أنشطة ركوب القوارب والمهرجانات العائلية والألعاب.', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600' },
      { id: 'ne3', name: 'حديقة فيكتوريا', description: 'حديقة منسقة بأجمل الزهور والنباتات النادرة.', image: 'https://images.unsplash.com/photo-1544605170-384784466981?q=80&w=600' }
    ]
  },
  {
    id: 'ella',
    name: 'إيلا',
    description: 'جنة عشاق الطبيعة والمغامرة والمناظر الجبلية الخلابة.',
    image: 'https://images.unsplash.com/photo-1582260654013-10d93544d934?q=80&w=800',
    icon: '🧗',
    attractions: [
      { id: 'e1', name: 'جسر الأقواس التسعة', description: 'أشهر جسر قطار في العالم يمر وسط غابة كثيفة.', image: 'https://images.unsplash.com/photo-1582260654013-10d93544d934?q=80&w=600' },
      { id: 'e2', name: 'قمة آدم الصغيرة', description: 'رحلة تسلق ممتعة وسهلة تطل على وادي إيلا.', image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?q=80&w=600' },
      { id: 'e3', name: 'شلالات راوانا', description: 'واحد من أجمل الشلالات التي يمكن الوصول إليها بسهولة.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600' }
    ]
  },
  {
    id: 'yala',
    name: 'يالا',
    description: 'أفضل مكان لسفاري الحياة البرية ورؤية الفهود والفيلة.',
    image: 'https://images.unsplash.com/photo-1552423814-1493d303ec62?q=80&w=800',
    icon: '🐆',
    attractions: [
      { id: 'y1', name: 'الحديقة الوطنية يالا', description: 'رحلة سفاري بالدفع الرباعي لمشاهدة الحيوانات المفترسة.', image: 'https://images.unsplash.com/photo-1552423814-1493d303ec62?q=80&w=600' },
      { id: 'y2', name: 'معبد سيثول باهوا', description: 'دير قديم يقع داخل الغابة البرية.', image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=600' },
      { id: 'y3', name: 'شاطئ يالا البري', description: 'شاطئ بكر حيث تلتقي الغابة بالمحيط الهندي.', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=600' }
    ]
  },
  {
    id: 'mirissa',
    name: 'ميريسا',
    description: 'مدينة الشواطئ الهادئة ومنطلق رحلات الحيتان والدلافين.',
    image: 'https://images.unsplash.com/photo-1550965314-9f26839366df?q=80&w=800',
    icon: '🐋',
    attractions: [
      { id: 'm1', name: 'مشاهدة الحيتان والدلافين', description: 'رحلة بحرية لمشاهدة أضخم الكائنات في العالم.', image: 'https://images.unsplash.com/photo-1516646255117-f9f933680173?q=80&w=600' },
      { id: 'm2', name: 'تلة النخيل (Parrot Rock)', description: 'أفضل بقعة لالتقاط الصور البانورامية للمحيط.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600' },
      { id: 'm3', name: 'الرياضات المائية', description: 'تجربة الغوص والسباحة في المياه الفيروزية.', image: 'https://images.unsplash.com/photo-1550965314-9f26839366df?q=80&w=600' }
    ]
  },
  {
    id: 'weligama',
    name: 'ويليغاما',
    description: 'موطن صائدي السمك التقليديين وأجمل خلجان الجنوب.',
    image: 'https://images.unsplash.com/photo-1579606032822-2616a69b768a?q=80&w=800',
    icon: '🏄',
    attractions: [
      { id: 'w1', name: 'صيادي السمك على الركائز', description: 'مشاهدة الطريقة الفريدة للصيد السريلانكي التقليدي.', image: 'https://images.unsplash.com/photo-1579606032822-2616a69b768a?q=80&w=600' },
      { id: 'w2', name: 'تعلم ركوب الأمواج', description: 'دروس للمبتدئين في واحدة من أفضل بقاع العالم.', image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=600' },
      { id: 'w3', name: 'جزيرة تابروبان', description: 'جزيرة خاصة خلابة قريبة جداً من الشاطئ.', image: 'https://images.unsplash.com/photo-1550965314-9f26839366df?q=80&w=600' }
    ]
  },
  {
    id: 'galle',
    name: 'غالي',
    description: 'مدينة تاريخية تجمع بين العمارة الأوروبية والجمال الاستوائي.',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=800',
    icon: '🏰',
    attractions: [
      { id: 'g1', name: 'حصن غالي الهولندي', description: 'المشي في شوارع الحصن التاريخي المسجل في اليونسكو.', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=600' },
      { id: 'g2', name: 'المنارة القديمة', description: 'أيقونة غالي المطلة على المحيط الهندي.', image: 'https://images.unsplash.com/photo-1578059425538-2ef25893bc3d?q=80&w=600' },
      { id: 'g3', name: 'التسوق في الحصن', description: 'أرقى المتاجر والمقاهي العتيقة في غالي.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600' }
    ]
  },
  {
    id: 'bentota',
    name: 'بنتوتة',
    description: 'عاصمة الرياضات المائية والمنتجعات الفاخرة.',
    image: 'https://images.unsplash.com/photo-1550965314-9f26839366df?q=80&w=800',
    icon: '🚤',
    attractions: [
      { id: 'b1', name: 'نهر مادو جاني', description: 'رحلة نهرية بالقارب لاستكشاف غابات المانغروف والجزر.', image: 'https://images.unsplash.com/photo-1550965314-9f26839366df?q=80&w=600' },
      { id: 'b2', name: 'حديقة لونوغانغا', description: 'تحفة معمارية وطبيعية من تصميم جيفري باوا.', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600' },
      { id: 'b3', name: 'مركز إنقاذ السلاحف', description: 'مشاهدة صغار السلاحف والتعرف على جهود حمايتها.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600' }
    ]
  },
  {
    id: 'hatton',
    name: 'هاتون',
    description: 'قلب الجبال وبحيرات الجمال، المكان الأفضل للاستجمام والهدوء.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    icon: '🌳',
    attractions: [
      { id: 'h1', name: 'بحيرة كاسل راي', description: 'بحيرة ساحرة محاطة بالجبال الخضراء ومزارع الشاي.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600' },
      { id: 'h2', name: 'شلالات ديفون', description: 'واحد من أروع الشلالات في سريلانكا.', image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?q=80&w=600' },
      { id: 'h3', name: 'قمة آدم (جبل الرحمة)', description: 'موقع ديني وطبيعي مذهل لمحبي التسلق.', image: 'https://images.unsplash.com/photo-1544605170-384784466981?q=80&w=600' }
    ]
  },
  {
    id: 'colombo',
    name: 'كولومبو',
    description: 'العاصمة التجارية، مزيج من الحداثة والتراث والأسواق النابضة بالحياة.',
    image: 'https://images.unsplash.com/photo-1588537550170-438902599723?q=80&w=800',
    icon: '🏙️',
    attractions: [
      { id: 'co1', name: 'برج اللوتس', description: 'أطول برج في جنوب آسيا بإطلالة بانورامية.', image: 'https://images.unsplash.com/photo-1588537550170-438902599723?q=80&w=600' },
      { id: 'co2', name: 'غالي فيس غرين', description: 'ساحة شاطئية للاسترخاء وتناول الأطعمة الشعبية.', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600' },
      { id: 'co3', name: 'مجمع تسوق المستشفى الهولندي', description: 'مركز تسوق ومطاعم فاخرة داخل مبنى تاريخي عتيق.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600' }
    ]
  }
];

export const VEHICLES: Vehicle[] = [
  { id: 'v1', name: 'سيارة صالون فاخرة', type: 'سيدان', seats: 4, bags: 2, image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600', pricePerDay: 80 },
  { id: 'v2', name: 'مايباخ VIP', type: 'فاخرة جداً', seats: 4, bags: 3, image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=600', pricePerDay: 250 },
  { id: 'v3', name: 'مرسيدس فيتو / سبرينتر', type: 'فان عائلي', seats: 8, bags: 6, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600', pricePerDay: 120 },
  { id: 'v4', name: 'ميني باص سياحي', type: 'باص صغير', seats: 15, bags: 10, image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600', pricePerDay: 180 },
  { id: 'v5', name: 'باص سياحي كبير', type: 'حافلة كبيرة', seats: 45, bags: 30, image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=600', pricePerDay: 350 }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'sl-premium-7',
    title: 'برنامج سحر الطبيعة - 7 أيام و6 ليالي',
    description: 'رحلة متكاملة تشمل نيجومبو، كاندي، نوارا إليا، وكولومبو مع فنادق 5 نجوم وسائق خاص.',
    price: 1500,
    currency: '$',
    duration: '7 أيام - 6 ليالي',
    days: 7,
    category: 'family',
    isFeatured: true,
    isSpecialOffer: true,
    discountPrice: 1250,
    mainImage: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200',
    gallery: [],
    inclusions: ['إفطار يومي', 'سيارة خاصة مع سائق', 'تذاكر المعالم', 'استقبال في المطار'],
    exclusions: ['تذاكر الطيران الدولية', 'الغداء والعشاء'],
    itinerary: [
      { day: 1, title: 'الوصول ونيجومبو', description: 'الاستقبال والتوجه للفندق في نيجومبو للراحة.', image: 'https://images.unsplash.com/photo-1584285418504-0051b63c32e9?q=80&w=600', activities: ['استقبال', 'راحة'] },
      { day: 2, title: 'كاندي الخضراء', description: 'زيارة ميتم الفيلة والتوجه إلى كاندي.', image: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?q=80&w=600', activities: ['فيلة', 'معبد'] }
    ],
    destinationId: 'kandy'
  },
  {
    id: 'sl-honeymoon-10',
    title: 'باقة شهر العسل الرومانسي - 10 أيام',
    description: 'خصوصية تامة، فنادق بوتيك، عشاء رومانسي، وجولات هادئة في أجمل بقاع سريلانكا.',
    price: 2400,
    currency: '$',
    duration: '10 أيام / 9 ليالي',
    days: 10,
    category: 'honeymoon',
    isFeatured: true,
    isSpecialOffer: false,
    mainImage: 'https://images.unsplash.com/photo-1550965314-9f26839366df?q=80&w=1200',
    gallery: [],
    inclusions: ['فنادق 5 نجوم', 'عشاء خاص', 'تزيين الغرفة', 'سائق خاص'],
    exclusions: [],
    itinerary: [],
    destinationId: 'bentota'
  },
  {
    id: 'sl-luxury-12',
    title: 'برنامج الرفاهية المطلقة (VIP) - 12 يوم',
    description: 'طيران داخلي، طائرات خاصة، فلل بمسبح، وأرقى الخدمات لأصحاب الذوق الرفيع.',
    price: 4500,
    currency: '$',
    duration: '12 يوم / 11 ليالي',
    days: 12,
    category: 'luxury',
    isFeatured: true,
    isSpecialOffer: true,
    discountPrice: 3900,
    mainImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
    gallery: [],
    inclusions: ['طيران داخلي', 'خادم خاص', 'أرقى الفلل', 'VIP استراحة'],
    exclusions: [],
    itinerary: [],
    destinationId: 'colombo'
  }
];

export const REVIEWS: Review[] = [
  { id: 'r1', author: 'أحمد القحطاني', location: 'الرياض، السعودية', rating: 5, date: 'يناير 2024', comment: 'رحلة منظمة بشكل احترافي، السائق كان ممتازاً ومؤدباً.', avatar: 'https://i.pravatar.cc/150?u=r1' },
  { id: 'r2', author: 'فاطمة الكندري', location: 'الكويت', rating: 5, date: 'ديسمبر 2023', comment: 'الفنادق التي تم اختيارها كانت فوق الخيال، الخصوصية كانت رائعة.', avatar: 'https://i.pravatar.cc/150?u=r2' }
];

export const TOUR_CATEGORIES: TourCategory[] = [
  { id: 'honeymoon', title: 'برامج شهر العسل', description: 'رحلات رومانسية هادئة مصممة للعرسان.', image: 'https://images.unsplash.com/photo-1573148164257-8a3952796e6a?q=80&w=800' },
  { id: 'family', title: 'البرامج العائلية', description: 'أنشطة متنوعة تناسب الصغار والكبار في أجمل المنتزهات.', image: 'https://images.unsplash.com/photo-1544605170-384784466981?q=80&w=800' },
  { id: 'nature', title: 'برامج الطبيعة', description: 'استكشاف الغابات المطيرة وأشهر الشلالات.', image: 'https://images.unsplash.com/photo-1562602833-0f4ab2fc46e3?q=80&w=800' },
  { id: 'safari', title: 'برامج السفاري', description: 'مغامرات برية لمشاهدة الفيلة والفهود.', image: 'https://images.unsplash.com/photo-1552423814-1493d303ec62?q=80&w=800' }
];
