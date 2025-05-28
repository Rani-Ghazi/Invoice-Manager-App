
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      business: "شركة مقاولات",
      comment: "كنت أعاني من إعداد الفواتير يدوياً، الآن أرسل فاتورة احترافية خلال دقائق",
      rating: 5
    },
    {
      business: "فني صيانة",
      comment: "النظام ساعدني أبدو أكثر احترافية أمام العملاء، والدفعات صارت أسرع",
      rating: 5
    },
    {
      business: "مصمم حر",
      comment: "أحب التصميم المخصص، الفاتورة تحمل شعاري وتعكس هويتي المهنية",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
            آراء <span className="text-slate-600">عملائنا</span>
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            ماذا يقول أصحاب الأعمال عن تجربتهم
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="clean-card p-6 rounded-xl"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 mb-4 leading-relaxed font-normal">
                "{testimonial.comment}"
              </p>
              
              <div className="border-t border-slate-200 pt-4">
                <div className="font-medium text-slate-800">{testimonial.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
