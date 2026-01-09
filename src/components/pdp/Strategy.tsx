"use client";

import ExpandableContent, {
  ExpandableContentProps,
} from "@/components/common/ExpandableContent";
import Image from "next/image";

interface StrategyProps {
  pageTitle: string | null;
  image: string | null;
  imageMobile?: string;
  imageClass: string;
  paddingMobileUpper: string;
  paddingMobileLower: string;
  paddingXl: string;
  contentSections: ExpandableContentProps[];
  onExpandChange: (isExpanded: boolean) => void;
}

export default function Strategy(props: StrategyProps) {
  const sectionsToRender = props.contentSections.filter(
    (section) => section.content
  );

  const midpoint = Math.ceil(sectionsToRender.length / 2);
  const mobileContentTop = sectionsToRender.slice(0, midpoint);
  const mobileContentBottom = sectionsToRender.slice(midpoint);

  return (
    <div className="flex flex-col lg:flex-row w-full font-nats overflow-x-hidden">
      <div
        className={`lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center px-[30px] pb-[48px] pt-[48px]`}
      >
        <div className="w-full text-left">
          {props.pageTitle && (
            <h1 className="m-0 font-monthis font-normal text-[32px] leading-tight">
              {props.pageTitle}
            </h1>
          )}
          <div className={`flex flex-col`}>
            {mobileContentTop.map((section, index) => (
              <ExpandableContent
                key={index}
                title={section.title}
                content={section.content ?? ""}
                maxLength={section.maxLength}
                mobileMaxLength={section.mobileMaxLength}
                onExpandChange={props.onExpandChange}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`hidden lg:w-[50%] w-full bg-[#F0E5D4] lg:flex items-center justify-center`}
      >
        <div className={`w-full text-left px-9 md:px-[102px] py-[48px] md:mb-[45px] md:mt-[37px] `}>
          {props.pageTitle && (
            <h1 className="mb-0 mt-0 font-monthis font-normal text-[54px] leading-[1.23] [word-spacing:1.5px]">
              {props.pageTitle}
            </h1>
          )}
          <div className={`flex flex-col`}>
            {sectionsToRender.map((section, index) => (
              <ExpandableContent
                key={index}
                title={section.title}
                content={section.content ?? ""}
                maxLength={section.maxLength}
                mobileMaxLength={section.mobileMaxLength}
                onExpandChange={props.onExpandChange}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" flex lg:w-[54%] w-full h-auto px-[30px] lg:p-0">
        <Image
          src={props.image || ""}
          alt={props.pageTitle || ""}
          width={800}
          height={600}
          className={` w-full lg:w-[740px] hidden lg:block`}
        />
        <Image
          src={props.imageMobile || props.image || ""}
          alt={props.pageTitle || ""}
          width={800}
          height={600}
          className={`${props.imageClass} lg:hidden`}
        />
      </div>
      {mobileContentBottom.length > 0 && (
        <div
          className={`lg:hidden w-full bg-[#F0E5D4] flex items-center justify-center px-[30px] pb-[48px] pt-[48px]`}
        >
          <div className="w-full text-left mobilenimhansstrategy">
            <div className={`flex flex-col`}>
              {mobileContentBottom.map((section, index) => (
                <ExpandableContent
                  key={index}
                  title={section.title}
                  content={section.content ?? ""}
                  maxLength={section.maxLength}
                  mobileMaxLength={section.mobileMaxLength}
                  onExpandChange={props.onExpandChange}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
