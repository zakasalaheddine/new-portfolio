import styled from "@emotion/styled";
import { Container } from "components/styled-components";
import EmployementSection from "./employement-section";

export default function AboutSection() {
  return (
    <AboutContainer>
      <EmployementSection />
    </AboutContainer>
  );
}

const AboutContainer = styled(Container)``;
