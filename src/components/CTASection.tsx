
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-invoice-blue-600 to-invoice-blue-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            جاهز تبدأ؟
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            احصل على نظامك الآن عبر الواتساب 👇
          </p>
          
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="text-3xl font-bold mb-2">80 ريال فقط</div>
            <div className="text-lg text-blue-100">دفعة واحدة - بدون اشتراكات</div>
          </div>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-invoice-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <MessageSquare className="w-5 h-5" />
            تواصل معنا الآن
          </Button>
          
          <div className="mt-6 text-blue-200">
            📱 0096895454284
          </div>
          
          <div className="mt-8 text-sm text-blue-200">
            ✅ دعم مجاني أول شهر | ✅ تعديلات مجانية | ✅ شرح بالفيديو
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
