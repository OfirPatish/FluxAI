export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is FluxAI and how does it work?",
    answer:
      "FluxAI is an AI-powered productivity assistant that helps automate repetitive tasks, summarize meetings, and streamline workflows. It uses advanced machine learning to understand your work patterns and automatically handles routine activities, giving you more time to focus on what matters most.",
    category: "General",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial on all plans with no credit card required. You can explore all features and see how FluxAI can transform your productivity before making any commitment.",
    category: "Pricing",
  },
  {
    question: "How secure is my data with FluxAI?",
    answer:
      "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and follow industry best practices. Your data is encrypted in transit and at rest, and we never share your information with third parties.",
    category: "Security",
  },
  {
    question: "Can I integrate FluxAI with my existing tools?",
    answer:
      "Absolutely! FluxAI integrates with popular tools like Slack, Microsoft Teams, Google Workspace, Notion, and many more. We're constantly adding new integrations based on user feedback.",
    category: "Integrations",
  },
  {
    question: "How accurate are the meeting summaries?",
    answer:
      "Our AI has been trained on millions of meetings and achieves over 95% accuracy in capturing key points, action items, and decisions. The summaries are generated in real-time and can be customized to focus on specific aspects of your meetings.",
    category: "Features",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide comprehensive support including email support for all plans, priority support for Professional and Enterprise plans, and 24/7 phone support for Enterprise customers. We also offer onboarding sessions and training materials.",
    category: "Support",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time with no penalties or hidden fees. Your access will continue until the end of your current billing period, and you can reactivate your account anytime.",
    category: "Pricing",
  },
  {
    question: "How many team members can use FluxAI?",
    answer:
      "The number of team members depends on your plan: Starter (up to 5), Professional (up to 25), and Enterprise (unlimited). You can upgrade or downgrade your plan at any time as your team grows.",
    category: "Pricing",
  },
  {
    question: "Does FluxAI work on mobile devices?",
    answer:
      "Yes! FluxAI is fully responsive and works on all devices including smartphones and tablets. You can access your dashboard, view summaries, and manage tasks from anywhere with our mobile-optimized interface.",
    category: "Features",
  },
  {
    question: "How do I get started with FluxAI?",
    answer:
      "Getting started is easy! Simply sign up for a free trial, complete the quick setup wizard, and invite your team members. Our AI will start learning your patterns immediately and you'll see productivity improvements within the first week.",
    category: "Getting Started",
  },
];
