
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "هل النظام يحتاج اشتراك سنوي؟",
      answer: "نعم، النظام يعمل بنظام الاشتراك السنوي بـ 80 ريال عماني فقط، مما يضمن لك الحصول على أحدث التحديثات والدعم المستمر."
    },
    {
      question: "ماذا يشمل الاشتراك السنوي؟",
      answer: "يشمل الاشتراك إعداد النظام كاملاً، تصميم مخصص لشركتك، دعم فني مستمر، تحديثات دورية، ونسخ احتياطية آمنة."
    },
    {
      question: "أقدر أطبع الفاتورة؟",
      answer: "نعم، يمكنك طباعة الفاتورة أو إرسالها كملف PDF عبر الواتساب أو الإيميل."
    },
    {
      question: "هل النظام يعمل على كل المنصات والأجهزة؟",
      answer: "نعم، النظام يعمل عبر الإنترنت ويمكن الوصول إليه من أي جهاز - هواتف ذكية، أجهزة لوحية، لابتوب، كمبيوترات مكتبية. فقط تحتاج للاتصال بالإنترنت."
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
    },
    {
      question: "ماذا يحدث عند انتهاء فترة الاشتراك؟",
      answer: "يمكنك تجديد الاشتراك بنفس السعر للاستمرار في استخدام النظام والحصول على الدعم والتحديثات."
    }
  ];

  return (
    <section className="py-20 dreamy-gradient-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
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
              className="feature-card rounded-xl mb-3 overflow-hidden animate-fade-in hover:scale-[1.02] transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
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
                <div className="px-6 pb-6 border-t border-slate-200/50 animate-fade-in">
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
