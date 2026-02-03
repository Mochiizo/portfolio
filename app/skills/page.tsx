'use client';
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Code, Server, Settings, Wrench } from "lucide-react";

// DATA SKILLS (facile à modifier)
const skills = [
  {
    title: "Frontend",
    icon: Code,
    techs: ["HTML", "CSS", "Tailwind", "React", "Next.js", "Shadcn UI"],
  },
  {
    title: "Backend",
    icon: Server,
    techs: ["Laravel", "Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "DevOps",
    icon: Settings,
    techs: ["Git", "GitLab", "Docker", "CI/CD", "Linux", "Jenkins"],
  },
  {
    title: "Tools",
    icon: Wrench,
    techs: ["VS Code", "Cursor", "Notion", "Jenkins"],
  },
];

export default function SkillsPage() {
  return (
    <section className="space-y-6">
        <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-sm text-primary hover:text-primary/70 transition duration-150"
      >
        <ArrowLeft className="w-4 h-4" />Home
      </button>
      <div>
        <h1 className="title-old text-primary font-serif text-[2.5rem] tracking-tight">
          Skills
        </h1>
        <h2 className="text-base font-medium tracking-tight text-muted-foreground">
          Technologies et outils que j’utilise
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.title}
              className="group relative rounded-xl border border-body/20 border-dotted p-5 transition-all duration-300 ease-in-out 
              hover:bg-hoverColor/50 hover:scale-[1.02] hover:border-primary/40"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-primary" />
                <h3 className="text-title text-sm font-semibold tracking-tight">
                  {skill.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.techs.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs bg-background/50 hover:bg-primary/10 hover:text-primary transition">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
