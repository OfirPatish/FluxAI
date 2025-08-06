import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Check, Star } from "lucide-react";
import { pricingPlans } from "../../data/pricing";

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section id="pricing" className="section-padding bg-blue-50">
      <div className="container-max">
        <AnimatedSection>
          <SectionHeader
            title="Choose Your Plan"
            subtitle="Start with our free trial and scale as you grow. All plans include our core AI features."
          />

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!isYearly ? "text-neutral-900" : "text-neutral-500"}`}>
              Monthly
            </span>
            <button
              onClick={toggleBilling}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isYearly ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-neutral-900" : "text-neutral-500"}`}>Yearly</span>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Save 20%</Badge>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <AnimatedCard
              key={plan.name}
              index={index}
              className={`relative ${
                plan.popular ? "ring-2 ring-blue-500 shadow-xl scale-105" : "ring-1 ring-gray-200 shadow-lg"
              } bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-neutral-900">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-neutral-500 ml-2">/{isYearly ? "year" : "month"}</span>
                </div>

                <Button
                  size="lg"
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-neutral-900"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-neutral-900 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Additional Info */}
        <AnimatedSection delay={0.4} className="text-center mt-16">
          <p className="text-neutral-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-sm text-neutral-500">
            Need a custom plan?{" "}
            <a href="#contact" className="text-blue-600 hover:underline">
              Contact us
            </a>{" "}
            for enterprise pricing.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
