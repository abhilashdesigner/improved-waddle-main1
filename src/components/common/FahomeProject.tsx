'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from 'lenis';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef } from 'react';

export default function Home() {

  const container = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}, []);

  return (
    <main className="overflow-hidden">
      <div ref={container}>
        <Slide 
			direction={'right'} 
			left={"20%"} 
			progress={scrollYProgress}>			
			</Slide>
			
        
      </div>
    </main>
  );
}

const Slide = (props: any) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [200 * direction, -200 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase src={props.src}/>
    </motion.div>
  )
}

type PhraseProps = {
  src: StaticImageData;
};

const Phrase = ({ src }: PhraseProps) => {

  return (
    <div className="project-grid bottom-left">
				<a
				  href="/projects/fa-home"
				  className="project mt-[80px] mb-[80px] md:mt-[180px] md:mb-[180px]"
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
					<h3>
					  <p>
						<span>Brand Identity</span>
						<span>Web design</span>
					  </p>
					  <div>FA Home</div>
					</h3>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/fahome4.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
					  <Image 
					   src="/images/fahome5.jpg" 
					   alt="Media"
					   width={100}
					   height={100} 
					  />
					</div>
					<div className="project-marquee_img">
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
					  <div>FA Home</div>
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
					<h3>
					  <p>
						<span>Brand Identity</span>
						<span>Web design</span>
					  </p>
					  <div>FA Home</div>
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
  )
}
