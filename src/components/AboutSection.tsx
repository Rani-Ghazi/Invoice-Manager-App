
const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-gray-900 mb-6">
            من <span className="text-blue-gray-700">نحن</span>؟
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-gray-50 rounded-3xl p-10 md:p-12 soft-shadow border border-blue-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-40 h-40 bg-blue-gray-200 rounded-3xl flex items-center justify-center">
                <span className="text-6xl">🇴🇲</span>
              </div>
              
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-gray-900 mb-6">
                  خدمة عمانية موجهة للمحليين
                </h3>
                <p className="text-blue-gray-700 leading-relaxed mb-6 font-medium text-lg">
                  نحن فريق من المطورين العمانيين متخصصين في تطوير الحلول الرقمية لأصحاب الأعمال الصغيرة والمتوسطة في سلطنة عمان ودول الخليج.
                </p>
                <p className="text-blue-gray-700 leading-relaxed mb-8 font-medium text-lg">
                  هدفنا هو تبسيط العمليات التجارية وجعلها أكثر احترافية من خلال أنظمة رقمية عملية وسهلة الاستخدام.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <span className="bg-blue-gray-200 text-blue-gray-800 px-6 py-3 rounded-full font-semibold">
                    🏢 أكثر من 500 عميل
                  </span>
                  <span className="bg-soft-green-200 text-soft-green-800 px-6 py-3 rounded-full font-semibold">
                    ⭐ تقييم 5/5
                  </span>
                  <span className="bg-blue-gray-200 text-blue-gray-800 px-6 py-3 rounded-full font-semibold">
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
