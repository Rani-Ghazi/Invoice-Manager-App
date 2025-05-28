
import { MessageSquare, Menu, X } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-gray-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">IM</span>
            </div>
            <div className="text-xl font-semibold text-blue-gray-800">Invoice Manager</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-blue-gray-600 hover:text-blue-gray-800 transition-colors font-medium"
            >
              المميزات
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-blue-gray-600 hover:text-blue-gray-800 transition-colors font-medium"
            >
              الأسعار
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-blue-gray-600 hover:text-blue-gray-800 transition-colors font-medium"
            >
              آراء العملاء
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-blue-gray-600 hover:text-blue-gray-800 transition-colors font-medium"
            >
              من نحن
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-blue-gray-700 hover:bg-blue-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 ml-2" />
              اطلب الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-blue-gray-200 bg-white">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-right text-blue-gray-600 hover:text-blue-gray-800 transition-colors py-3 font-medium"
              >
                المميزات
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-right text-blue-gray-600 hover:text-blue-gray-800 transition-colors py-3 font-medium"
              >
                الأسعار
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-right text-blue-gray-600 hover:text-blue-gray-800 transition-colors py-3 font-medium"
              >
                آراء العملاء
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-right text-blue-gray-600 hover:text-blue-gray-800 transition-colors py-3 font-medium"
              >
                من نحن
              </button>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-blue-gray-700 hover:bg-blue-gray-800 text-white w-full flex items-center justify-center gap-2 py-3 mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                اطلب الآن
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
