import { Box, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Props } from "components/styled-components";
import { Employement } from "../data/employement";

type SingleEmployementProps = { data: Employement };
export default function SingleEmployement({ data }: SingleEmployementProps) {
  return (
    <EmployementContainer>
      <Position>{data.position}</Position>
      <Box d="flex" justifyContent="space-between" w="50%">
        <SecondaryInformation>{data.company}</SecondaryInformation>
        <SecondaryInformation>{data.timelaps}</SecondaryInformation>
      </Box>
      <Box>
        <ul>
          {data.tasks.map((task, idx) => (
            <WorkTask key={idx}>{task}</WorkTask>
          ))}
        </ul>
      </Box>
      <SecondaryInformation>Technologies: {data.tech}</SecondaryInformation>
    </EmployementContainer>
  );
}

const EmployementContainer = styled(Box)`
  position: relative;
  margin-bottom: 2rem;
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

const Position = styled(Heading)``;

const SecondaryInformation = styled(Text)`
  font-weight: normal;
  color: ${(props: Props) => props.theme.colors.primary};
  padding: 1rem 0;
`;

const WorkTask = styled.li`
  font-size: 1.2rem;
  font-weight: normal;
  padding: 0.5rem 0;
  list-style-position: inside;
  ::marker {
    color: ${(props: Props) => props.theme.colors.secondaryText};
  }
`;
