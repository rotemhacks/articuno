import { HStack, IconButton, Spacer } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import React from "react";

export default function PostCardButtons({ onLike, isLiked }) {
  return (
    <HStack w="100%">
      <Spacer />
      <IconButton
        aria-label="like post"
        icon={isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
        onClick={onLike}
      />
      <IconButton aria-label="leave a comment" icon={<FaComment />} />
    </HStack>
  );
}
