'use client';

import { Github, Linkedin, Mail, StickyNoteIcon, TwitterIcon } from "lucide-react";
import ExperienceSection from "@/components/experience-section";
import ProjetSection from "@/components/projet-section";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <main className="relative px-6 md:px-16 py-8 max-w-4xl mx-auto">
        
        {/* NAVIGATION */}
        <nav className="flex items-center justify-between pb-8 border-b border-sky-200">
          <div>
            <img
              src="/Logo.JPG"
              alt="logo"
              width={60}
              height={60}
              className="transition-all duration-300 ease-linear hover:rotate-180 rounded-full border-2 border-sky-300"
            />
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/skills"
              target="_self"
              className="text-sky-600 font-medium hover:text-sky-800 transition duration-150 underline-offset-4 hover:underline"
            >
              skills
            </a>
            <a
              href="/contact"
              className="text-sky-600 font-medium hover:text-sky-800 transition duration-150 underline-offset-4 hover:underline"
            >
              contact
            </a>
          </div>
        </nav>

        {/* TITRE */}
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-sky-700 tracking-tight mt-8 mb-3">
          Hautbois Mathis
        </h1>

        <div className="flex items-center gap-3 mb-6 text-sky-500 text-sm md:text-base">
          <span className="font-medium text-sky-600">Développeur Front</span>
          <span className="h-1 w-1 bg-sky-400 rounded-full"></span>
          <span className="font-medium text-sky-600">Développeur Back</span>
        </div>

        {/* BIO */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8 ">
          Wesh ! Wesh ! Wesh ! Je m'appelle{" "}
          <span className="font-semibold text-sky-800">Mathis Hautbois</span>,{" "}
          <span className="text-sky-600 font-medium">Développeur Full Stack</span> spécialisé dans la conception{" "}
          <span className="text-sky-600 font-medium">d'Applications Web Modernes</span> et{" "}
          <span className="text-sky-600 font-medium">Performantes</span>. J’aime transformer des idées en produits concrets grâce à React, Next.js, Laravel, Node.js et SQL. Mon objectif : créer des applications rapides, propres et utiles, avec une vraie valeur pour les utilisateurs.
        </p>

        {/* LIENS SOCIAUX */}
        <div className="grid grid-cols-3 md:flex md:flex-row gap-4 text-sm mb-12">
          <a href="https://github.com/Mochiizo" className="flex items-center gap-2 text-neutral-500 hover:text-sky-900 transition duration-150 underline-offset-4 hover:underline">
            <Github className="w-5 h-5" />
            Github
          </a>
          <a href="https://www.linkedin.com/in/mathis-hautbois-3703ab282/" className="flex items-center gap-2 text-neutral-500 hover:text-sky-900 transition duration-150 underline-offset-4 hover:underline">
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 text-neutral-500 hover:text-sky-900 transition duration-150 underline-offset-4 hover:underline">
            <TwitterIcon className="w-5 h-5" />
            Twitter
          </a>
          <a href="promathis.hautbois@gmail.com" className="flex items-center gap-2 text-neutral-500 hover:text-sky-900 transition duration-150 underline-offset-4 hover:underline">
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a href="/CV-Mathis-Hautbois.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-500 hover:text-sky-900 transition duration-150 underline-offset-4 hover:underline">
            <StickyNoteIcon className="w-5 h-5" />
            Mon CV
          </a>
        </div>

        {/* SECTIONS */}
        <div className="space-y-16">
          <ExperienceSection />
          <ProjetSection />
        </div>
      </main>
    </div>
  );
}
