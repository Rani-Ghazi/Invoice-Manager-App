
import { FileText, CreditCard, Send, Shield, Smartphone, BarChart3, Settings } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "إنشاء فواتير احترافية باسمك وشعارك",
      description: "تصميم مخصص يعكس هويتك التجارية",
      color: "bg-blue-gray-600"
    },
    {
      icon: CreditCard,
      title: "دعم كامل للإيصالات والمدفوعات الجزئية",
      description: "تتبع المدفوعات والمبالغ المستحقة بسهولة",
      color: "bg-soft-green-600"
    },
    {
      icon: Send,
      title: "ملفات PDF قابلة للإرسال عبر واتساب أو الإيميل",
      description: "إرسال فوري للفواتير دون تعقيد",
      color: "bg-blue-gray-600"
    },
    {
      icon: Shield,
      title: "تخزين آمن للبيانات ونسخ احتياطية سحابية",
      description: "بياناتك محفوظة ومؤمنة دائماً",
      color: "bg-soft-green-600"
    },
    {
      icon: Smartphone,
      title: "لوحة تحكم بسيطة من الجوال أو المتصفح",
      description: "إدارة سهلة من أي مكان وفي أي وقت",
      color: "bg-blue-gray-600"
    },
    {
      icon: BarChart3,
      title: "تقارير شهرية واختيارية بصيغة Excel",
      description: "تحليل مبيعاتك ومتابعة أداء عملك",
      color: "bg-soft-green-600"
    },
    {
      icon: Settings,
      title: "إعداد لمرة واحدة، مع دعم وتعديلات مجانية أول شهر",
      description: "نساعدك في البداية حتى تتقن النظام",
      color: "bg-blue-gray-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-gray-900 mb-6">
            لماذا <span className="text-blue-gray-700">Invoice Manager</span>؟
          </h2>
          <p className="text-xl text-blue-gray-600 max-w-2xl mx-auto font-medium">
            كل ما تحتاجه لإدارة فواتيرك بشكل احترافي ومنظم
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl soft-shadow hover:hover-soft-shadow transition-all duration-300 border border-blue-gray-100 group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-gray-900 mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-blue-gray-600 leading-relaxed font-medium">
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
