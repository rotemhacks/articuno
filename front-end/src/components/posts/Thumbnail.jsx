import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Thumbnail = ({ post }) => {
  return (
    <Box w="4rem">
      <Image src={post.url} />
    </Box>
  );
};

export default Thumbnail;
