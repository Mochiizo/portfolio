import ExperienceCard from "./experience-accordion"

export default function ExperienceSection(){
    return(
        <div>
            <h1 className="title-old text-primary font-serif text-[1.5rem] tracking-tight">Experiences</h1>
            <h2 className="text-base font-medium tracking-tight text-muted-foreground">Mes missions & les entreprises</h2>
            <ExperienceCard
            company="SFR Réunion & Mayotte"
            role="Alternant Développeur"
            date="Décembre 2024 - Octobre, 2025"
            location="Saint-Denis, Réunion"
            logo="/sfr.png"
            points=
            {
              [
              "Maintenance & évolution des applications internes.",
              "Analyse, traitement des incidents et demandes d’amélioration.",
              "Participation aux évolutions fonctionnelles du SI.",
            ]
          }
      />
      <ExperienceCard
        company="Crispo"
        role="Stage Développeur"
        date="Janvier 2024 - Mars 2024"
        location="Ta 'Xbiex, Malte"
        logo="/malte.webp"
        points={[
          "Développement et intégration sur applications internes.",
          "Correction de bugs et optimisation.",
          "Création au développement d'un ChatBot IA",
        ]}
      />
      
      <ExperienceCard
        company="Suez Réunion"
        role="Stagiaire Développeur"
        date="Décembre 2024 - Octobre, 2025"
        location="Saint-Marie, Réunion"
        logo="/suez.webp"
        points={[
          "Participation à la maintenance applicative.",
          "Support aux équipes internes et gestion d’incidents.",
          "Développement de petites évolutions fonctionnelles selon les besoins métiers.",
        ]}
        
      />
        </div>
    )
}