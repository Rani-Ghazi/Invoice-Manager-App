
import { FileText, CreditCard, Send, Shield, Smartphone, BarChart3, Settings } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "إنشاء فواتير احترافية باسمك وشعارك",
      description: "تصميم مخصص يعكس هويتك التجارية"
    },
    {
      icon: CreditCard,
      title: "دعم كامل للإيصالات والمدفوعات الجزئية",
      description: "تتبع المدفوعات والمبالغ المستحقة بسهولة"
    },
    {
      icon: Send,
      title: "ملفات PDF قابلة للإرسال عبر واتساب أو الإيميل",
      description: "إرسال فوري للفواتير دون تعقيد"
    },
    {
      icon: Shield,
      title: "تخزين آمن للبيانات ونسخ احتياطية سحابية",
      description: "بياناتك محفوظة ومؤمنة دائماً"
    },
    {
      icon: Smartphone,
      title: "لوحة تحكم بسيطة من الجوال أو المتصفح",
      description: "إدارة سهلة من أي مكان وفي أي وقت"
    },
    {
      icon: BarChart3,
      title: "تقارير شهرية واختيارية بصيغة Excel",
      description: "تحليل مبيعاتك ومتابعة أداء عملك"
    },
    {
      icon: Settings,
      title: "إعداد لمرة واحدة، مع دعم وتعديلات مجانية أول شهر",
      description: "نساعدك في البداية حتى تتقن النظام"
    }
  ];

  return (
    <section className="py-20 bg-white relative" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
            لماذا <span className="text-slate-600">Invoice Manager</span>؟
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            كل ما تحتاجه لإدارة فواتيرك بشكل احترافي ومنظم
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="clean-card p-6 rounded-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal text-sm">
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
