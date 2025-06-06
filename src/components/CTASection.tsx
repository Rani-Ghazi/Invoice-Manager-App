
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
          <h2 className="text-3xl md:text-5xl font-light mb-8 animate-fade-in hover:scale-[1.02] transition-transform duration-500">
            جاهز تبسّط شغلك؟
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 font-light animate-fade-in animate-delay-200">
            احصل على نظامك الآن عبر واتساب 👇
          </p>
          
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20 animate-scale-in animate-delay-300 hover:scale-[1.02] transition-all duration-500 hover-glow">
            <div className="text-4xl font-light mb-3 hover:text-emerald-300 transition-colors duration-300">80 ريال سنوياً</div>
            <div className="text-slate-300 font-light text-lg">اشتراك بسيط وواضح</div>
          </div>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 text-lg font-medium transition-all duration-500 flex items-center gap-3 mx-auto mb-10 rounded-2xl hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce-in animate-delay-500"
          >
            <MessageSquare className="w-6 h-6 transition-transform duration-300 hover:scale-110" strokeWidth={1.5} />
            تواصل معنا الآن
          </Button>
          
          <div className="text-slate-400 font-light text-lg animate-fade-in animate-delay-600">
            ✅ دعم كامل | ✅ تصميم مخصص لشركتك | ✅ شرح بالفيديو
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
