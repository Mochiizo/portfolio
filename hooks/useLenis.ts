'use client';

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    // Initialisation Lenis
    const lenis = new Lenis({
      duration: 1.2,               // durée du scroll
      easing: (t) => t,            // easing linéaire
      gestureOrientation: "vertical", // direction verticale
      wheelMultiplier: 1,          // vitesse du scroll
    });

    // RAF pour que Lenis fonctionne
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Nettoyage
    return () => lenis.destroy();
  }, []);
}
