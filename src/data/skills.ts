export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Python"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Vercel", "Railway"],
  },
  {
    category: "Integrations",
    skills: ["Payment Integration", "Authentication / JWT", "Email APIs", "Third-party APIs"],
  },
];
