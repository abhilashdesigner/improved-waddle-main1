"use client";

import Contact from "@/components/landing/Contact";
import Logos from "@/components/landing/Logos";
import MeetCreator from "@/components/meet-creator/MeetCreator";
import Image from "next/image";


export default function MeetCreatorPage() {
  return (
    <main className="pt-0 overflow-x-hidden">
      <MeetCreator />
      <section className="w-full flex justify-center items-center">
        <div className="flex w-full bg-[#351A12] font-nats overflow-x-hidden px-[20px] py-[20px] pb-0 lg:px-[50px] lg:py-[50px] xl:px-[104px] xl:py-[40px] desktop-xl:px-[104px] desktop-xl:py-[50px]">
            <div className="main-section">
		<div className="m-sectiom">
			<div className="m-left-top">
				<Image
				  src="/images/2.jpg"
				  alt="Media"
				  width={100}
				  height={100}
				  className="w-full visibility-hidden"
				/>
				<div className="m-left-top-text">
					<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Modern School Barakhamba<br />road, new delhi</h3>
					<p className="font-nats text-[12px] md:text-[18px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Recognised for excellence in painting<br />by Mr. L.K. Advani and awarded for<br />the recreation of the Sistine Chapel.</p>
				</div>
			</div>
			<div className="m-medium">
				<Image
				  src="/images/3.png"
				  alt="Media"
				  width={100}
				  height={100}
				  className="w-full visibility-hidden"
				/>
				<div className="svg-line">
					<svg
						className="svg-line-2"
						height="100%"
						width="100%"
						xmlns="http://www.w3.org/2000/svg"
						>
						<line
							x1="0"
							y1="0"
							x2="50%"
							y2="90%"
							style={{ stroke: "#fff", strokeWidth: 1 }}
						/>
						</svg>
						<svg
						className="svg-line-r"
						height="100%"
						width="100%"
						xmlns="http://www.w3.org/2000/svg"
						>
						<line
							x1="0"
							y1="0"
							x2="50%"
							y2="90%"
							style={{ stroke: "#fff", strokeWidth: 1 }}
						/>
					</svg>
				</div>
			</div>
			<div className="m-right-top">
			   <Image
				src="/images/2.jpg"
				alt="Media"
				width={100}
				height={100}
				className="w-full visibility-hidden"
			   />
				<div className="m-right-top-text">
					<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Srishti manipal institute of art,<br />design & technology, <br />bangalore</h3>
					<p className="font-nats md:text-[18px]">Majored in Visual Communication and<br />Strategic Branding along with a minor in<br />Contemporary Art Practices.</p>
				</div>
			</div>
		</div>
		
		<div className="m-sectiom-2">
			<div className="m-left-top-2">
				<h1 className="font-normal font-monthis text-[#ffffff] m-0 p-0 whitespace-nowrap leading-none">The<br />Creator’s<br />Path</h1>
			</div>
			<div className="m-medium-2">
				<div>
					<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Femme le shakti- art exhibition,<br /> paris, france</h3>
					<p className="font-nats md:text-[18px]">Exhibited paintings on women empowerment at the Indian Embassy<br />in Paris. The show was inaugurated bycelebrated artist Mr. Shakti Burman.</p>
				</div>
			</div>
			<div className="m-right-top-2">
				<div>
					<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">NIMHANS , bangalore</h3>
					<p className="font-nats md:text-[18px]">Wrote and designed Numbing Exhilaration, a graphic novel on Bipolar Disorder. Created in collaboration with doctors and<br />patients from the Psychosis Department.</p>
				</div>
			</div>
		</div>
		<div className="m-sectiom-2">
			<div className="m-left-top-2"></div>
			<div className="m-medium-2 blank"></div>
			<div className="m-right-top-2 m-right-top-2-1">
			   <div className="m-right-top-2-b">
				<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">HOLIDAY INN, DHAKA, bangladesh</h3>
				<p className="font-nats md:text-[18px]">Curated  a wide range of artworks under IHG (InterContinental Hotels Group)</p>
			   </div>
			</div>
		</div>
		<div className="b-sectiom-2">
            <div className="b-left-top-2">
                <h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">OCULARITY ANALYTICS, GURGAON</h3>
                <p className="font-nats md:text-[18px]">Led the design vertical as Head of Design.<br />Directed projects  for clients like Typsy Beauty, Janavi India and Mercari.<br />Worked across beauty, fashion, tech,<br />wellness and retail sectors.</p>
            </div>
		<div className="b-medium-2">
		    <div>
		        <h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">AMPLIFY MEDIA, NEW DELHI</h3>
		        <p className="font-nats md:text-[18px]">Designed social campaigns and digital assets for brands like DLF Emporio, DLF Chanakya and ITC. Worked across luxury, lifestyle, NGO and F&B sectors.</p>
		    </div>
		</div>
		<div className="b-right-top-2">
            <div>
                <h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">FOUR POINTS BY SHERATON, NEW DELHI</h3>
                <p className="font-nats md:text-[18px]">Formulated brand identities for the<br />banquet hall, gym, and spa. Created<br />paintings for their public spaces.</p>
            </div>
		</div>

		</div>
		
		</div>
		<div className="m-mobile-section">
			<div className="flex">
				<div className="main-section">
					<div className="m-sectiom">
						<div className="m-left-top">
							<Image
								src="/images/2.jpg"
								alt="Media"
								width={100}
								height={100}
								className="w-full visibility-hidden"
							/>
							<div className="m-left-top-text">
								<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Modern School Barakhamba<br />road, new delhi</h3>
								<p className="font-nats text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Recognised for excellence in painting by Mr. L.K. Advani and awarded for the recreation of the Sistine Chapel.</p>
							</div>
							</div>
							<div className="m-medium">
							<Image
								src="/images/3.png"
								alt="Media"
								width={100}
								height={100}
								className="w-full visibility-hidden"
							/>
							<div className="svg-line">
							<svg
								className="svg-line-2"
								height="100%"
								width="100%"
								xmlns="http://www.w3.org/2000/svg"
								>
								<line
									x1="0"
									y1="0"
									x2="50%"
									y2="90%"
									style={{ stroke: "#fff", strokeWidth: 1 }}
								/>
								</svg>
								<svg
								className="svg-line-r"
								height="100%"
								width="100%"
								xmlns="http://www.w3.org/2000/svg"
								>
								<line
									x1="0"
									y1="0"
									x2="50%"
									y2="90%"
									style={{ stroke: "#fff", strokeWidth: 1 }}
								/>
								</svg>
							</div>
							</div>
							<div className="m-right-top">
								<Image
									src="/images/2.jpg"
									alt="Media"
									width={100}
									height={100}
									className="w-full visibility-hidden"
								/>
								<div className="m-right-top-text">
									<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Srishti manipal institute of<br />art, design & technology, <br />bangalore</h3>
									<p className="font-nats text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Majored in Visual Communication and Strategic Branding along with a minor in<br />Contemporary Art Practices.</p>
								</div>

							</div>
							<div className="top-r-columne">
							<div className="top-r-columne-blank"></div>
							<div className="top-r-columne-text top-r-columne-text-mb ">
								<div>
								<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">OCULARITY analytics, <br />gurgaon</h3>
								<p className="font-nats text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Led the design vertical as Head of Design. Worked across beauty, fashion, tech, wellness and retail sectors.</p>
								</div>
							</div>
						</div>
					</div>
				<div className="m-sectiom-2">
					<div className="m-left-top-2"><h1 className="font-normal text-[64px] lg:text-[96px] font-monthis text-[#ffffff] m-0 p-0 whitespace-nowrap leading-none">The<br />Creator’s<br />Path</h1><div className="arrow-hero-right cursor-pointer"><span></span><span></span></div></div>
					<div className="m-medium-2">
					<div>
					<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Femme le shakti- art exhibition,<br /> paris, france</h3>
					<p className="font-nats text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Exhibited paintings on women empowerment at the Indian Embassy in Paris. The show was<br />inaugurated by celebrated artist<br />Mr. Shakti Burman.</p>
					</div>
					</div>
					<div className="m-right-top-2">
					<div>
					<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">NIMHANS, BANGALORE</h3>
					<p className="font-nats text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Wrote and designed Numbing<br />Exhilaration, a graphic novel on Bipolar Disorder. Created in collaboration with doctors and patients from the Psychosis<br />Department.</p>
					</div>
					</div>
					<div className="top-r-columne">
					<div className="top-r-columne-blank top-r-columne-blank-2"></div>
					<div className="top-r-columne-text top-r-columne-text-2">
					<div>
					<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Amplify media, new delhi</h3>
					<p className="font-nats text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Designed social campaigns and digital assets for brands like DLF Emporio, DLF Chanakya and ITC.</p>
					</div>
					</div>
					</div>
					</div>
					<div className="m-sectiom-2">
					<div className="m-left-top-2"></div>
					<div className="m-medium-2 blank"></div>
					<div className="m-right-top-2 blank border-0"></div>
					<div className="top-r-columne">
					<div className="top-r-columne-blank top-r-columne-text-b">
					<div>
					<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Holiday inn, dhaka,<br />bangladesh</h3>
					<p className="font-nats text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Curated  a wide range of artworks under IHG (InterContinental Hotels Group).</p>
					</div>
					</div>
					<div className="top-r-columne-text top-r-columne-text-b">
					<div>
					<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">FOUR POINTS BY SHERATON,<br />new delhi</h3>
					<p className="font-nats text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Formulated brand identities for the banquet hall, gym, and spa. Created paintings for their public spaces.</p>
					</div>
					</div>
					</div>
					</div>
			</div>
			</div>
		</div>
        </div>
      </section>
      <Logos />
      <Contact />
    </main>
  );
}