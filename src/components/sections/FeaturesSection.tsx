import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCard } from "@/components/ui/animated-card";
import { features } from "../../data/features";

export function FeaturesSection() {
  const colorVariants = [
    "from-blue-500 to-blue-600",
    "from-teal-500 to-teal-600",
    "from-purple-500 to-purple-600",
    "from-amber-500 to-amber-600",
    "from-emerald-500 to-emerald-600",
    "from-indigo-500 to-indigo-600",
  ];

  const badgeVariants = [
    { bg: "bg-blue-100", text: "text-blue-700", hover: "hover:bg-blue-200" },
    { bg: "bg-teal-100", text: "text-teal-700", hover: "hover:bg-teal-200" },
    { bg: "bg-purple-100", text: "text-purple-700", hover: "hover:bg-purple-200" },
    { bg: "bg-amber-100", text: "text-amber-700", hover: "hover:bg-amber-200" },
    { bg: "bg-emerald-100", text: "text-emerald-700", hover: "hover:bg-emerald-200" },
    { bg: "bg-indigo-100", text: "text-indigo-700", hover: "hover:bg-indigo-200" },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-max">
        <AnimatedSection>
          <SectionHeader
            title="Everything You Need to Work Smarter"
            subtitle="Powerful AI features designed to transform how you and your team work, collaborate, and achieve goals."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={feature.title} index={index}>
              <Card className="h-full border border-gray-100">
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${
                      colorVariants[index % colorVariants.length]
                    } rounded-lg flex items-center justify-center mb-4 shadow-md`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className={`text-xs ${badgeVariants[index % badgeVariants.length].bg} ${
                        badgeVariants[index % badgeVariants.length].text
                      } ${badgeVariants[index % badgeVariants.length].hover}`}
                    >
                      AI-Powered
                    </Badge>
                    <Badge variant="outline" className={`text-xs border-gray-200 text-gray-600`}>
                      {index % 2 === 0 ? "Productivity" : "Automation"}
                    </Badge>
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
