
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-br from-invoice-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-invoice-blue-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-invoice-blue-300/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            سعر واضح، <span className="text-invoice-blue-600">بدون مفاجآت</span>
          </h2>
          <p className="text-lg text-gray-600">
            استثمار لمرة واحدة يوفر عليك الوقت والمال
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-invoice-blue-200 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-invoice-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                العرض الأفضل
              </span>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-invoice-blue-600 mb-2">
                80 ريال
              </div>
              <div className="text-gray-600 text-lg">
                دفعة واحدة فقط
              </div>
              <div className="text-sm text-gray-500 mt-2">
                بدون اشتراكات شهرية
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4 text-center">
                يشمل الباقة:
              </h3>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 ml-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-invoice-blue-600 hover:bg-invoice-blue-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              احصل على نظامك الآن
            </Button>
            
            <div className="text-center mt-4 text-sm text-gray-600">
              📱 الرقم: 0096895454284
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
