import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import axios from "../utils/axiosClient";
import { ActiveUser } from "../contexts/contexts";

const Subs = () => {
  const { user } = React.useContext(ActiveUser);
  const [posts, setPosts] = React.useState();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useQuery(
    ["subs"],
    async () => {
      // check routes
      const result = await axios.get("/images/subs");
      return result.data;
    },
    {
      onSuccess: (data) => {
        setPosts(data);
      },
      enabled: user.subscriptions.length > 0,
    }
  );

  return (
    <VStack>
      <Heading>Subscribed tags</Heading>
      {user && user.subscriptions > 0 && isLoading && <Spinner />}
      {isSuccess && posts.length > 0 && <PostList posts={posts} />}
      {user && user.subscriptions.length === 0 && (
        <>
          <Text as="i">You aren't subscribed to any tags.</Text>
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

export default Subs;
