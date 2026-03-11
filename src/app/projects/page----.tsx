import Contact from "@/components/landing/Contact";
import Logos from "@/components/landing/Logos";
import ProjectPage from "@/components/common/ProjectPage";
import TypsyProject from "@/components/common/TypsyProject";
import NimhansProject from "@/components/common/NimhansProject";
import FahomeProject from "@/components/common/FahomeProject";
import SignupBanner from "@/components/landing/SignupBanner";
import React from "react";

const ServicesPage: React.FC = () => {
  return (
    <main>
      <ProjectPage />
	  <TypsyProject />
	  <NimhansProject />
	  <FahomeProject />
      <Contact />
      <Logos />
      <SignupBanner />
    </main>
  );
};

export default ServicesPage;
