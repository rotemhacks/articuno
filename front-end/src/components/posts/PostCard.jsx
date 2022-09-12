import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import PostCardButtons from "./PostCardButtons";

export default function PostCard({ post }) {
  return (
    <Box>
      <Image src={post.url} alt={post.alt} />
      {/* isLiked - taken from user bookmarks object */}
      {/* onLike - react-query mutate() */}
      <PostCardButtons isLiked={false} onLike={() => {}} />
      <Box>
        <Text>{post.description}</Text>
      </Box>
    </Box>
  );
}
