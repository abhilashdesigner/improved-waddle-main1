"use client";

import React from "react";
import Image from "next/image";

interface DirectionAndExperienceProps {
  pageTitle: string | null;
  finalDirection: string | null;
  mobileFinalDirection: string | null;
  height: string | null;
  image: string | null;
  imageMobile?: string;
  titleClass: string | null;
  contentClass: string | null;
  paddingXl: string | null;
}

const DirectionAndExperience: React.FC<DirectionAndExperienceProps> = (
  props
) => {
  return (
    <>
      {props.pageTitle && props.finalDirection && (
        <div
          className={`flex flex-col lg:flex-row w-full lg:h-[229px] bg-[#351A12] font-nats overflow-x-hidden px-8 m:py-[40px] py-[48px] lg:p-12 xl:px-[100px] xl:py-[65px]`}
        >
          <div className={props.titleClass ?? ""}>
            <h2 className="m-0 font-monthis font-normal text-[32px] lg:text-[54px] text-[#D2ADCE] leading-[1.23] [word-spacing:1.5px]">
              {props.pageTitle}
            </h2>
          </div>
          <div className={props.contentClass ?? ""}>
            <p className="hidden lg:block font-nats text-[16px] lg:text-[18px] text-[#F7F5ED] leading-[26px] md:leading-loose">
              {props.finalDirection}
            </p>
            <p className="lg:hidden font-nats text-[16px] lg:text-[18px] text-[#F7F5ED] leading-[26px] md:leading-loose">
              {props.mobileFinalDirection}
            </p>
          </div>
        </div>
      )}
      {props.image && (
        <section className="w-full flex justify-center items-center bg-white">
          <Image
            src={props.image ?? ""}
            alt="Process"
            width={1200}
            height={738}
            className="hidden lg:block w-full md:h-[738px] lg:h-full object-cover"
          />
          <Image
            src={props.imageMobile || props.image || ""}
            alt="Process"
            width={1200}
            height={738}
            className="lg:hidden w-full h-[401px] md:h-[738px] lg:h-full object-cover"
          />
        </section>
      )}
    </>
  );
};

export default DirectionAndExperience;
