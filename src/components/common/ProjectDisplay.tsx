"use client";
import { pdpData, PDPData } from "@/data/pdpData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectDisplayProps {
  excludeProjectId?: string;
}

export default function ProjectDisplay({
  excludeProjectId,
}: ProjectDisplayProps) {
  const allProjects: PDPData[] = Object.values(pdpData);

  const projectsToDisplay = excludeProjectId
    ? allProjects.filter((p) => p.id !== excludeProjectId)
    : allProjects;

  const firstProject = projectsToDisplay[0];
  const remainingProjects = projectsToDisplay.slice(1);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!firstProject) return;

    const ctx = gsap.context(() => {
      const card = document.getElementById("first-project-card");
      const container = document.getElementById("first-project-container");

      if (!card || !container) return;

      gsap.set(card, { x: "100vw" });

      gsap.to(card, {
        x: 247,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [firstProject]);

  return (
    <canvas id="transition"></canvas>

      <main data-barba="container" data-barba-namespace="home">
        
	  </main>
  );
}
