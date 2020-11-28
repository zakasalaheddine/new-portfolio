import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Props, Title } from "components/styled-components";
import Link from "next/link";
import { ExternalLink, GithubIcon } from "styles/icons";

export default function ProjectInfos({
  projectTitle,
  projectDescription = null,
  projectStack,
  githubLink,
  appLink,
}) {
  return (
    <ProjectInfo>
      <Title>{projectTitle}</Title>
      {projectDescription && (
        <Text className="description">{projectDescription}</Text>
      )}
      <Text>{projectStack}</Text>
      <ProjectLinks>
        <a href={githubLink} target="_blank">
          <GithubIcon />
        </a>
        <a href={appLink} target="_blank">
          <ExternalLink />
        </a>
      </ProjectLinks>
    </ProjectInfo>
  );
}
const ProjectInfo = styled(Box)`
  position: absolute;
  top: 0;
  color: ${(props: Props) => props.theme.colors.bg};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 2rem;
  .description {
    font-weight: bold;
  }
`;

const ProjectLinks = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
