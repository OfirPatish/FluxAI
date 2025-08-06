import { Brain, Zap, Users, Clock, CheckCircle, Star } from 'lucide-react'

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description: "Automate repetitive tasks and workflows with intelligent AI that learns from your patterns."
  },
  {
    icon: Zap,
    title: "Smart Meeting Summaries",
    description: "Get instant, accurate summaries of your meetings with action items and key insights extracted automatically."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Enhance team communication with AI-powered insights and streamlined workflow coordination."
  },
  {
    icon: Clock,
    title: "Time Optimization",
    description: "Save hours every week by letting AI handle routine tasks while you focus on what matters most."
  },
  {
    icon: CheckCircle,
    title: "Workflow Streamlining",
    description: "Optimize your daily processes with intelligent suggestions and automated task management."
  },
  {
    icon: Star,
    title: "Performance Analytics",
    description: "Track productivity metrics and get insights to continuously improve your team's performance."
  }
] 