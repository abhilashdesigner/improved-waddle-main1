import ProjectDisplay from "@/components/common/ProjectDisplay";
import TypsyDispaly from "@/components/common/TypsyDispaly";
import NimhansDispaly from "@/components/common/NimhansDispaly";
import FahomeDispaly from "@/components/common/FahomeDispaly";
import Contact from "@/components/landing/Contact";
import Hero from "@/components/landing/Hero";
import Launch from "@/components/landing/Launch";
import Logos from "@/components/landing/Logos";
import MeetCreator from "@/components/landing/MeetCreator";
import Services from "@/components/landing/Services";
import Servicesmobile from "@/components/landing/Servicesmobile";
import SignupBanner from "@/components/landing/SignupBanner";

export default function Home() {
  return (
    <main className="pt-0">
      <Hero />
      <Launch />
      <ProjectDisplay />
	  <TypsyDispaly	/>
	  <NimhansDispaly />
	  <FahomeDispaly />
      <MeetCreator />
      <Services />
	  <Servicesmobile />
      <Contact />
      <Logos />
      <SignupBanner />
    </main>
  );
}