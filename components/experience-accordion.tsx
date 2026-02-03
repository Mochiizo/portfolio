import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import Image from "next/image";
  
  type ExperienceProps = {
    company: string;
    role: string;
    date: string;
    location: string;
    logo: string;
    points: string[];
  };
  
  export default function ExperienceAccordion({
    company,
    role,
    date,
    location,
    logo,
    points,
  }: ExperienceProps) {
    return (
      <Accordion type="single" collapsible className="group relative -mx-3 w-full transform rounded-lg px-3 py-3 transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:bg-sky-100/20">
        <AccordionItem value={company} className="border-none">
          <AccordionTrigger className="hover:no-underline p-4">
            <div className="flex items-center gap-4 w-full">
              {/* Logo */}
              <div className="relative w-12 h-12">
                <Image src={logo} alt={company} fill className="rounded-md object-cover" />
              </div>
  
              {/* Title */}
              <div className="flex-1 text-left">
                <h3 className="font-semibold">{company}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
  
              {/* Date */}
              <div className="text-sm text-muted-foreground">
                {date}
              </div>
            </div>
          </AccordionTrigger>
  
          <AccordionContent className="pl-16 pb-4">
            <p className="text-xs text-muted-foreground">{location}</p>
  
            <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
              {points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  