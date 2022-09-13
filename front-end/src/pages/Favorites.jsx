import { useQuery } from "@tanstack/react-query";
import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ActiveUser } from "../contexts/contexts";
import axios from "../utils/axiosClient";

const Favorites = () => {
  const { user } = React.useContext(ActiveUser);
  const [posts, setPosts] = React.useState();

  const { data, isLoading, isSuccess } = useQuery(
    ["favorites"],
    async () => {
      // check routes
      const result = await axios.post("/images/", user.favorites);
      return result.data;
    },
    {
      onSuccess: (data) => {
        setPosts(data);
      },
    }
  );

  return (
    <VStack>
      <Heading>Favorite posts</Heading>
      {isLoading && <Spinner />}
      {isSuccess && <PostList posts={posts} />}
      {posts && posts.length === 0 && (
        <>
          <Text as="i">You haven't saved any posts</Text>
          <Text
            onClick={() => navigate("/search")}
            as="b"
            color="brand.LapisLazuli"
            _hover={{ cursor: "pointer", color: "brand.Aero" }}
          >
            Look for some cool art?
          </Text>
        </>
      )}
    </VStack>
  );
};

export default Favorites;
