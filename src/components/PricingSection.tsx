
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
    <section className="py-20 dreamy-gradient-alt relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
            سعر واضح، <span className="text-slate-600">بدون مفاجآت</span>
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            استثمار لمرة واحدة يوفر عليك الوقت والمال
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="clean-card rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-emerald-500 text-white px-6 py-2 rounded-full font-medium text-sm">
                العرض الأفضل
              </span>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-5xl font-medium text-slate-800 mb-3">
                80 ريال
              </div>
              <div className="text-slate-600 text-lg font-normal">
                دفعة واحدة فقط
              </div>
              <div className="text-slate-500 mt-1 text-sm">
                بدون اشتراكات شهرية
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium text-slate-800 mb-4 text-center">
                يشمل الباقة:
              </h3>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 font-normal text-sm">
                    <CheckCircle className="text-emerald-500 ml-3 w-4 h-4" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 text-base font-medium transition-colors flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              احصل على نظامك الآن
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
