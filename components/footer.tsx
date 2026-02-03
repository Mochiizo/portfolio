"use client";

import { Lightbulb, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export default function Footer() {
  const [time, setTime] = useState("");
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = DateTime.now().setZone("Europe/Paris");
      setTime(now.toFormat("HH:mm:ss"));
      setHour(Number(now.toFormat("HH")));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isNight = hour >= 18 || hour < 6;

  return (
    <footer className="pt-8">
      <hr className="bg-title h-px" />
      <div className="flex items-center justify-between pt-4 text-xs">
        <div className="flex items-center gap-1">
          <Lightbulb className="w-4 h-4 text-title" />
          <span>Mise à jour le 03 Février 2026</span>
        </div>

        <div className="flex items-center gap-2">
          {isNight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          <span>France, {time}</span>
        </div>
      </div>
    </footer>
  );
}
