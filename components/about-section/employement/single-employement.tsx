import { Box, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Props, SecondaryText, Title } from "components/styled-components";
import { Employement } from "../data/employement";

type SingleEmployementProps = { data: Employement };
export default function SingleEmployement({ data }: SingleEmployementProps) {
  return (
    <EmployementContainer>
      <Title fontSize={["1.5rem", "2.5rem"]}>{data.position}</Title>
      <Box d="flex" justifyContent="space-between" w={["100%", "100%", "50%"]}>
        <SecondaryText>{data.company}</SecondaryText>
        <SecondaryText>{data.timelaps}</SecondaryText>
      </Box>
      <Box>
        <ul>
          {data.tasks.map((task, idx) => (
            <WorkTask key={idx}>{task}</WorkTask>
          ))}
        </ul>
      </Box>
      <SecondaryText>Technologies: {data.tech}</SecondaryText>
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

const WorkTask = styled.li`
  font-size: 1.2rem;
  font-weight: normal;
  padding: 0.5rem 0;
  list-style-position: inside;
  ::marker {
    color: ${(props: Props) => props.theme.colors.secondaryText};
  }
`;
