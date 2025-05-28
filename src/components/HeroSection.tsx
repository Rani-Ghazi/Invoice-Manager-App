
import { MessageSquare, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden clean-gradient">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-blue-gray-600 font-medium">أكثر من 100+ عميل راضٍ</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-gray-900 mb-8 leading-tight">
            فواتير احترافية باسمك،{" "}
            <span className="text-blue-gray-700">
              بدون تعقيد
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-gray-600 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
            أنشئ، أرسل، وتابع فواتيرك من جوالك في ثوانٍ
          </p>
          
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 soft-shadow border border-blue-gray-100 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-blue-gray-700 leading-relaxed mb-8 font-medium">
              نظام رقمي شامل للفواتير، بدون أجهزة أو اشتراكات شهرية.<br />
              جاهز باسمك، مع دعم كامل وتصميم مخصص.
            </p>
            
            {/* Key benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 text-soft-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">إعداد فوري</span>
              </div>
              <div className="flex items-center gap-3 text-soft-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">دعم مجاني أول شهر</span>
              </div>
              <div className="flex items-center gap-3 text-soft-green-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">بدون اشتراكات</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-blue-gray-700 hover:bg-blue-gray-800 text-white px-10 py-4 text-lg rounded-xl font-semibold transition-all duration-200 flex items-center gap-3 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              اطلب الآن عبر الواتساب
            </Button>
            
            <div className="text-blue-gray-600 flex items-center gap-2 font-medium">
              <MessageSquare className="w-4 h-4" />
              📱 الرقم: 0096895454284
            </div>
          </div>
          
          <div className="flex justify-center">
            <span className="inline-flex items-center bg-soft-green-100 text-soft-green-800 px-8 py-4 rounded-2xl text-xl font-semibold">
              💵 80 ريال فقط - دفعة واحدة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
