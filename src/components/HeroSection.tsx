
import { MessageSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dreamy-gradient">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-600 font-medium text-sm">أكثر من 100+ عميل راضٍ</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-medium text-slate-800 mb-6 leading-tight">
            فواتير احترافية باسمك،{" "}
            <span className="text-slate-600">
              بدون تعقيد
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-normal max-w-2xl mx-auto">
            أنشئ، أرسل، وتابع فواتيرك من جوالك في ثوانٍ
          </p>
          
          <div className="clean-card rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
              نظام رقمي شامل للفواتير، بدون أجهزة أو اشتراكات شهرية.<br />
              جاهز باسمك، مع دعم كامل وتصميم مخصص.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6 mb-10">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 text-base font-medium transition-colors flex items-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              اطلب الآن عبر واتساب
            </Button>
          </div>
          
          <div className="flex justify-center">
            <span className="inline-flex items-center clean-card text-slate-700 px-6 py-3 rounded-xl text-lg font-medium">
              💵 80 ريال فقط - دفعة واحدة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
