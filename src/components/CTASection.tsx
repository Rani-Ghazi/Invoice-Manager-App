
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            جاهز تبدأ؟
          </h2>
          <p className="text-lg md:text-xl mb-10 text-slate-300 font-normal">
            احصل على نظامك الآن عبر الواتساب 👇
          </p>
          
          <div className="max-w-sm mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10">
            <div className="text-3xl font-medium mb-2">80 ريال فقط</div>
            <div className="text-slate-300 font-normal">دفعة واحدة - بدون اشتراكات</div>
          </div>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-slate-800 hover:bg-slate-50 px-8 py-3 text-base font-medium transition-colors flex items-center gap-3 mx-auto mb-8"
          >
            <MessageSquare className="w-5 h-5" />
            تواصل معنا الآن
          </Button>
          
          <div className="text-slate-400 font-normal">
            ✅ دعم مجاني أول شهر | ✅ تعديلات مجانية | ✅ شرح بالفيديو
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
