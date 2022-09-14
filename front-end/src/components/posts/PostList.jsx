import { Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <Wrap display="flex" justify="center">
      {posts &&
        posts.map((post) => (
          <WrapItem key={post._id}>
            <PostCard post={post} />
          </WrapItem>
        ))}
    </Wrap>
  );
};

export default PostList;
