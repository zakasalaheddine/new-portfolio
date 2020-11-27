import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import SingleEmployement from "./single-employement";
import { EmployementData } from "../data/employement";

export default function EmployementSection() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10}>
      <GridItem colSpan={1}>
        <Heading fontWeight="normal">Employment</Heading>
      </GridItem>
      <GridItem colSpan={2}>
        {EmployementData.map((data, idx) => (
          <SingleEmployement data={data} key={idx} />
        ))}
      </GridItem>
    </Grid>
  );
}
