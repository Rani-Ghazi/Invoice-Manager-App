
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="py-24 bg-blue-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            جاهز تبدأ؟
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-gray-200 font-medium">
            احصل على نظامك الآن عبر الواتساب 👇
          </p>
          
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12">
            <div className="text-4xl font-bold mb-4">80 ريال فقط</div>
            <div className="text-xl text-blue-gray-200 font-medium">دفعة واحدة - بدون اشتراكات</div>
          </div>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-blue-gray-800 hover:bg-blue-gray-50 px-10 py-4 text-lg rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 mx-auto mb-8"
          >
            <MessageSquare className="w-5 h-5" />
            تواصل معنا الآن
          </Button>
          
          <div className="mb-10 text-blue-gray-200 text-lg font-medium">
            📱 0096895454284
          </div>
          
          <div className="text-blue-gray-300 font-medium">
            ✅ دعم مجاني أول شهر | ✅ تعديلات مجانية | ✅ شرح بالفيديو
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
