import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ActiveUser } from "../contexts/contexts";
import axios from "../utils/axiosClient";
import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import PostList from "../components/posts/PostList";

const Friends = () => {
  const { user } = React.useContext(ActiveUser);
  const [posts, setPosts] = React.useState();

  const { data, isLoading, isSuccess } = useQuery(
    ["friends"],
    async () => {
      // check routes
      const result = await axios.get("/images/friends");
      return result.data;
    },
    {
      onSuccess: (data) => {
        setPosts(data);
      },
      enabled: user.friends.length > 0,
    }
  );

  return (
    <VStack>
      <Heading>Friends feed</Heading>
      {user && user.friends > 0 && isLoading && <Spinner />}
      {isSuccess && posts.length > 0 && <PostList posts={posts} />}
      {user && user.friends.length === 0 && (
        <Text as="i">You aren't following anyone.</Text>
      )}
    </VStack>
  );
};

export default Friends;
