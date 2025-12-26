import Contact from "@/components/landing/Contact";
import Logos from "@/components/landing/Logos";
import ProjectDisplay from "@/components/common/ProjectDisplay";
import SignupBanner from "@/components/landing/SignupBanner";
import React from "react";

const ServicesPage: React.FC = () => {
  return (
    <main>
      <ProjectDisplay />
      <Contact />
      <Logos />
      <SignupBanner />
    </main>
  );
};

export default ServicesPage;
