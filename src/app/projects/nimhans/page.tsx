"use client";

import Contact from "@/components/landing/Contact";
import NimhansProject from "@/components/pdp/NimhansProject";
import ClientInfo from "@/components/pdp/ClientInfo";
import DirectionAndExperience from "@/components/pdp/DirectionAndExperience";
import Foundations from "@/components/pdp/Foundations";
import Hero from "@/components/pdp/Hero";
import MoreProjects from "@/components/pdp/MoreProjects";
import PageFlipBook from "@/components/pdp/PageFlipBook";
import Bookslidermobile from "@/components/landing/Bookslidermobile";
import Strategy from "@/components/pdp/Strategy";
import { pdpData } from "@/data/pdpData";
import { useState } from "react";
import Image from "next/image";

export default function PDP2() {
  const data = pdpData.pdp2;

  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandChange = (isExpandedNow: any) => {
    setIsExpanded(isExpandedNow);
  };
  const foundationContent = [
    {
      title: "The Reality",
      content: data.page4.theReality ?? null,
      maxLength: 450,
      mobileMaxLength: 450,
    },
    {
      title: "The Challenge",
      content: data.page4.theChallenge ?? null,
      maxLength: 450,
      mobileMaxLength: 450,
    },
  ];

  const strategyContent = [
    {
      title: "The Solution",
      content: data.page6.theSolution ?? null,
      maxLength: 450,
      mobileMaxLength: 450,
    },
    {
      title: "The Visual Narative",
      content: data.page6.theVisualNarrative ?? null,
      maxLength: 450,
      mobileMaxLength: 450,
    },
  ];

  return (
    <main className="pt-0">
      <Hero
        area={data.page1.area}
        title={data.page1.title}
        shortDescription={data.page1.shortDescription}
        descMarginBottom="mb-0"
        projectLink={data.page1.projectLink}
        image={data.page1.image ?? ""}
        imageMobile={data.page1.imageMobile ?? ""}
        paddingMobile="px-[30px] py-[35px]"
        paddingXl="xl:p-12"
        areaLength={3}
        itemGap="gap-x-5"
        mobileTitleColor="text-[#351A12]"
      />
	  
      <ClientInfo
        pageTitle={data.page2.pageTitle}
        clientBackground={data.page2.clientBackground}
        height="lg:h-[720px]"
        itemGap="gap-y-[9px] md:gap-y-4 lg:gap-x-[40px]"
        role={data.page2.role}
        image={data.page2.image ?? ""}
        imageMobile={data.page2.imageMobile ?? ""}
        industry={data.page2.industry}
        team={null}
        titleColor="text-[#F0E5D6]"
        paddingMobile="py-[35px] px-[29.9px]"
        paddingXl="xl:px-[54px] xl:py-[52px]"
      />
	  
      <section className="w-full flex justify-center items-center">
        <Image
          src={data.page3.media ?? ""}
          alt="Media"
          width={1200}
          height={738}
          className="hidden lg:block w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
        <Image
          src={data.page3.mediaMobile || data.page3.media || ""}
          alt="Media"
          width={1200}
          height={738}
          className="lg:hidden w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </section>
	  
	  <div className="flex flex-col lg:flex-row w-full font-nats overflow-x-hidden">
	  <div className="lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center px-[30px] md:py-[40px] py-[48px] ">
	  <div className="w-full text-left">
	  <div className="flex flex-col">
	  <div className=" ">
	  <h2 className="mb-15 mt-0 font-nats font-normal text-[15px] lg:text-[20px] leading-[15px] lg:leading-normal text-[#351A12] uppercase">The Reality</h2>
	  <p className="font-nats text-[12px] lg:text-[16px] leading-[25px] text-[#351A12] mx-auto lg:mx-0">In our everyday lives, everyone experiences ups and downs every now and then. Transient periods of moodiness, unrelated to any psychiatric diagnosis, are common in most people.  But bipolar disorder is an amplification of these ordinary shifts. It is a chronic mood disorder that affects 0.4% to 0.6% of India's population. Studies indicate that nearly 1 in 3 diagnosed have attempted suicide at least once. Yet, it remains shrouded in stigma.</p>
	  </div>
	  </div></div></div>
	  <div className="lg:w-[53%] w-full h-auto px-[30px] lg:p-0">
	  <Image 
	  width="800" 
	  height="600"
	  alt=""
	  className="w-full lg:w-[740px] object-cover hidden lg:block" 
	  src="/images/pdp/pdp2/main4.jpg"/>
	  <Image 
	  width="800" 
	  height="600" 
	  alt=""
	  className="lg:hidden" 
	  src="/images/pdp/pdp2/mobile-main4.jpg"/>
	  </div>
	  <div className="hidden lg:w-[47%] w-full bg-[#F0E5D4] lg:flex items-center">
	  <div className="w-full text-left md:px-[80px] py-[48px] md:mb-[37px] md:mt-[37px]">
	  <div className="flex flex-col">
	  <div>
	  <h2 className="mb-15 font-nats mt-0 font-normal text-[15px] lg:text-[20px] leading-[15px] lg:leading-normal text-[#351A12] uppercase">The Reality</h2>
	  <p className="font-nats text-[12px] lg:text-[16px] leading-[25px] text-[#351A12] mx-auto lg:mx-0">In our everyday lives, everyone experiences ups and downs every now and then. Transient periods of moodiness, unrelated to any psychiatric diagnosis, are common in most people. But bipolar disorder is an amplification of these ordinary shifts. It is a chronic mood disorder that affects 0.4% to 0.6% of India's population. Studies indicate that nearly 1 in 3 diagnosed have attempted suicide at least once. Yet, it remains shrouded in stigma.</p></div>
	  <div className="mt-5 xl:mt-[30px] mt-[20px]">
	  <h2 className="mb-15 font-nats font-normal text-[15px] lg:text-[20px] leading-[15px] lg:leading-normal text-[#351A12] uppercase">The Challenge</h2>
	  <p className="font-nats text-[12px] lg:text-[16px] leading-[25px] text-[#351A12] mx-auto lg:mx-0">Bipolar disorder in India is not just under-diagnosed; it is perilously overlooked. Many still assume that medication alone can manage the condition, disregarding the effectiveness of therapies. This lack of awareness leaves patients and caregivers ill-equipped to navigate the disorder, and such persistent barriers underscore the urgent need to address stigma and interventions that translate clinical knowledge into accessible, practical guidance.</p>
	  </div>
	  </div></div></div>
	  <div className="lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center px-[30px] pt-[48px] pb-[48px] ">
	  <div className="w-full text-left"><div className="flex flex-col">
	  <div className="mt-0">
	  <h2 className="mb-15 mt-0 font-nats font-normal text-[15px] lg:text-[20px] leading-[15px] lg:leading-normal text-[#351A12] uppercase">The Challenge</h2>
	  <p className="font-nats text-[12px] lg:text-[16px] leading-[25px] text-[#351A12] mx-auto lg:mx-0">Bipolar disorder in India is not just under-diagnosed; it is perilously overlooked. Many still assume that medication alone can manage the condition, disregarding the effectiveness of therapies. This lack of awareness leaves patients and caregivers ill-equipped to navigate the disorder, and such persistent barriers underscore the urgent need to address stigma and interventions that translate clinical knowledge into accessible, practical guidance.</p></div>
	  </div></div></div></div>
      
      <section className="w-full justify-center items-center bg-white">
        <Image
          src={data.page5.image ?? ""}
          alt="Process"
          width={1200}
          height={738}
          className="hidden lg:block w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
        <Image
          src={data.page5.imageMobile || data.page5.image || ""}
          alt="Process"
          width={1200}
          height={738}
          className="lg:hidden w-full h-[400px] md:h-[738px] lg:h-full object-cover"
        />
      </section>
	  
      <Strategy
        pageTitle={data.page6.pageTitle ?? ""}
        contentSections={strategyContent}
        image={data.page6.image ?? ""}
        imageMobile={data.page6.imageMobile ?? ""}
        paddingMobileUpper="px-[30px] pt-[25px] pb-[38px]"
        nimhansStrategy="nimhansstrategy md:pt-[8px]"
        nimhansStrategyMobile="mobilenimhansstrategy"
        paddingMobileLower="px-[30px] pt-[25px] pb-[38px]"
        paddingXl="lg:pt-3 lg:px-7 xl:px-[51px] xl:pb-[30px] xl:-mt-[5px] lg:pb-[20px]"
        imageClass={
          isExpanded
            ? "w-full  lg:h-full  xl:w-[746px] object-cover"
            : "w-full lg:h-full  xl:w-[746px] object-cover"
        }
        onExpandChange={handleExpandChange}
      />
      <DirectionAndExperience
        pageTitle={null}
        finalDirection={null}
        mobileFinalDirection={null}
        height={null}
        image={data.page7.image ?? ""}
        imageMobile={data.page7.imageMobile ?? ""}
        titleClass={null}
        contentClass={null}
        paddingXl={null}
      />
      <section className="hidden lg:flex flex flex-col justify-center items-center px-[11px] pt-[49px] md:p-[45px] md:pb-[0px] lg:pt-[75px] lg:px-[62px] xl:pt-[94px] xl:px-[172px] bg-transparent">
        <div className="relative w-full lg:w-[900px] xl:w-[1096px]">
          <PageFlipBook
            images={[
              "/images/pdp/pdp2/book/2.jpg",
			  "/images/pdp/pdp2/book/1.jpg",
              "/images/pdp/pdp2/book/3.jpg",
              "/images/pdp/pdp2/book/4.jpg",
              "/images/pdp/pdp2/book/5.jpg",
              "/images/pdp/pdp2/book/6.jpg",
              "/images/pdp/pdp2/book/7.jpg",
              "/images/pdp/pdp2/book/8.jpg",
              "/images/pdp/pdp2/book/9.jpg",
              "/images/pdp/pdp2/book/10.jpg",
              "/images/pdp/pdp2/book/11.jpg",
              "/images/pdp/pdp2/book/12.jpg",
              "/images/pdp/pdp2/book/13.jpg",
              "/images/pdp/pdp2/book/14.jpg",

            ]}
          />
        </div>
      </section>
	  <Bookslidermobile />
	  <NimhansProject />
      <Contact />
    </main>
  );
}
