'use client';

import { Wrench, Code, Server } from "lucide-react";

// DATA PROJETS (vide pour l'instant)
const projects: {
  title: string;
  description: string;
  techs: string[];
  link?: string;
}[] = [
  // Plus tard tu pourras ajouter tes projets ici
  // Exemple :
   {
     title: "Mon Portfolio",
     description: "Portfolio perso en Next.js + Tailwind",
     techs: ["Next.js", "React", "Tailwind", "Email.js", "Shadcn ui"],
     link: "https://github.com/Mochiizo/portfolio"
   }
];

export default function ProjectsSection() {
  return (
    <section className="space-y-6">
      {/* TITRE */}
      <div>
        <h1 className="title-old text-primary font-serif text-[1.5rem] tracking-tight">
          Projets
        </h1>
        <h2 className="text-base font-medium tracking-tight text-muted-foreground">
          Mes projets de développement web et logiciels
        </h2>
      </div>

      {/* CONTENU */}
      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 border border-dashed border-body/30 rounded-xl text-gray-500 text-center">
          <Wrench className="w-8 h-8 mb-2 animate-bounce text-primary" />
          <p>Aucun projet pour le moment. Ils arriveront bientôt !</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 w-full">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-xl border border-body/20 border-dotted p-5 transition-all duration-300 ease-in-out hover:bg-hoverColor/50 hover:scale-[1.02] md:hover:bg-sky-100/20"
            >
              <h3 className="text-title text-sm font-semibold tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-background/50 border border-body/20 rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline mt-2 inline-block transition md:hover:text-sky-500"
                >
                  Voir le projet
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
