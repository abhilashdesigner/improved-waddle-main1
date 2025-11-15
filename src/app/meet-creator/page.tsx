"use client";

import Contact from "@/components/landing/Contact";
import Logos from "@/components/landing/Logos";
import MeetCreator from "@/components/meet-creator/MeetCreator";



export default function MeetCreatorPage() {
  return (
    <main className="pt-0 overflow-x-hidden">
      <MeetCreator />

      {/* INTERNAL CSS */}
      <style jsx>{`
		.main-section{margin:auto;}
		.m-sectiom{display:flex; width:100%;}
		.m-left-top{position:relative; display:flex; width:30%; border-top:1px solid #fff; border-left:1px solid #fff;}
		.m-left-top::before {content: '';display: inline-block;width: 1vw;height: 1vw;position: absolute;background: #D2ADCE;bottom:-1vw;left: -2%;z-index: 1;}	
		.m-left-top-text{position: absolute;top: 16%;left: 16%; color:#fff;padding-right: 10%;}
		.main-section h3{margin-top:0px;position:relative;line-height: 40px;margin-bottom: 9px;}
		.m-medium::before {content: '';display: inline-block;width: 1vw;height: 1vw;position: absolute;background: #D2ADCE;top: 19%;left: 10%;z-index: 1;}	
		h3{font-family: Nats; font-weight: normal;font-style: normal; text-transform:uppercase;}
		.m-left-top-2 h1{margin-left:16%;line-height: normal;margin-top: -7px;font-size: 96px;}
		.m-medium{display:flex; width:40%;position:relative;}
		.m-right-top{position:relative; display:flex; width:30%;border-top:1px solid #fff; border-right:1px solid #fff;}
		.m-right-top-text{position: absolute;top: 16%;color:#fff;padding-left:6%;}
		.m-medium::after {content: '';display: inline-block;width: 1vw;height: 1vw;position: absolute;background: #D2ADCE;top: 19%;right: 10%;z-index: 1;}	
		.svg-line-l{position:absolute; top:0; left:0;}
		.svg-line-r{position: absolute;top: -38.2%;
			right: -21.5%;
			transform: rotate(-107deg);}
		.svg-line-2{position: absolute;top: 0;left: 0;}	
		.m-sectiom-2{display:flex; width:100%;margin-top: -13px;}	
		.m-medium-2{ width:40%;position:relative;}
		.m-medium-2::before {content: '';display: block;width: 1vw;height: 1vw;position: absolute;background: #D2ADCE;top: -10%;left: 48.6%;z-index: 1;}	
		.m-right-top-2{position:relative; width:30%;border-right:1px solid #fff;}
		.m-left-top-2{position:relative;width:30%;}
		.m-right-top-2 div{padding-right:20%;padding-left:6%;padding-bottom:32%;}
		.m-right-top-2 div.m-right-top-2-b{position: relative;
			top: -18%;padding-bottom:20%;}
		.m-right-top-2::after {content: '';display: inline-block;width: 1vw;height: 1vw;position: absolute;background: #D2ADCE;top:3%;right: -1.99%;	z-index: 1;}
		.m-right-top-2-1::after {content: '';display: inline-block;width: 1vw;height: 1vw;position: absolute;background: #D2ADCE;top:-12%!important;right: -1.99%;	z-index: 1;}
		.m-medium-2 div{padding-left:22.5%;padding-right:18.5%;}
		.b-medium-2 div{padding-left:22.5%;padding-right:18.5%;padding-top: 12%;}
		.blank::before{display:none;}
		.b-sectiom-2{display:flex; width:100%;}	
		.b-medium-2{ width:40%;position:relative;border-top:1px solid #fff;}
		.b-right-top-2{position:relative; width:30%;border-top:1px solid #fff;}
		.b-left-top-2{position:relative;width:30%;padding-left: 5%;padding-top: 4.8%;}
		.b-left-top-2::after {content: '';display: inline-block;width: 10%;height: 1px;position: absolute;background: #fff;top: 0%;right: 0%;z-index: 1;}
		.b-right-top-2 div{padding-right:20%;padding-left:8%;padding-top: 16%;}
		.b-medium-2::before {content: '';display: block;width: 1vw;height: 1vw;position: absolute;background: #D2ADCE;top: -3%;left: 48.6%;z-index: 1;}
		.b-medium-2::after {content: '';display: block;width: 1vw;height: 1vw;position: absolute;background: #D2ADCE;top: -3%;left: -10%;z-index: 1;}	
		.b-right-top-2::after {content: '';display: inline-block;width: 1vw;height: 1vw;position: absolute;background: #D2ADCE;top:-3%;left: 8%;z-index: 1;}
		.m-mobile-section{display:none;}

		@media (max-width:768px){
		.m-left-top-2 h1 {
			margin-left: 16%;
			line-height: normal;
			margin-top: 0px;
			font-size: 59px;
		}
		.main-section{display:none;}
		.m-mobile-section .main-section, .m-mobile-section{display:block}
		.m-mobile-section{overflow:auto; width:100%;}
		.m-mobile-section .main-section{width:1500px;padding:10px;}
		.m-left-top, .m-right-top, .m-right-top-2, .m-left-top-2{width:230px;}
		.m-left-top::before {width: 10px;height: 10px;bottom:-10px;left: -5px;z-index: 1;}	
		.m-left-top-text{position: absolute;top: 30px;left: 30px; color:#fff;padding-right:0px;}
		.main-section h3{margin-top:0px;position:relative;line-height: 25px;}
		.m-medium::before {width: 10px;height: 10px;top: 40px;
				left: 307px;z-index: 1;}	
		.m-medium{display:flex; width:350px;position:relative;}
		.m-right-top-text{position: absolute;top: 33px;right: 34px; color:#fff;padding-left: 0%;}
		.m-medium::after {content: '';display: inline-block;width: 10px;height: 10px;position: absolute;background: #D2ADCE;top: 36px;left: 30px;z-index: 1;}	
		.svg-line-r{top: -99px;
				right: -84px;
				transform: rotate(-100deg);}
		.m-sectiom-2{display:flex; width:100%;}	
		.m-medium-2{ width:350px;position:relative;}
		.m-medium-2::before {top: -15px;left: 171px;width: 10px;height: 10px;}	
		.m-right-top-2 div{padding-right: 30px;
				padding-left: 17px;
				padding-bottom: 50px;
				margin-top: 15px;}
		.m-right-top-2::after {width: 10px;height: 10px;top: 22px;right: -5px;}
		.m-medium-2 div{padding-left:75px;padding-right:60px;padding-top: 15px;}
		.b-medium-2 div{padding-left:25%;padding-right:25%;padding-top: 15%;}
		.blank::before, .blank::after{display:none;}
		.top-r-columne{width: 500px;display: flex;}
		.top-r-columne-blank{width: 250px;display: }
		.top-r-columne-text{width: 250px;display: flex;border-top:1px solid #fff;border-right:1px solid #fff;border-bottom:1px solid #fff;}
		.top-r-columne-text div, .top-r-columne-text-b div{padding: 33px 32px;}
		.top-r-columne-text-mb{position:relative;margin-bottom: 21px;align-items: center;}
		.top-r-columne-text-mb::before {content: '';display: block;width:1px;height: 55px;position: absolute;background: #fff;top: 0%;left: 0%;z-index: 1;}
		.top-r-columne-text-mb::after {content: '';display: inline-block;width: 10px;height: 10px;position: absolute;background: #D2ADCE;top:54px;left: -5px;z-index: 1;}
		.top-r-columne-text-2{position:relative;margin-top: 3px;align-items: center;}
		.top-r-columne-text-2::before {content: '';display: block;width:1px;height: 13px;position: absolute;background: #fff;top: -13px;left: 0%;z-index: 1;}
		.top-r-columne-text-2::after {content: '';display: inline-block;width: 10px;height: 10px;position: absolute;background: #D2ADCE;top:67px;right: -5px;z-index: 1;}
		.top-r-columne-blank-2{border-bottom:1px solid #fff;}
		.top-r-columne-text-b{position:relative;border:0px;flex;margin-top: 23px;}
		.top-r-columne-text-b::after {content: '';display: inline-block;width: 10px;height: 10px;position: absolute;background: #D2ADCE;top: -15px;
				left: 33px;z-index: 1;}
		.border-0{border:0px;}
		}



		`}/style>

      {/* INSERTED YOUR FULL SECTION HERE */}
      <div className="main-section">
		<div className="m-sectiom">
		<div className="m-left-top">
		<img src="/images/2.jpg" width="100%" height="auto" style={{ visibility: "hidden" }} />
		<div className="m-left-top-text">
		<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Modern School Barakhamba<br>road, new delhi</h3>
		<p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Recognised for excellence in painting by<br>Mr. L.K. Advani and awarded for the<br>recreation of the Sistine Chapel.</p>
		</div>
		<div>

		</div>
		</div>
		<div className="m-medium">
		<img src="/images/3.png" width="100%" height="auto" style={{ visibility: "hidden" }} />
		<div className="svg-line">
		<svg className="svg-line-2" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
		  <line x1="0" y1="0" x2="50%" y2="90%" style="stroke:#fff;stroke-width:1" />
		</svg>
		<svg className="svg-line-r" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
		  <line x1="0" y1="0" x2="50%" y2="90%" style="stroke:#fff;stroke-width:1" />
		</svg>
		</div>
		<div>

		</div>
		</div>
		<div className="m-right-top"><img src="/images/2.jpg" width="100%" height="auto" style={{ visibility: "hidden" }} />
		<div className="m-right-top-text">
		<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Srishti manipal institute of art,<br>design & technology, <br>bangalore</h3>
		<p>Majored in Visual Communication and<br>Strategic Branding along with a minor in<br>Contemporary Art Practices.</p>
		</div>

		</div>
		</div>
		<div className="m-sectiom-2">
		<div className="m-left-top-2"><h1 className="font-normal font-monthis text-[#ffffff] m-0 p-0 whitespace-nowrap leading-none">The<br>Creator’s<br>Path</h1></div>
		<div className="m-medium-2">
		<div>
		<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Femme le shakti- art exhibition,<br> paris, france</h3>
		<p>Exhibited paintings on women empowerment<br>at the Indian Embassy in Paris. The show was<br>inaugurated bycelebrated artist<br>Mr. Shakti Burman.</p>
		</div>
		</div>
		<div className="m-right-top-2">
		<div>
		<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">NIMHANS , bangalore</h3>
		<p>Wrote and designed Numbing Exhilaration,<br>a graphic novel on Bipolar Disorder.<br>Created in collaboration with doctors and<br>patients from the Psychosis Department.</p>
		</div>


		</div>

		</div>
		<div className="m-sectiom-2">
		<div className="m-left-top-2"></div>
		<div className="m-medium-2 blank"></div>
		<div className="m-right-top-2 m-right-top-2-1">
		<div className="m-right-top-2-b">
		<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">HOLIDAY INN, DHAKA, bangladesh</h3>
		<p>Curated  a wide range of artworks under<br>IHG (InterContinental Hotels Group)</p>
		</div>
		</div>

		</div>
		<div className="b-sectiom-2">
		<div className="b-left-top-2">
		<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">OCULARITY ANALYTICS, GURGAON</h3>
		<p>Led the design vertical as Head of Design.<br>Directed projects  for clients like Typsy Beauty,<br>Janavi India and Mercari. Worked across beauty,<br>fashion, tech, wellness and retail sectors.</p>
		</div>
		<div className="b-medium-2">
		<div>
		<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">AMPLIFY MEDIA, NEW DELHI</h3>
		<p>Designed social campaigns and digital assets<br>for brands like DLF Emporio, DLF Chanakya<br>and ITC. Worked across luxury, lifestyle, NGO<br>and F&B sectors.</p>
		</div>
		</div>
		<div className="b-right-top-2">
		<div>
		<h3 className="font-normal text-[20px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">FOUR POINTS BY SHERATON, NEW DELHI</h3>
		<p>Formulated brand identities for the<br>banquet hall, gym, and spa. Created<br>paintings for their public spaces.</p>
		</div>
		</div>

		</div>
		</div>
		
		<div className="m-mobile-section">
		<div style="display:flex;">
		<div className="main-section">
		<div className="m-sectiom">
		<div className="m-left-top">
		<img src="/images/2.jpg" width="100%" height="auto" style={{ visibility: "hidden" }} />
		<div className="m-left-top-text">
		<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Modern School Barakhamba<br>road, new delhi</h3>
		<p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Recognised for excellence in painting by<br>Mr. L.K. Advani and awarded for the<br>recreation of the Sistine Chapel.</p>
		</div>
		<div>

		</div>
		</div>
		<div className="m-medium">
		<img src="/images/3.png" width="100%" height="auto" style={{ visibility: "hidden" }} />
		<div className="svg-line">
		<svg className="svg-line-2" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
		  <line x1="0" y1="0" x2="50%" y2="90%" style="stroke:#fff;stroke-width:1" />
		</svg>
		<svg className="svg-line-r" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
		  <line x1="0" y1="0" x2="50%" y2="90%" style="stroke:#fff;stroke-width:1" />
		</svg>
		</div>
		<div>

		</div>
		</div>
		<div className="m-right-top"><img src="/images/2.jpg" width="100%" height="auto" style={{ visibility: "hidden" }} />
		<div className="m-right-top-text">
		<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Srishti manipal institute of<br>art,design & technology, <br>bangalore</h3>
		<p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Majored in Visual Communication and<br>Strategic Branding along with a minor in<br>Contemporary Art Practices.</p>
		</div>

		</div>
		<div className="top-r-columne">
		<div className="top-r-columne-blank"></div>
		<div className="top-r-columne-text top-r-columne-text-mb ">
		<div>
		<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">OCULARITY analytics, <br>gurgaon</h3>
		<p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Led the design vertical as Head of Design.<br>Worked across beauty, fashion, tech,<br>wellness and retail sectors.</p>
		</div>
		</div>
		</div>
		</div>
		<div className="m-sectiom-2">
		<div className="m-left-top-2"><h1 className="font-normal text-[64px] lg:text-[96px] font-monthis text-[#ffffff] m-0 p-0 whitespace-nowrap leading-none">The<br>Creator’s<br>Path</h1></div>
		<div className="m-medium-2">
		<div>
		<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Femme le shakti- art exhibition,<br> paris, france</h3>
		<p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Exhibited paintings on women empowerment<br>at the Indian Embassy in Paris. The show was<br>inaugurated by celebrated artist<br>Mr. Shakti Burman.</p>
		</div>
		</div>
		<div className="m-right-top-2">
		<div>
		<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">NIMHANS, BANGALORE</h3>
		<p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Wrote and designed Numbing<br>Exhilaration, a graphic novel on Bipolar<br>Disorder. Created in collaboration with<br>doctors and patients from the Psychosis<br>Department.</p>
		</div>


		</div>
		<div className="top-r-columne">
		<div className="top-r-columne-blank top-r-columne-blank-2"></div>
		<div className="top-r-columne-text top-r-columne-text-2">
		<div>
		<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Amplify media, new delhi</h3>
		<p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Designed social campaigns and digital<br>assets for brands like DLF<br>Emporio, DLF Chanakya and ITC.</p>
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
		<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">Holiday inn, dhaka,<br>bangladesh</h3>
		<p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Curated  a wide range of artworks under<br>IHG (InterContinental Hotels Group).</p>
		</div>
		</div>
		<div className="top-r-columne-text top-r-columne-text-b">
		<div>
		<h3 className="font-normal text-[15px] lg:text-[20px] font-nats text-[#F7F5ED] uppercase m-0 p-0">FOUR POINTS BY SHERATON,<br>new delhi</h3>
		<p className="font-nats text-[12px] md:text-[16px] text-[#F7F5ED] md:text-[#F0E5D6] md:pr-0">Formulated brand identities for the<br>banquet hall, gym, and spa. Created<br>paintings for their public spaces.</p>
		</div>
		</div>
		</div>
		</div>

		<div>
		</div>

      <Logos />
      <Contact />
    </main>
  );
}




// "use client";

// import Contact from "@/components/landing/Contact";
// import Logos from "@/components/landing/Logos";
// import MeetCreator from "@/components/meet-creator/MeetCreator";
// import Image from "next/image";


// export default function MeetCreatorPage() {
//   return (
//     <main className="pt-0 overflow-x-hidden">
//       <MeetCreator />
//       <section className="w-full flex justify-center items-center">
//         <Image
//           src="/images/meet-creator.png"
//           alt="Media"
//           width={1200}
//           height={738}
//           className="w-full h-[570px] md:h-[738px] lg:h-full object-cover"
//         />
//       </section>
//       <Logos />
//       <Contact />
//     </main>
//   );
// }
