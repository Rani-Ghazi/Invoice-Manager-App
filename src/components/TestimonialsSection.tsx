
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "سعيد",
      profession: "فني كهرباء",
      comment: "ريحني من الطباعة وخلاني أبان محترف قدام الزبون",
      rating: 5
    },
    {
      name: "أحمد",
      profession: "صاحب ورشة",
      comment: "النظام سهل جداً، وأقدر أرسل الفاتورة بالواتساب على طول",
      rating: 5
    },
    {
      name: "فاطمة",
      profession: "مصممة داخلية",
      comment: "عجبني التصميم المخصص، الفاتورة تطلع باسمي وشعاري",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-gray-900 mb-6">
            آراء <span className="text-blue-gray-700">عملائنا</span>
          </h2>
          <p className="text-xl text-blue-gray-600 font-medium">
            ماذا يقول أصحاب الأعمال عن تجربتهم
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-blue-gray-50 p-8 rounded-2xl soft-shadow border border-blue-gray-100"
            >
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-blue-gray-700 mb-6 italic leading-relaxed font-medium text-lg">
                "{testimonial.comment}"
              </p>
              
              <div className="border-t border-blue-gray-200 pt-6">
                <div className="font-semibold text-blue-gray-800 text-lg">{testimonial.name}</div>
                <div className="text-blue-gray-600 font-medium">{testimonial.profession}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
