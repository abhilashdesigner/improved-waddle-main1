import Contact from "@/components/landing/Contact";
import Logos from "@/components/landing/Logos";
import ProjectPage from "@/components/common/ProjectPage";
import SignupBanner from "@/components/landing/SignupBanner";
import React from "react";

const ServicesPage: React.FC = () => {
  return (
    <main>
      <ProjectPage />
      <Contact />
      <Logos />
      <SignupBanner />
    </main>
  );
};

export default ServicesPage;
