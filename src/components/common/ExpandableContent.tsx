"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { useState } from "react";

export interface ExpandableContentProps {
  title: string;
  content: string | null;
  maxLength?: number | null;
  mobileMaxLength?: number | null;
  onExpandChange?: (isExpanded: boolean) => void;
}

export default function ExpandableContent({
  title,
  content,
  maxLength = 326,
  mobileMaxLength,
  onExpandChange,
}: ExpandableContentProps) {
  if (!content || !maxLength) {
    return null;
  }

  const isMobile = useIsMobile(360);
  const currentMaxLength = isMobile ? mobileMaxLength : maxLength;

  const [isExpanded, setIsExpanded] = useState(false);

  const showReadMore = content.length > (currentMaxLength ?? 326);

  const shortContent = showReadMore
    ? `${content.substring(0, currentMaxLength ?? 326)}...`
    : content;

  const displayedContent = isExpanded ? content : shortContent;

  const handleToggleExpand = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (onExpandChange) {
      onExpandChange(newState);
    }
  };

  return (
    <div className="mt-5 xl:mt-[30px] mt-[30px]">
      <h2 className="mb-15 font-nats font-normal text-[15px] lg:text-[20px] leading-[15px] lg:leading-normal text-[#351A12] uppercase">
        {title}
      </h2>
      <p className="font-nats text-[16px] lg:text-[18px] leading-[25px] text-[#351A12] mx-auto lg:mx-0">
        {displayedContent}
      </p>
      {showReadMore && (
        <p className="font-nats text-[16px] lg:text-[18px] leading-loose text-[#351A12] mx-auto lg:mx-0 mt-0">
          <button
            onClick={handleToggleExpand}
            className="abhilash text-[#D2ADCE] hover:text-[#B89BB8] transition-colors cursor-pointer underline"
          >
            {isExpanded ? "read less" : "read more"}
          </button>
        </p>
      )}
    </div>
  );
}
