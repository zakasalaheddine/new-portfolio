import { Box, Button, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  Container,
  SharedTagStyles,
  StyledHeading,
} from "../styled-components";

export default function HeroSection() {
  return (
    <HeroContainer justifyContent={["center", "space-between"]}>
      <InfoSection>
        <StyledHeading as="h1" fontSize={["2rem", "4rem"]}>
          Hi, my name is
          <Text as="span" color="primary">
            ZAKA SALAH EDDINE
          </Text>
        </StyledHeading>
        <Text as="p" fontWeight="100">
          I'm a Full-stack web developer based in Meknes Morocco, specializing
          in building (and occasionally designing) exceptional websites,
          applications, and everything in between.
        </Text>
        <Box>
          <Button variant="primary">Email me</Button>
          <Button variant="primary" ml="2rem">
            Hire me on UpWork
          </Button>
        </Box>
      </InfoSection>
      <Image src="/images/design.svg" height="90vh" width="auto" />
    </HeroContainer>
  );
}

const InfoSection = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70%;
  position: relative;
  &::after,
  &::before {
    ${SharedTagStyles}
    left: -2rem;
  }
  &::before {
    top: -3.5rem;
    content: "<hero-section>";
  }
  &::after {
    bottom: -3.5rem;
    content: "</hero-section>";
  }
`;

const HeroContainer = styled(Container)`
  height: 100vh;
`;
