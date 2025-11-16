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
        <div className="flex w-full bg-[#351A12] font-nats overflow-x-hidden px-[30px] py-[45px] lg:px-[50px] lg:py-[50px] xl:px-[104px] xl:py-[40px] desktop-xl:px-[104px] desktop-xl:py-[50px]">
          <h1>
          Abhilash Kumar
          </h1> 
        </div>
        <Image
          src="/images/meet-creator.png"
          alt="Media"
          width={1200}
          height={738}
          className="w-full h-[570px] md:h-[738px] lg:h-full object-cover"
        />
      </section>
      <Logos />
      <Contact />
    </main>
  );
}
