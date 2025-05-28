
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "هل أحتاج اشتراك شهري؟",
      answer: "لا، إطلاقاً. دفعة واحدة فقط 80 ريال وتحصل على النظام مدى الحياة بدون أي رسوم إضافية."
    },
    {
      question: "هل أقدر أعدّل على النظام لاحقاً؟",
      answer: "نعم، أول شهر التعديلات والدعم مجاني تماماً. بعد ذلك يمكن التعديل مقابل رسوم رمزية."
    },
    {
      question: "أقدر أطبع الفاتورة؟",
      answer: "نعم، يمكنك طباعة الفاتورة أو إرسالها كملف PDF عبر الواتساب أو الإيميل."
    },
    {
      question: "هل النظام يدعم العربية؟",
      answer: "نعم، النظام مصمم خصيصاً للسوق العربي ويدعم اللغة العربية بالكامل."
    },
    {
      question: "كم يستغرق إعداد النظام؟",
      answer: "بعد التواصل معنا، سيكون نظامك جاهز خلال 24-48 ساعة مع التدريب والشرح."
    },
    {
      question: "هل يحتاج النظام إنترنت؟",
      answer: "نعم، النظام يعمل عبر الإنترنت مما يضمن حفظ بياناتك في السحابة وإمكانية الوصول من أي مكان."
    }
  ];

  return (
    <section className="py-24 clean-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-gray-900 mb-6">
            الأسئلة <span className="text-blue-gray-700">الشائعة</span>
          </h2>
          <p className="text-xl text-blue-gray-600 font-medium">
            الإجابة على أهم الأسئلة التي تخطر ببالك
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl soft-shadow mb-4 overflow-hidden border border-blue-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-right p-8 hover:bg-blue-gray-50 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="font-semibold text-blue-gray-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown className={`text-blue-gray-600 transition-transform duration-200 w-5 h-5 ${
                  openIndex === index ? 'rotate-180' : ''
                }`} />
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-8 border-t border-blue-gray-100 animate-fade-in">
                  <p className="text-blue-gray-700 leading-relaxed pt-6 font-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
