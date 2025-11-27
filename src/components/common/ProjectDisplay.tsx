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
        <div className="o-scroll" data-scroll-container="" id="js-scroll">
          <section
            className="selected-works h-screen"
            id="sW"
            data-persistent=""
            data-scroll-section=""
		  >
            <div className="list-projects">
              <div className="project-box">
                <div className="arrow-down">
                  <span></span>
                  <span></span>
                </div>
                <div className="project-heading">
                  <h3>MORE PROJECTS THAT BROUGHT IDEAS TO LIFE</h3>
                </div>
                <div className="project-text font-nats text-[12px] md:text-[16px] text-[#351A12] md:text-[#351A12] md:pr-0">
                  Each case study reflects intentional design paired with<br className="br-m" />scalable solutions. We have collaborated with forward-<br className="br-m" />
                  thinking <br className="br-d" />brands to translate vision into value, building <br className="br-m" />identities that elevate businesses and evolve with them.
                </div>
              </div>
				<a
				  href=""
				  className="project"
				  aria-label="Typsy Beauty"
				  name="Typsy Beauty"
				  data-scroll=""
				  data-scroll-repeat=""
				  data-scroll-offset="50%, 50%"
				  data-scroll-call="changeBG"
				  data-background="#133A74"
				  data-next-color="DFD3C3"
				  style={{ color: "#DFD3C3" }}
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
					  <name>Typsy Beauty</name>
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

					<h3>
					  <p>
						<span>Authorship</span>
						<span>book design</span>
					  </p>
					  <name>Typsy Beauty</name>
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
				  </div>
				</a>
				<a
				  href=""
				  className="project"
				  aria-label="NIMHANS"
				  name="NIMHANS"
				  data-scroll=""
				  data-scroll-repeat=""
				  data-scroll-offset="50%, 50%"
				  data-scroll-call="changeBG"
				  data-background="#133A74"
				  data-next-color="DFD3C3"
				  style={{ color: "#DFD3C3" }}
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
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book4.jpg" 
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
					  <name>NIMHANS</name>
					</h3>

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
					<div className="project-marquee_img">
					  <Image 
					   src="/images/book1.jpg" 
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
					  <name>NIMHANS</name>
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
				<a className="project section-3"
				  href=""
				  className="project section-3"
				  aria-label="FA Home"
				  name="FA Home"
				  data-scroll=""
				  data-scroll-repeat=""
				  data-scroll-offset="50%, 50%"
				  data-scroll-call="changeBG"
				  data-background="#133A74"
				  data-next-color="DFD3C3"
				  style={{ color: "#DFD3C3" }}
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
					   src="/images/fahome1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img mobile-view">
					  <Image 
					   src="/images/fahome1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img mobile-view">
					  <Image 
					   src="/images/fahome1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img mobile-view">
					  <Image 
					   src="/images/fahome1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img mobile-view">
					  <Image 
					   src="/images/fahome2.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					
					<h3>
					  <p>
						<span>Brand Identity</span>
						<span>Web design</span>
					  </p>
					  <name>FA Home</name>
					</h3>
					<div className="project-marquee_img mobile-view">
					  <Image 
					   src="/images/fahome3.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img mobile-view">
					  <Image 
					   src="/images/fahome4.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img mobile-view">
					  <Image 
					   src="/images/fahome5.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img mobile-view">
					  <Image 
					   src="/images/fahome6.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>

					<h3>
					  <p>
						<span>Brand Identity</span>
						<span>Web design</span>
					  </p>
					  <name>FA Home</name>
					</h3>

					<div className="project-marquee_img">
					  <Image 
					   src="/images/fahome1.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/fahome2.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/fahome3.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
				  </div>
				</a>
            </div>
          </section>
        </div>
	  </main>
  );
}
