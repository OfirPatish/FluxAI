import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

export function AnimatedCard({ children, className, delay = 0, index = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + index * 0.1 }}
      viewport={{ once: true }}
      className={cn("h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
