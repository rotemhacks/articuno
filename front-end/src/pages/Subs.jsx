import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axiosClient";

const Subs = () => {
  const { user } = React.useContext(ActiveUser);
  const [posts, setPosts] = React.useState();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useQuery(
    ["subs"],
    async () => {
      // check routes
      const result = await axios.post("/images/", user.subscriptions);
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
      <Heading>Posts from subscribed tags</Heading>
      {isLoading && <Spinner />}
      {isSuccess && posts.length > 0 && <PostList posts={posts} />}
      {posts && posts.length === 0 && (
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
