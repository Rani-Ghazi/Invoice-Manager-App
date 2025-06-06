
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
          <div className="text-center lg:text-right">
            <div className="mb-8 animate-modern-fade-in">
              <span className="inline-flex items-center clean-card text-slate-600 px-6 py-3 rounded-full text-sm font-medium border border-slate-200 hover:scale-105 transition-transform duration-300">
                <span className="animate-pulse mr-2">✨</span> موثوق من أكثر من 500 عميل
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-800 mb-8 leading-tight animate-slide-up-bounce animate-delay-200 hover:text-blue-700 transition-colors duration-500">
              حوّل فواتيرك إلى إلكترونية{" "}
              <span className="text-blue-600 font-normal relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-300/50 after:bottom-0 after:left-0 animate-pulse">
                بسهولة واحترافية
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto lg:mx-0 animate-modern-fade-in animate-delay-400">
              أنشئ، أرسل، وتابع فواتيرك من جوالك – بدون ورق ولا وجع راس
            </p>
            
            <div className="clean-card rounded-3xl p-10 mb-12 border border-slate-200 hover:shadow-xl transition-all duration-300 animate-scale-in-elastic animate-delay-500 hover:border-blue-200">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 font-normal">
                كل شيء رقمي... بدون أجهزة ولا برامج معقدة.<br />
                <span className="text-blue-600 animate-pulse">جاهز باسمك</span>، مع دعم كامل وتصميم مخصص.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 animate-scale-in-elastic animate-delay-600">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-medium transition-all duration-300 flex items-center gap-3 rounded-2xl hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-in animate-delay-800"
              >
                <MessageSquare className="w-6 h-6 animate-pulse" strokeWidth={1.5} />
                اطلب الآن عبر واتساب
              </Button>
              
              <div className="flex items-center gap-4 text-slate-600 hover:text-slate-800 transition-colors">
                <div className="flex items-center gap-2 animate-fade-in animate-delay-700">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">متاح الآن</span>
                </div>
                <div className="text-sm animate-fade-in animate-delay-800">
                  إعداد فوري في 24 ساعة
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-first animate-slide-in-right animate-delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-bounce-in">
              <img 
                src="/lovable-uploads/194495d6-c732-4203-a866-83d44c09593b.png" 
                alt="نظام فواتير إلكترونية احترافي"
                className="w-full h-auto object-cover"
              />
              
              {/* Animated Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
              
              {/* Interactive Elements */}
              <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-blue-600/30 backdrop-blur-sm animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-blue-400/40 backdrop-blur-sm animate-ping" style={{ animationDuration: '2.5s' }}></div>
              
              {/* Animated Decorative Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg animate-bounce-in animate-delay-1000 hover:scale-105 transition-transform duration-300 border border-blue-100">
                <span className="text-blue-600 font-medium text-sm flex items-center gap-1">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  فواتير احترافية
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
