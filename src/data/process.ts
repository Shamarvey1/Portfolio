export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin with a thorough discovery conversation. I learn about your business, your users, the problem you're solving, and the goals this product needs to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "I define the features, choose the right technology, map out the data structure, and scope the project so there are no surprises during development.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "I create a clean, intuitive user experience. Every screen is designed for clarity and ease of use — whether it's a customer-facing storefront or an internal admin panel.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "I develop the frontend, backend, database, and all integrations with clean, maintainable code. You receive regular progress updates throughout.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "I deploy the project, handle configuration, and ensure everything runs smoothly in production. Post-launch support is provided to address any issues quickly.",
  },
];
