
import { Smartphone, Zap, Send, BarChart3, Shield, HeadphonesIcon } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "كل شيء من جوالك",
      description: "إصدار، إرسال، متابعة، طباعة - كل شيء من مكان واحد بدون تعقيد أو برامج إضافية."
    },
    {
      icon: Zap,
      title: "توفير وقت ومجهود",
      description: "لا أوراق، لا فوضى - وداعًا للفواتير اليدوية والأرشيف الورقي المعقد."
    },
    {
      icon: Send,
      title: "خيارات المشاركة والطباعة",
      description: "أرسل فواتيرك عبر واتساب والإيميل، أو اطبعها بجودة احترافية حسب حاجتك."
    },
    {
      icon: BarChart3,
      title: "تقارير مالية بضغطة زر",
      description: "تابع أداء شركتك بوضوح مع تقارير شهرية وتحليلات مفصلة تساعدك في اتخاذ القرارات الصحيحة."
    },
    {
      icon: Shield,
      title: "دعم ونسخ احتياطية تلقائية",
      description: "بياناتك محفوظة آمنًا في السحابة، ويمكنك استرجاعها في أي وقت دون خوف من فقدانها."
    },
    {
      icon: HeadphonesIcon,
      title: "إعداد سريع مع دعم شخصي",
      description: "نوفر لك كل الدعم والتدريب حتى تتقن النظام بدون مشاكل."
    }
  ];

  return (
    <section className="py-20 bg-white relative" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-modern-fade-in">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
            أبرز مزايا <span className="text-slate-600">Invoice Manager</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            الفواتير الإلكترونية بكل بساطة
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card p-8 rounded-2xl transition-all duration-500 group hover:scale-[1.05] border border-slate-100 animate-scale-in-elastic hover:shadow-2xl"
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <feature.icon className="w-8 h-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal group-hover:text-slate-700 transition-colors duration-300">
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
