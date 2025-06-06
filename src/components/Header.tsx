
import { WhatsappIcon, Menu, X, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96895454284?text=أريد%20الحصول%20على%20نظام%20Invoice%20Manager", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Receipt className="text-white w-5 h-5" strokeWidth={2} />
            </div>
            <div className="text-lg font-medium text-slate-800">Invoice Manager</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-slate-600 hover:text-slate-800 transition-colors font-medium text-sm"
            >
              المميزات
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-slate-600 hover:text-slate-800 transition-colors font-medium text-sm"
            >
              الأسعار
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-600 hover:text-slate-800 transition-colors font-medium text-sm"
            >
              آراء العملاء
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-slate-800 transition-colors font-medium text-sm"
            >
              من نحن
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 text-sm font-medium transition-colors"
            >
              <WhatsappIcon className="w-4 h-4 ml-2" />
              اطلب الآن عبر واتساب
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200/50 bg-white/90">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-right text-slate-600 hover:text-slate-800 transition-colors py-2 font-medium text-sm"
              >
                المميزات
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-right text-slate-600 hover:text-slate-800 transition-colors py-2 font-medium text-sm"
              >
                الأسعار
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-right text-slate-600 hover:text-slate-800 transition-colors py-2 font-medium text-sm"
              >
                آراء العملاء
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-right text-slate-600 hover:text-slate-800 transition-colors py-2 font-medium text-sm"
              >
                من نحن
              </button>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white w-full flex items-center justify-center gap-2 py-2 text-sm font-medium mt-2"
              >
                <WhatsappIcon className="w-4 h-4" />
                اطلب الآن عبر واتساب
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
