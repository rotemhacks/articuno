import React from "react";
import { Heading, Image, Spinner, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { ActiveUser } from "../contexts/contexts";
import axios from "../utils/axiosClient";
import PostList from "../components/posts/PostList";

const Home = () => {
  const { user } = React.useContext(ActiveUser);
  const [posts, setPosts] = React.useState();

  const { data, isLoading, isSuccess } = useQuery(
    ["mainfeed"],
    async () => {
      const result = await axios.get("/images/all");
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
      {!user && (
        <VStack>
          <Heading>Articuno</Heading>
          <Image
            src="https://res.cloudinary.com/planetariumfish/image/upload/v1662482896/pokemon-articuno_at8isl.gif"
            alt="Articuno!"
          />
        </VStack>
      )}
      {isLoading && <Spinner />}
      {isSuccess && <PostList posts={posts} />}
    </VStack>
  );
};

export default Home;
