
import { Button } from "@/components/ui/button";
import { MessageSquare, CheckCircle } from "lucide-react";

const PricingSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  const includes = [
    "إعداد النظام بالكامل",
    "تصميم فواتيرك باسمك وشعارك",
    "دعم شخصي أول شهر",
    "فيديو شرح + تعديلات مجانية",
    "تدريب شخصي على النظام",
    "نسخ احتياطية تلقائية"
  ];

  return (
    <section className="py-20 dreamy-gradient-alt relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
            اشتراك سنوي، <span className="text-slate-600">بدون تعقيدات</span>
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            80 ريال عماني سنوياً فقط
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="feature-card rounded-2xl p-8 relative animate-scale-in animate-delay-200 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover-glow">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-bounce-in animate-delay-400">
              <span className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-blue-600 transition-colors duration-300">
                العرض الأفضل
              </span>
            </div>
            
            <div className="text-center mb-8 animate-fade-in animate-delay-300">
              <div className="text-5xl font-medium text-slate-800 mb-3 hover:text-blue-600 transition-colors duration-500">
                80 ريال عماني
              </div>
              <div className="text-slate-600 text-lg font-normal">
                اشتراك سنوي
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium text-slate-800 mb-4 text-center animate-fade-in animate-delay-400">
                السعر يشمل:
              </h3>
              <ul className="space-y-3">
                {includes.map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700 font-normal text-sm animate-slide-in-right hover:text-slate-800 transition-colors duration-300" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                    <CheckCircle className="text-blue-500 ml-3 w-4 h-4 hover:scale-110 transition-transform duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium transition-all duration-500 flex items-center justify-center gap-3 hover:scale-105 hover:shadow-xl animate-bounce-in animate-delay-600"
            >
              <MessageSquare className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
              احصل على نظامك الآن
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
