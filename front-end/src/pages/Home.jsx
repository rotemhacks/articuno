import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <Heading>Hello Articuno</Heading>
      <Image
        src="https://res.cloudinary.com/planetariumfish/image/upload/v1662482896/pokemon-articuno_at8isl.gif"
        alt="Articuno!"
      />
    </Box>
  );
};

export default Home;
