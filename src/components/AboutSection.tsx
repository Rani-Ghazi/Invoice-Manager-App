
const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
            من <span className="text-slate-600">نحن</span>؟
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="clean-card rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-2xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/29886080-cb9d-403c-ac79-4d7484a756e9.png" 
                  alt="فريق تقني متخصص"
                  className="w-28 h-28 object-contain"
                />
              </div>
              
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-2xl font-medium text-slate-800 mb-4">
                  فريق تقني مستقل متخصص
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4 font-normal">
                  نحن فريق من المطورين المتخصصين في تطوير الحلول الرقمية لأصحاب الأعمال الصغيرة والمتوسطة.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6 font-normal">
                  هدفنا هو تبسيط العمليات التجارية وجعلها أكثر احترافية من خلال أنظمة رقمية عملية وسهلة الاستخدام.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium text-sm">
                    🏢 أكثر من 500 عميل
                  </span>
                  <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-medium text-sm">
                    ⭐ تقييم 5/5
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium text-sm">
                    📞 دعم مستمر
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
