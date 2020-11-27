import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Container, SharedTagStyles } from "components/styled-components";
import EmployementSection from "./employement/employement-section";
import SkillsSection from "./skills-section";

export default function AboutSection() {
  return (
    <AboutContainer>
      <EmployementSection />
      <SkillsSection />
    </AboutContainer>
  );
}

const AboutContainer = styled(Box)`
  padding: 5rem;
  position: relative;
  &::after,
  &::before {
    ${SharedTagStyles}
    left: 3rem;
  }
  &::before {
    top: 2rem;
    content: "<about-section>";
  }
  &::after {
    bottom: 3rem;
    content: "</about-section>";
  }
`;
