import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <AnimatedSection>
          <SectionHeader
            title="Get in Touch"
            subtitle="Have questions about FluxAI? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection delay={0.2} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Let's talk about your project</h3>
              <p className="text-neutral-600 mb-8">
                Ready to transform your productivity with AI? Our team is here to help you get started and answer any
                questions you might have.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
                  <p className="text-neutral-600">hello@fluxai.com</p>
                  <p className="text-sm text-neutral-500">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Phone</h4>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-neutral-500">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-1">Office</h4>
                  <p className="text-neutral-600">123 AI Street, Tech City</p>
                  <p className="text-sm text-neutral-500">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-neutral-900 mb-3">Why choose FluxAI?</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-neutral-600">14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-neutral-600">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-neutral-600">Cancel anytime</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.4} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
                <p className="text-neutral-600">Thank you for your message. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-neutral-700 mb-2">
                    Name *
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`h-12 ${errors.name ? "border-red-300 focus-visible:ring-red-500" : ""}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-neutral-700 mb-2">
                    Email *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`h-12 ${errors.email ? "border-red-300 focus-visible:ring-red-500" : ""}`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-neutral-700 mb-2">
                    Company
                  </Label>
                  <Input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="h-12"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`min-h-[120px] resize-none ${
                      errors.message ? "border-red-300 focus-visible:ring-red-500" : ""
                    }`}
                    placeholder="Tell us about your project or questions..."
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 mt-1 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
