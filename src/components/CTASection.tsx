
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CTASection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-8">
            جاهز تبسّط شغلك؟
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light">
            احصل على نظامك الآن عبر واتساب 👇
          </p>
          
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
            <div className="text-4xl font-light mb-3">80 ريال سنوياً</div>
            <div className="text-slate-300 font-light text-lg">مرة وحدة وتنساها</div>
          </div>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-slate-800 hover:bg-slate-50 px-10 py-4 text-lg font-medium transition-all duration-300 flex items-center gap-3 mx-auto mb-10 rounded-2xl hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <MessageSquare className="w-6 h-6" strokeWidth={1.5} />
            تواصل معنا الآن
          </Button>
          
          <div className="text-slate-400 font-light text-lg">
            ✅ دعم كامل | ✅ تصميم مخصص لشركتك | ✅ شرح بالفيديو
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
