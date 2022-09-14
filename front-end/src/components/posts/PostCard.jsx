import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import PostCardButtons from "./PostCardButtons";

export default function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <Box maxW="560px" borderWidth="1px" borderRadius="1rem" overflow="hidden">
      <Image
        src={post.url}
        alt={post.alt}
        onClick={() => navigate(`/post/${post._id}`)}
      />
      {/* isLiked - taken from user bookmarks object */}
      {/* onLike - react-query mutate() */}
      <Box p={3}>
        <PostCardButtons isLiked={false} onLike={() => {}} />
        <Heading my={3}>{post.description}</Heading>
      </Box>
    </Box>
  );
}
