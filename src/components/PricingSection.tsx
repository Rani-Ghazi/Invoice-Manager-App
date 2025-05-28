
import { Button } from "@/components/ui/button";
import { MessageSquare, CheckCircle } from "lucide-react";

const PricingSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  const includes = [
    "إعداد النظام كاملاً",
    "تصميم مخصص باسمك وشعارك",
    "دعم كامل أول شهر",
    "شرح بالفيديو",
    "تعديلات مجانية أول شهر",
    "تدريب شخصي على النظام"
  ];

  return (
    <section className="py-24 clean-gradient relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-gray-900 mb-6">
            سعر واضح، <span className="text-blue-gray-700">بدون مفاجآت</span>
          </h2>
          <p className="text-xl text-blue-gray-600 font-medium">
            استثمار لمرة واحدة يوفر عليك الوقت والمال
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-3xl soft-shadow p-10 border border-blue-gray-100 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-soft-green-600 text-white px-8 py-3 rounded-full font-semibold">
                العرض الأفضل
              </span>
            </div>
            
            <div className="text-center mb-10">
              <div className="text-6xl font-bold text-blue-gray-800 mb-4">
                80 ريال
              </div>
              <div className="text-blue-gray-600 text-xl font-medium">
                دفعة واحدة فقط
              </div>
              <div className="text-blue-gray-500 mt-2">
                بدون اشتراكات شهرية
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="font-semibold text-blue-gray-800 mb-6 text-center text-lg">
                يشمل الباقة:
              </h3>
              <ul className="space-y-4">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center text-blue-gray-700 font-medium">
                    <CheckCircle className="text-soft-green-600 ml-3 w-5 h-5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-blue-gray-700 hover:bg-blue-gray-800 text-white py-4 text-lg rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              احصل على نظامك الآن
            </Button>
            
            <div className="text-center mt-6 text-blue-gray-600 font-medium">
              📱 الرقم: 0096895454284
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
