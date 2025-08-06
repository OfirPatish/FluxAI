import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 section-padding relative bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container-max text-center">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Supercharge Your Productivity with <span className="gradient-text">AI-Powered</span> Automation
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            FluxAI helps individuals and teams automate tasks, summarize meetings, and streamline workflows using
            advanced artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-300 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </Button>
          </div>
        </AnimatedSection>

        {/* Hero Stats */}
        <AnimatedSection delay={0.2} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-neutral-600 mb-2">Active Users</div>
            <Badge variant="secondary" className="text-xs bg-teal-100 text-teal-700 hover:bg-teal-200">
              Growing Fast
            </Badge>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
            <div className="text-neutral-600 mb-2">Productivity Increase</div>
            <Badge variant="outline" className="text-xs border-purple-200 text-purple-600">
              Proven Results
            </Badge>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
            <div className="text-neutral-600 mb-2">AI Assistance</div>
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 text-xs">Always Available</Badge>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
