
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dreamy-gradient">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-flex items-center clean-card text-slate-600 px-6 py-3 rounded-full text-sm font-medium border border-slate-200">
              ✨ أكثر من 500+ عميل راضٍ
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight">
            فواتير احترافية باسمك،{" "}
            <span className="text-slate-600 font-normal">
              بدون تعقيد
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            أنشئ، أرسل، وتابع فواتيرك من جوالك في ثوانٍ
          </p>
          
          <div className="clean-card rounded-3xl p-10 mb-12 max-w-4xl mx-auto border border-slate-200">
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 font-normal">
              نظام رقمي شامل للفواتير، بدون أجهزة أو اشتراكات شهرية.<br />
              جاهز باسمك، مع دعم كامل وتصميم مخصص.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8 mb-10">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-slate-700 hover:bg-slate-800 text-white px-10 py-4 text-lg font-medium transition-all duration-300 flex items-center gap-3 rounded-2xl hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="w-6 h-6" strokeWidth={1.5} />
              اطلب الآن عبر واتساب
            </Button>
          </div>
          
          <div className="flex justify-center">
            <span className="inline-flex items-center clean-card text-slate-700 px-8 py-4 rounded-2xl text-xl font-medium border border-slate-200">
              💵 80 ريال فقط - دفعة واحدة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
