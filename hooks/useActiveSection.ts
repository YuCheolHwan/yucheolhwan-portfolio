"use client";

import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    observersRef.current.forEach((obs) => obs.disconnect());
    observersRef.current = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-15% 0px -75% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observersRef.current.push(observer);
    });

    return () => {
      observersRef.current.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}
