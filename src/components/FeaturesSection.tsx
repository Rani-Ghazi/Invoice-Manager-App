
import { FileText, Smartphone, Printer, Send, BarChart3, Shield, Settings } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "فواتير إلكترونية احترافية بدون تعقيد",
      description: "وداعًا للأوراق والفواتير اليدوية. أنشئ، أرسل، وادير فواتيرك بالكامل بشكل رقمي من جوالك أو الكمبيوتر بسهولة تامة."
    },
    {
      icon: Smartphone,
      title: "إدارة متكاملة من أي مكان",
      description: "سواء كنت في المكتب أو في الميدان، تقدر تصدر فواتيرك، عروض الأسعار، وتتبع المدفوعات والمصروفات والربح والخسارة بثوانٍ معدودة."
    },
    {
      icon: Printer,
      title: "ميزة الطباعة متاحة",
      description: "لو تحتاج نسخة ورقية، اطبع الفواتير بسهولة بجودة احترافية، بدون الحاجة لاستخدام برامج إضافية."
    },
    {
      icon: Send,
      title: "إرسال مباشر عبر واتساب والإيميل",
      description: "شارك فواتيرك فورًا مع عملائك بدون تعقيد أو تأخير."
    },
    {
      icon: BarChart3,
      title: "تقارير مالية دقيقة بضغطة زر",
      description: "تابع أداء شركتك بوضوح مع تقارير شهرية وتحليلات مفصلة تساعدك في اتخاذ القرارات الصحيحة."
    },
    {
      icon: Shield,
      title: "أمان ونسخ احتياطية سحابية",
      description: "بياناتك محفوظة آمنًا، ويمكنك استرجاعها في أي وقت دون خوف من فقدانها."
    },
    {
      icon: Settings,
      title: "إعداد سريع مع دعم مجاني لمدة شهر",
      description: "نوفر لك كل الدعم حتى تتقن النظام بدون مشاكل."
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
