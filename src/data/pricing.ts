export interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: {
      monthly: 9,
      yearly: 90,
    },
    description: "Perfect for individuals and small teams getting started with AI automation.",
    features: [
      "Up to 5 team members",
      "Basic task automation",
      "Meeting summaries (up to 10/month)",
      "Email support",
      "Basic integrations",
      "1GB storage",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    price: {
      monthly: 29,
      yearly: 290,
    },
    description: "Ideal for growing teams that need advanced automation and collaboration.",
    features: [
      "Up to 25 team members",
      "Advanced task automation",
      "Unlimited meeting summaries",
      "Priority email support",
      "Advanced integrations",
      "10GB storage",
      "Custom workflows",
      "Analytics dashboard",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: {
      monthly: 99,
      yearly: 990,
    },
    description: "For large organizations requiring enterprise-grade features and support.",
    features: [
      "Unlimited team members",
      "Enterprise automation",
      "Advanced AI features",
      "24/7 phone support",
      "Custom integrations",
      "Unlimited storage",
      "Advanced security",
      "Dedicated account manager",
      "Custom training",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
];
