import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Props, Title } from "components/styled-components";
import Link from "next/link";
import { GithubIcon } from "styles/icons";
import ProjectInfos from "./project-infos";

export default function ProjectsSections() {
  return (
    <ProjectsContainer>
      <Grid templateColumns="repeat(3, 1fr)" gap={2}>
        <Project colSpan={2} rowSpan={2}>
          <Image src="http://driesvanbroeck.be/wp-content/uploads/2018/04/Scene_07-0-00-02-08-1.jpg" />
          <ProjectInfos
            projectTitle="QUIZV"
            projectDescription="Web application, help create a quizzes to challenge friends to see who know you the best"
            projectStack="NextJS, Strapi, Styled-Components, MySQL, Bootstrap"
            githubLink="/"
            appLink="/"
          />
        </Project>
        <Project colSpan={1}>
          <Image src="http://driesvanbroeck.be/wp-content/uploads/2018/04/Scene_07-0-00-02-08-1.jpg" />
          <ProjectInfos
            projectTitle="QUIZV"
            projectDescription="Web application, help create a quizzes to challenge friends to see who know you the best"
            projectStack="NextJS, Strapi, Styled-Components, MySQL, Bootstrap"
            githubLink="/"
            appLink="/"
          />
        </Project>
        <Project colSpan={1}>
          <Image src="http://driesvanbroeck.be/wp-content/uploads/2018/04/Scene_07-0-00-02-08-1.jpg" />
          <ProjectInfos
            projectTitle="QUIZV"
            projectDescription="Web application, help create a quizzes to challenge friends to see who know you the best"
            projectStack="NextJS, Strapi, Styled-Components, MySQL, Bootstrap"
            githubLink="/"
            appLink="/"
          />
        </Project>
      </Grid>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled(Box)`
  margin: 10rem;
`;

const Project = styled(GridItem)`
  background-color: ${(props: Props) => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    opacity: 0.2;
  }
`;
