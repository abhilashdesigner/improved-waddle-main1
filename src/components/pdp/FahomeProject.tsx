"use client";
import { pdpData, PDPData } from "@/data/pdpData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Script from "next/script";


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

      
    }, containerRef);

    return () => ctx.revert();
  }, [firstProject]);

  return (
  
    <section ref={containerRef} className="w-full scrollMoo bg-[#F0E5D6]">
		<div className="project-box mt-[50px] md:mt-[85px] md:mx-[50px] mx-[30px]">
                <div className="arrow-down">
                  <span></span>
                  <span></span>
                </div>
                <div className="project-heading">
                  <h3>MORE PROJECTS THAT BROUGHT IDEAS TO LIFE</h3>
                </div>
                <div className="project-text font-nats text-[16px] md:text-[18px] text-[#351A12] md:text-[#351A12] md:pr-0">
                  Each case study reflects intentional design paired with scalable solutions. We have collaborated with<br className="br-m" />forward-
                  thinking <br className="br-d" />brands to translate vision into value, building identities that elevate businesses and evolve with them.
                </div>
              </div>
		<div className="project-row">
			<div className="project-grid bottom-left">
				<a
				  href="/projects/typsy-beauty"
				  className="project mt-[80px] md:ml-[15%] ml-[20%]"
				>
				  <div
					className="project-marquee"
					aria-hidden="true"
					data-scroll=""
					data-scroll-direction="horizontal"
					data-scroll-speed="8"
				  >
					
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img md:hidden">
					  <Image 
					   src="/images/tb1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb2.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb3.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<h3>
					  <p>
						<span>WEB design</span>
						<span>UI/UX redesign</span>
					  </p>
					  <div>Typsy Beauty</div>
					</h3>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb4.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb5.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb6.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<h3>
					  <p>
						<span>WEB design</span>
						<span>UI/UX redesign</span>
					  </p>
					  <div>Typsy Beauty</div>
					</h3>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb2.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb3.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<h3>
					  <p>
						<span>WEB design</span>
						<span>UI/UX redesign</span>
					  </p>
					  <div>Typsy Beauty</div>
					</h3>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb4.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb5.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/tb6.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
				  </div>
				</a>
			</div>
			<div className="project-grid bottom-left">
				<a
				  href="/projects/nimhans"
				  className="project mt-[80px] mb-[80px] md:mt-[180px] md:mb-[180px] md:ml-[45%] ml-[40%]"
				>
				  <div
					className="project-marquee"
					aria-hidden="true"
					data-scroll=""
					data-scroll-direction="horizontal"
					data-scroll-speed="8"
				  >
				  <div className="project-marquee_img md:hidden">
					  <Image 
					   src="/images/book1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book2.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book3.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<h3>
					  <p>
						<span>Authorship</span>
						<span>book design</span>
					  </p>
					  <div>NIMHANS</div>
					</h3>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book4.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book5.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book6.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>

					<h3>
					  <p>
						<span>Authorship</span>
						<span>book design</span>
					  </p>
					  <div>NIMHANS</div>
					</h3>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book2.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book3.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<h3>
					  <p>
						<span>Authorship</span>
						<span>book design</span>
					  </p>
					  <div>NIMHANS</div>
					</h3>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book4.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book5.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book6.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
				  </div>
				</a>
			</div>
		</div>
    </section>
	
  );
}
