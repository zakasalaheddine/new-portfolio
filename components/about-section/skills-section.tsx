import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Props, SecondaryText, Title } from "components/styled-components";
import { Skills } from "./data/skills";

export default function SkillsSection() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10}>
      <GridItem colSpan={1}>
        <Heading fontWeight="normal">Skills</Heading>
      </GridItem>
      <GridItem colSpan={2}>
        <SkillsContainer>
          {Object.keys(Skills).map((skillName) => (
            <>
              <Title textTransform="capitalize">{skillName}</Title>
              <SecondaryText>{Skills[skillName]}</SecondaryText>
            </>
          ))}
        </SkillsContainer>
      </GridItem>
    </Grid>
  );
}

const SkillsContainer = styled(Box)`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -2.5rem;
    top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${(props: Props) => props.theme.colors.primary};
  }
  &::after {
    content: "";
    position: absolute;
    left: -1.75rem;
    top: 25px;
    bottom: 0;
    border-left: 1px dashed ${(props: Props) => props.theme.colors.primary};
  }
`;