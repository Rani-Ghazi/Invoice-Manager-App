
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            آراء <span className="text-invoice-blue-600">عملائنا</span>
          </h2>
          <p className="text-lg text-gray-600">
            ماذا يقول أصحاب الأعمال عن تجربتهم
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-invoice-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-invoice-blue-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              <div className="border-t border-invoice-blue-200 pt-4">
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.profession}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
