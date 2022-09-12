import { Wrap } from "@chakra-ui/react";
import React from "react";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <Wrap>
      {posts &&
        posts.map((post) => (
          <WrapItem key={post.id}>
            <PostCard post={post} />
          </WrapItem>
        ))}
    </Wrap>
  );
};

export default PostList;
