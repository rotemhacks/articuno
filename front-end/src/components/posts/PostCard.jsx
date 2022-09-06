import { Box } from "@chakra-ui/react";
import React from "react";
import PostCardButtons from "./PostCardButtons";

export default function PostCard() {
  return (
    <Box>
      <Image />
      <PostCardButtons isLiked={false} onLike={() => {}} />
      <Box></Box>
    </Box>
  );
}
