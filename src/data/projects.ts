export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  tech: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    apis?: string[];
    deployment?: string[];
  };
  tags: string[];
  type: "demo" | "real" | "concept";
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "rationshop-pro",
    title: "RationShop Pro",
    subtitle: "Retail Billing & Inventory Management System",
    description:
      "A custom full-stack point-of-sale (POS), billing, and customer ledger system engineered for retail client Sumit Prasad. It enables rapid checkout, automated item calculations, customer lookup, invoice generation, and real-time payment/due tracking.",
    challenge:
      "The client relied on manual paper registers to record transactions, manage stock, and track customer credit/dues. This caused slow checkout queues during peak hours, calculation errors, and lack of visibility into overdue balances.",
    solution:
      "I designed and developed an end-to-end web POS application with instant product selection, dynamic price computation, quick customer search, digital invoice generation, and a ledger dashboard showing paid vs pending amounts.",
    features: [
      "Fast billing interface with dynamic product & quantity computation",
      "Customer directory with instant search by name or phone number",
      "One-click Invoice Generation with unique invoice IDs & dates",
      "Real-time payment tracking with Paid / Pending due badges",
      "Products & inventory stock management",
      "Customer ledger (Khata) & credit balance monitoring",
      "Sales dashboard & daily transaction reports",
      "Responsive, clean UI optimized for rapid cashier operations",
    ],
    tech: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      apis: ["REST APIs", "Invoice Generator", "JWT Auth"],
      deployment: ["Vercel", "Railway"],
    },
    tags: ["React", "Node.js", "MongoDB", "POS & Billing", "Tailwind"],
    type: "real",
    liveUrl: "https://ration-shop-management-system.vercel.app/",
    githubUrl: "#",
    image: "/images/rationshop-pro.png",
    featured: true,
  },
  {
    id: "bakery-ordering",
    title: "Sweet Layers",
    subtitle: "Bakery Online Ordering System",
    description:
      "A complete end-to-end online ordering platform built for a bakery business. Customers can browse products, add to cart, checkout, pay online, and track their order. Admins manage orders and products from a dashboard.",
    challenge:
      "Many local bakeries rely on phone calls and WhatsApp messages to take orders — a system that is inefficient, error-prone, and limits growth. There was a need for a professional, self-service ordering flow that works on any device.",
    solution:
      "I designed and built a full-stack ordering system with a polished customer-facing storefront and a dedicated admin dashboard. The checkout integrates with a payment gateway and sends automated order confirmations.",
    features: [
      "Beautiful product catalog with categories and search",
      "Detailed product pages with photos, ingredients, and pricing",
      "Shopping cart with quantity management",
      "Multi-step checkout with customer information",
      "Secure online payment integration (Razorpay/Stripe)",
      "Automated order confirmation with order details",
      "Admin dashboard to view and manage orders",
      "Real-time order status updates",
      "Mobile-friendly, fully responsive design",
    ],
    tech: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      apis: ["Razorpay / Stripe", "Nodemailer"],
      deployment: ["Vercel", "Railway"],
    },
    tags: ["Next.js", "Node.js", "MongoDB", "Razorpay", "Tailwind"],
    type: "demo",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "booknest",
    title: "BookNest",
    subtitle: "Online Book Discovery & Digital Library Platform",
    description:
      "A full-stack book discovery, personal library, and writing platform. Users can search and explore an extensive book catalog, curate their reading list (My Library), access premium books, and write/publish their own stories via Self Writing.",
    challenge:
      "Readers often lack a single, unified digital hub where they can effortlessly discover classic and modern literature, manage their personal bookshelf, and write original content with seamless authentication.",
    solution:
      "I engineered a clean, responsive web platform featuring real-time book search, library categorization, a dedicated author workspace (Self Writing), premium collection gating, and secure authentication.",
    features: [
      "Extensive book discovery catalog with instant search & filter",
      "Personalized 'My Library' reading shelf & progress tracker",
      "Self Writing studio for creating and managing custom manuscripts",
      "Premium curated collection access and subscription tier",
      "User authentication with session management & secure logout",
      "Clean responsive grid layout with book cover art and metadata",
    ],
    tech: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      apis: ["Books REST API", "JWT Auth"],
      deployment: ["Vercel"],
    },
    tags: ["React", "Node.js", "MongoDB", "Library App", "Tailwind"],
    type: "demo",
    liveUrl: "https://book-nest-ashy.vercel.app/",
    githubUrl: "#",
    image: "/images/booknest.png",
    featured: true,
  },
];
