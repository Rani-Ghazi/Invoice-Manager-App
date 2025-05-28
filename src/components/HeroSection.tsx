
import { MessageSquare, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with dreamy gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-transparent to-white/50"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/40 rounded-full filter blur-2xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 text-sm">أكثر من 100+ عميل راضٍ</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            فواتير احترافية باسمك،{" "}
            <span className="text-invoice-blue-600 relative">
              بدون تعقيد
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-invoice-blue-200 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            أنشئ، أرسل، وتابع فواتيرك من جوالك في ثوانٍ
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-10 shadow-xl border border-white/50">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نظام رقمي شامل للفواتير، بدون أجهزة أو اشتراكات شهرية.<br />
              جاهز باسمك، مع دعم كامل وتصميم مخصص.
            </p>
            
            {/* Key benefits */}
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>إعداد فوري</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>دعم مجاني أول شهر</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" />
                <span>بدون اشتراكات</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-invoice-blue-600 hover:bg-invoice-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              اطلب الآن عبر الواتساب
            </Button>
            
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              📱 الرقم: 0096895454284
            </div>
          </div>
          
          <div className="flex justify-center">
            <span className="inline-flex items-center bg-gradient-to-r from-green-100 to-green-50 text-green-800 px-6 py-3 rounded-full text-lg font-medium shadow-md">
              💵 80 ريال فقط - دفعة واحدة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
