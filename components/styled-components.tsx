import { Box, Heading } from "@chakra-ui/react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
type Props = {
  theme?: any;
};

export const SharedTagStyles = css`
  position: absolute;
  font-family: "La Belle Aurore", cursive;
  color: #515152;
  font-size: 1rem;
  font-weight: 100;
  font-style: italic;
`;

export const StyledHeading = styled(Heading)`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  line-height: 105px;
  position: relative;
  span {
    display: block;
    text-transform: uppercase;
  }
  &::before,
  &::after {
    ${SharedTagStyles}
  }
  &::before {
    top: -1.2rem;
    content: "<h1>";
  }
  &::after {
    right: -2rem;
    bottom: 0;
    content: "</h1>";
  }
`;

export const Container = styled(Box)`
  display: flex;
  padding: 5rem;
  align-items: center;
`;