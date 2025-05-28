
import { FileText, Phone, Mail } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: "🎨",
      title: "إنشاء فواتير احترافية باسمك وشعارك",
      description: "تصميم مخصص يعكس هويتك التجارية"
    },
    {
      icon: "💰",
      title: "دعم كامل للإيصالات والمدفوعات الجزئية",
      description: "تتبع المدفوعات والمبالغ المستحقة بسهولة"
    },
    {
      icon: "📄",
      title: "ملفات PDF قابلة للإرسال عبر واتساب أو الإيميل",
      description: "إرسال فوري للفواتير دون تعقيد"
    },
    {
      icon: "☁️",
      title: "تخزين آمن للبيانات ونسخ احتياطية سحابية",
      description: "بياناتك محفوظة ومؤمنة دائماً"
    },
    {
      icon: "📱",
      title: "لوحة تحكم بسيطة من الجوال أو المتصفح",
      description: "إدارة سهلة من أي مكان وفي أي وقت"
    },
    {
      icon: "📊",
      title: "تقارير شهرية واختيارية بصيغة Excel",
      description: "تحليل مبيعاتك ومتابعة أداء عملك"
    },
    {
      icon: "⚡",
      title: "إعداد لمرة واحدة، مع دعم وتعديلات مجانية أول شهر",
      description: "نساعدك في البداية حتى تتقن النظام"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            لماذا <span className="text-invoice-blue-600">Invoice Manager</span>؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            كل ما تحتاجه لإدارة فواتيرك بشكل احترافي ومنظم
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-invoice-blue-200 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
