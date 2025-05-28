
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
    <section className="py-20 dreamy-gradient-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 mb-4">
            الأسئلة <span className="text-slate-600">الشائعة</span>
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            الإجابة على أهم الأسئلة التي تخطر ببالك
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="clean-card rounded-xl mb-3 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-right p-6 hover:bg-slate-50/50 transition-colors duration-200 flex justify-between items-center"
              >
                <span className="font-medium text-slate-800">
                  {faq.question}
                </span>
                <ChevronDown className={`text-slate-600 transition-transform duration-200 w-5 h-5 ${
                  openIndex === index ? 'rotate-180' : ''
                }`} />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-slate-200/50">
                  <p className="text-slate-700 leading-relaxed pt-4 font-normal">
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
