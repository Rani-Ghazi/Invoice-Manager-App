
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-invoice-blue-500 to-invoice-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">IM</span>
            </div>
            <div className="text-xl font-bold text-gray-800">Invoice Manager</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-invoice-blue-600 transition-colors"
            >
              المميزات
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-invoice-blue-600 transition-colors"
            >
              الأسعار
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-600 hover:text-invoice-blue-600 transition-colors"
            >
              آراء العملاء
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-invoice-blue-600 transition-colors"
            >
              من نحن
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-invoice-blue-600 hover:bg-invoice-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              اطلب الآن
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-right text-gray-600 hover:text-invoice-blue-600 transition-colors py-2"
              >
                المميزات
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-right text-gray-600 hover:text-invoice-blue-600 transition-colors py-2"
              >
                الأسعار
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-right text-gray-600 hover:text-invoice-blue-600 transition-colors py-2"
              >
                آراء العملاء
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-right text-gray-600 hover:text-invoice-blue-600 transition-colors py-2"
              >
                من نحن
              </button>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-invoice-blue-600 hover:bg-invoice-blue-700 text-white w-full flex items-center justify-center gap-2"
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
