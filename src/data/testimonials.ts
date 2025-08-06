export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    content: "FluxAI has transformed how our team handles meetings. The automatic summaries save us hours every week.",
    rating: 5,
  },
  {
    name: "Alex Rodriguez",
    role: "Marketing Director",
    company: "StartupXYZ",
    content:
      "The automation features are incredible. We've increased our productivity by 40% since implementing FluxAI.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "InnovateLab",
    content: "FluxAI is like having an extra team member that never sleeps. It's been a game-changer for our workflow.",
    rating: 5,
  },
];
