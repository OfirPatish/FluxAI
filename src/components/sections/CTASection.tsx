import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-200 rounded-full blur-2xl"></div>
      </div>
      <div className="container-max text-center">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Productivity?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of teams already using FluxAI to work smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-700 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              Schedule Demo
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
