export interface Service {
  id: string;
  title: string;
  description: string;
  techs: string[];
}

export const services: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Professional, fast-loading websites that establish your brand online, build credibility, and convert visitors into customers.",
    techs: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platforms",
    description:
      "Feature-complete online stores with product management, shopping cart, checkout flow, and secure payment integration.",
    techs: ["Next.js", "Node.js", "MongoDB", "Stripe / Razorpay"],
  },
  {
    id: "ordering-systems",
    title: "Online Ordering Systems",
    description:
      "Custom ordering platforms for restaurants, bakeries, cafes, and local businesses — with product catalog, cart, and checkout.",
    techs: ["React", "Node.js", "MongoDB", "Payment APIs"],
  },
  {
    id: "web-applications",
    title: "Custom Web Applications",
    description:
      "Business-specific web apps built around your unique workflow — booking systems, portals, platforms, and internal tools.",
    techs: ["Next.js", "Node.js", "PostgreSQL", "REST APIs"],
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboards",
    description:
      "Clean, intuitive dashboards to manage products, orders, customers, and business data — all secured with authentication.",
    techs: ["React", "Express.js", "MongoDB", "JWT Auth"],
  },
  {
    id: "payment-integration",
    title: "Payment Integration",
    description:
      "Secure, production-ready payment flows integrated into existing websites or new applications with proper validation and confirmation.",
    techs: ["Stripe", "Razorpay", "Webhooks", "Node.js"],
  },
];
