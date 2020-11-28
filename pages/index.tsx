import { Box } from "@chakra-ui/react";
import AboutSection from "components/about-section";
import ContactSection from "components/contact-section";
import HeroSection from "components/hero-section";
import ProjectsSections from "components/projects-section";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <ProjectsSections />
      <AboutSection />
      <ContactSection />
    </Box>
  );
}
