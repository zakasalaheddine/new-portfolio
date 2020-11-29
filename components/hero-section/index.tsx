import { Box, Button, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  Container,
  SharedTagStyles,
  StyledHeading,
} from "../styled-components";

export default function HeroSection() {
  return (
    <HeroContainer
      flexDirection={["column-reverse", "column-reverse", "row"]}
      justifyContent={["center", "center", "space-between"]}
      p={["1rem", "2rem", "5rem"]}
    >
      <InfoSection my={["6rem", "5rem", 0]}>
        <StyledHeading as="h1" fontSize="2rem">
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
        <Box my="1rem">
          <Button
            variant="primary"
            as="a"
            href="mailto:zakasalaheddine@gmail.com"
          >
            Email me
          </Button>
          <Button
            variant="primary"
            ml={[0, "2rem"]}
            as="a"
            href="https://www.upwork.com/freelancers/~015745337bad1f9b6f"
            target="_blank"
          >
            Hire me on UpWork
          </Button>
        </Box>
      </InfoSection>
      <Image
        src="/images/design.svg"
        height="90vh"
        width="auto"
        display={["none", "none", "block"]}
      />
    </HeroContainer>
  );
}

const InfoSection = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
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
