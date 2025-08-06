import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export function TestimonialsSection() {
  const badgeColors = [
    "bg-blue-100 text-blue-700 hover:bg-blue-200",
    "bg-teal-100 text-teal-700 hover:bg-teal-200",
    "bg-purple-100 text-purple-700 hover:bg-purple-200",
  ];

  return (
    <section id="testimonials" className="section-padding relative bg-white">
      <div className="container-max">
        <AnimatedSection>
          <SectionHeader
            title="Loved by Teams Worldwide"
            subtitle="See how FluxAI is transforming productivity for teams across industries."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard key={testimonial.name} index={index}>
              <Card className="h-full border border-gray-100 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <Badge variant="outline" className="w-fit text-xs border-amber-200 text-amber-600">
                    {testimonial.rating}/5 Stars
                  </Badge>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-neutral-600 mb-6 italic text-lg">"{testimonial.content}"</blockquote>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.name}`} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                      <div className="text-sm text-neutral-500">
                        {testimonial.role} at {testimonial.company}
                      </div>
                      <Badge variant="secondary" className={`text-xs ${badgeColors[index % badgeColors.length]}`}>
                        Verified Customer
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
