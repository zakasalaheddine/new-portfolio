import { Box, Container, Image, Text } from "@chakra-ui/react";
import { StyledHeading } from "../styled-components";

export default function HeroSection() {
  return (
    <Container maxW="xl">
      <Box
        height="100vh"
        d="flex"
        p="10px"
        alignItems="center"
        justifyContent={["center", "space-between"]}
      >
        <Box>
          <StyledHeading as="h1" fontSize={["2rem", "4rem"]}>
            Hi, my name is
            <Text as="span" color="primary">
              ZAKA SALAH EDDINE
            </Text>
          </StyledHeading>
          <Text as="p">
            I'm a software engineer based in Meknes Morocco, specializing in
            building (and occasionally designing) exceptional websites,
            applications, and everything in between.
          </Text>
        </Box>
        <Image src="/images/design.svg" height="90vh" width="auto" />
      </Box>
    </Container>
  );
}
