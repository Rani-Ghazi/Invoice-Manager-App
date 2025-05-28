
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            من <span className="text-invoice-blue-600">نحن</span>؟
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-invoice-blue-50 to-white rounded-2xl p-8 shadow-lg border border-invoice-blue-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-invoice-blue-100 rounded-full flex items-center justify-center">
                <span className="text-4xl">🇴🇲</span>
              </div>
              
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  خدمة عمانية موجهة للمحليين
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نحن فريق من المطورين العمانيين متخصصين في تطوير الحلول الرقمية لأصحاب الأعمال الصغيرة والمتوسطة في سلطنة عمان ودول الخليج.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  هدفنا هو تبسيط العمليات التجارية وجعلها أكثر احترافية من خلال أنظمة رقمية عملية وسهلة الاستخدام.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <span className="bg-invoice-blue-100 text-invoice-blue-700 px-3 py-1 rounded-full">
                    🏢 أكثر من 500 عميل
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    ⭐ تقييم 5/5
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
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
