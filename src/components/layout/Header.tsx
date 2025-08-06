import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200/50 shadow-sm">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FluxAI</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-6 mr-6">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
              >
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                Pricing
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                FAQ
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-sm"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-gray-200/50"
          >
            <div className="flex flex-col space-y-3">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2 border-t border-gray-200/50 mt-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-600 hover:text-blue-600 hover:bg-blue-50 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Button>
                <Button
                  className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
