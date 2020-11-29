import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Props } from "components/styled-components";
import { motion } from "framer-motion";
import ProjectInfos from "./project-infos";

export default function ProjectsSections() {
  return (
    <ProjectsContainer m={["1rem auto", "5rem auto", "10rem"]}>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={2}
      >
        <Project colSpan={[1, 1, 2]} rowSpan={[1, 1, 2]}>
          <Image src="/images/quizv.png" />
          <ProjectInfos
            projectTitle="QUIZV"
            projectDescription="Web application, help create a quizzes to challenge friends to see who know you the best"
            projectStack="NextJS, Strapi, Styled-Components, MySQL, Bootstrap"
            githubLink="https://github.com/zakasalaheddine/QuizV"
            appLink="https://quizv.com/"
          />
        </Project>
        <Project colSpan={1}>
          <Image src="/images/player.png" />
          <ProjectInfos
            projectTitle="MUSIC PLAYER"
            projectStack="React JS, Context API, SASS"
            githubLink="https://github.com/zakasalaheddine/music-player"
            appLink="https://zakasalaheddine.github.io/music-player/"
          />
        </Project>
        <Project colSpan={1}>
          <Image src="/images/capture.png" />
          <ProjectInfos
            projectTitle="CAPTURE"
            projectStack="NextJS, React JS, Styled-Components"
            githubLink="https://github.com/zakasalaheddine/capture"
            appLink="https://capture-beige.vercel.app/"
          />
        </Project>
      </Grid>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled(Box)``;

const Project = styled(motion.custom(GridItem))`
  background-color: ${(props: Props) => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  height: fit-content;
  img {
    width: 100%;
    object-fit: cover;
    opacity: 0.2;
  }
`;
