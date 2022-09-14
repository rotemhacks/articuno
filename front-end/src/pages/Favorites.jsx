import { useQuery } from "@tanstack/react-query";
import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ActiveUser } from "../contexts/contexts";
import axios from "../utils/axiosClient";
import PostList from "../components/posts/PostList";

const Favorites = () => {
  const { user } = React.useContext(ActiveUser);
  const [posts, setPosts] = React.useState();

  const { data, isLoading, isSuccess } = useQuery(
    ["favorites"],
    async () => {
      // check routes
      const result = await axios.get("/images/favs");
      return result.data;
    },
    {
      onSuccess: (data) => {
        setPosts(data);
      },
      enabled: user.favorites.length > 0,
    }
  );

  return (
    <VStack>
      <Heading>Favorite posts</Heading>
      {user && user.favorites > 0 && isLoading && <Spinner />}
      {isSuccess && <PostList posts={posts} />}
      {user && user.favorites.length === 0 && (
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
