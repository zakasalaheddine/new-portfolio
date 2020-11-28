import { Box, Button, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import {
  SecondaryText,
  SharedTagStyles,
  Title,
} from "components/styled-components";

export default function ContactSection() {
  return (
    <ContactContainer py="5rem" px={["1rem", "2rem", "5rem"]}>
      <Box textAlign="center">
        <SecondaryText fontWeight="100" fontSize="0.9rem">
          I’m looking for new opportinities
        </SecondaryText>
        <Title>GET IN TOUCH!</Title>
        <Text
          color="text"
          fontSize={["1.5rem", "2rem", "3rem"]}
          fontWeight="100"
        >
          You got a cool project on mind? Let’s collaborate and create powerful
          ‍brand & website for you.
        </Text>
        <Text
          color="text"
          fontSize={["0.9rem", "1rem", "1.5rem"]}
          fontWeight="100"
          width={["100%", "100%", "70%"]}
          mx="auto"
        >
          If you are looking for a freelancer then you are in the right place,
          as I’m currently freelancing full time, or if you are looking for a
          full-time employee, otherwise, if you just want to say hi, I will
          definitely say Hi back to you.
        </Text>
        <Box
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button variant="primary" my="1rem">
            Email me
          </Button>
          <Button variant="primary" my="1rem">
            Hire me on UpWork
          </Button>
        </Box>
      </Box>
    </ContactContainer>
  );
}

const ContactContainer = styled(Box)`
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
