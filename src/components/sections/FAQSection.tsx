import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData } from "../../data/faq";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqData.map((item) => item.category)))];

  const filteredFAQs =
    selectedCategory === "All" ? faqData : faqData.filter((item) => item.category === selectedCategory);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">
        <AnimatedSection>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about FluxAI. Can't find what you're looking for? Contact us."
          />
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white hover:bg-gray-50 text-neutral-700"
              }`}
            >
              {category}
            </Button>
          ))}
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HelpCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-neutral-900">{item.question}</h3>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <div className="pl-10">
                      <p className="text-neutral-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Still have questions?</h3>
            <p className="text-neutral-600 mb-6">
              Our team is here to help you get the most out of FluxAI. Reach out and we'll get back to you within 24
              hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                View Documentation
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
