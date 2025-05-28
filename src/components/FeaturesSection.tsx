
import { FileText, CreditCard, Send, Shield, Smartphone, BarChart3, Settings } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "إنشاء فواتير احترافية باسمك وشعارك",
      description: "تصميم مخصص يعكس هويتك التجارية",
      color: "bg-blue-500"
    },
    {
      icon: CreditCard,
      title: "دعم كامل للإيصالات والمدفوعات الجزئية",
      description: "تتبع المدفوعات والمبالغ المستحقة بسهولة",
      color: "bg-green-500"
    },
    {
      icon: Send,
      title: "ملفات PDF قابلة للإرسال عبر واتساب أو الإيميل",
      description: "إرسال فوري للفواتير دون تعقيد",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "تخزين آمن للبيانات ونسخ احتياطية سحابية",
      description: "بياناتك محفوظة ومؤمنة دائماً",
      color: "bg-red-500"
    },
    {
      icon: Smartphone,
      title: "لوحة تحكم بسيطة من الجوال أو المتصفح",
      description: "إدارة سهلة من أي مكان وفي أي وقت",
      color: "bg-indigo-500"
    },
    {
      icon: BarChart3,
      title: "تقارير شهرية واختيارية بصيغة Excel",
      description: "تحليل مبيعاتك ومتابعة أداء عملك",
      color: "bg-orange-500"
    },
    {
      icon: Settings,
      title: "إعداد لمرة واحدة، مع دعم وتعديلات مجانية أول شهر",
      description: "نساعدك في البداية حتى تتقن النظام",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-invoice-blue-200 group hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
