import { Box, Button, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { SharedTagStyles, StyledHeading } from "../styled-components";

export default function HeroSection() {
  return (
    <Container justifyContent={["center", "space-between"]}>
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
    </Container>
  );
}

const InfoSection = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70%;
`;

const Container = styled(Box)`
  height: 100vh;
  display: flex;
  padding: 5rem;
  align-items: center;
  &::before,
  &::after {
    ${SharedTagStyles}
    left: .5rem;
  }
  &::before {
    top: 5rem;
    content: "<hero-section>";
  }
  &::after {
    bottom: 5rem;
    content: "</hero-section>";
  }
`;
