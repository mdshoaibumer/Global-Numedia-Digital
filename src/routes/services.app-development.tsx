import { createFileRoute } from "@tanstack/react-router";
import {
  Smartphone,
  Code2,
  Layers,
  Rocket,
  Shield,
  BarChart3,
} from "lucide-react";
import { ServicePage } from "@/components/layout/ServicePage";

export const Route = createFileRoute("/services/app-development")({
  head: () => ({
    meta: [
      { title: "App Development — Global Numedia" },
      {
        name: "description",
        content:
          "Custom mobile and web application development that delivers seamless user experiences and drives business growth.",
      },
      {
        property: "og:title",
        content: "App Development — Global Numedia",
      },
      {
        property: "og:description",
        content: "Custom apps built for performance and growth.",
      },
      { property: "og:url", content: "/services/app-development" },
    ],
    links: [{ rel: "canonical", href: "/services/app-development" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="App Development"
      title="Apps that perform."
      description="Custom mobile and web applications designed for your business needs — from concept to launch and beyond."
      bullets={[
        "iOS and Android mobile app development",
        "Cross-platform solutions (React Native, Flutter)",
        "Web application development",
        "UI/UX design and prototyping",
        "API integration and backend development",
        "Ongoing maintenance and support",
      ]}
      deliverables={[
        {
          icon: Smartphone,
          title: "Mobile apps",
          desc: "Native and cross-platform apps for iOS and Android.",
        },
        {
          icon: Code2,
          title: "Web apps",
          desc: "Scalable web applications with modern frameworks.",
        },
        {
          icon: Layers,
          title: "UI/UX design",
          desc: "User-centered design that drives engagement.",
        },
        {
          icon: Rocket,
          title: "Launch & deploy",
          desc: "App store submission and deployment management.",
        },
        {
          icon: Shield,
          title: "Security",
          desc: "Built with security best practices from day one.",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          desc: "In-app analytics to track user behavior and growth.",
        },
      ]}
      metrics={[
        { value: "50+", label: "apps delivered successfully" },
        { value: "4.8", label: "average app store rating" },
        { value: "99.9%", label: "uptime guarantee" },
        { value: "40%", label: "faster time-to-market" },
      ]}
      faq={[
        {
          q: "What platforms do you build for?",
          a: "iOS, Android, and web — we recommend the best approach based on your audience and budget.",
        },
        {
          q: "How long does app development take?",
          a: "Typical projects range from 8-16 weeks depending on complexity and features.",
        },
        {
          q: "Do you provide ongoing support?",
          a: "Yes, we offer maintenance plans including bug fixes, updates and feature enhancements.",
        },
        {
          q: "Can you work with our existing systems?",
          a: "Absolutely. We integrate with your existing APIs, databases and third-party services.",
        },
      ]}
    />
  ),
});
