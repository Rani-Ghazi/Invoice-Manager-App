
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with dreamy gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-transparent to-white/50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/40 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            فواتير احترافية باسمك،{" "}
            <span className="text-invoice-blue-600">بدون تعقيد</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            أنشئ، أرسل، وتابع فواتيرك من جوالك في ثوانٍ
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-10 shadow-xl border border-white/50">
            <p className="text-lg text-gray-700 leading-relaxed">
              نظام رقمي شامل للفواتير، بدون أجهزة أو اشتراكات شهرية.<br />
              جاهز باسمك، مع دعم كامل وتصميم مخصص.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-invoice-blue-600 hover:bg-invoice-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              اطلب الآن عبر الواتساب
            </Button>
            
            <div className="text-sm text-gray-600">
              📱 الرقم: 0096895454284
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              💵 80 ريال فقط - دفعة واحدة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
