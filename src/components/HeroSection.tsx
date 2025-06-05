
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dreamy-gradient">
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-right animate-fade-in">
            <div className="mb-8">
              <span className="inline-flex items-center clean-card text-slate-600 px-6 py-3 rounded-full text-sm font-medium border border-slate-200 hover:scale-105 transition-transform duration-300">
                ✨ موثوق من أكثر من 500 عميل
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight hover:scale-[1.02] transition-transform duration-500">
              فواتير إلكترونية باسم نشاطك...{" "}
              <span className="text-slate-600 font-normal">
                بشكل احترافي وسهل
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
              أنشئ، أرسل، وتابع فواتيرك من جوالك – بدون ورق ولا وجع راس
            </p>
            
            <div className="clean-card rounded-3xl p-10 mb-12 border border-slate-200 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 font-normal">
                كل شيء رقمي... بدون أجهزة ولا برامج معقدة.<br />
                جاهز باسمك، مع دعم كامل وتصميم مخصص.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start gap-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-slate-700 hover:bg-slate-800 text-white px-10 py-4 text-lg font-medium transition-all duration-300 flex items-center gap-3 rounded-2xl hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="w-6 h-6" strokeWidth={1.5} />
                اطلب الآن عبر واتساب
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-first animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <img 
                src="/lovable-uploads/194495d6-c732-4203-a866-83d44c09593b.png" 
                alt="نظام فواتير إلكترونية احترافي"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
