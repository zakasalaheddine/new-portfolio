import { Box } from "@chakra-ui/react";
import AboutSection from "components/about-section";
import HeroSection from "components/hero-section";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
    </Box>
  );
}
