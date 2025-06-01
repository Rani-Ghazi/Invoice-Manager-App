
import { Smartphone, Share2, BarChart3, Shield, Settings } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "كل شيء من جوالك",
      description: "إصدار، إرسال، متابعة، طباعة - كل شيء من مكان واحد بدون تعقيد أو برامج إضافية."
    },
    {
      icon: Share2,
      title: "توفير وقت ومجهود",
      description: "لا أوراق، لا فوضى - وداعًا للفواتير اليدوية والأرشيف الورقي المعقد."
    },
    {
      icon: Share2,
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
      icon: Settings,
      title: "إعداد سريع مع دعم شخصي",
      description: "نوفر لك كل الدعم والتدريب حتى تتقن النظام بدون مشاكل."
    }
  ];

  return (
    <section className="py-20 bg-white relative" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
              className="clean-card p-8 rounded-2xl transition-all duration-300 group hover:scale-[1.02] border border-slate-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6 group-hover:from-slate-200 group-hover:to-slate-300 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-slate-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-normal">
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
