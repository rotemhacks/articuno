import React from "react";
import axios from "../../utils/axiosClient";

const Friends = () => {
  const { user } = React.useContext(ActiveUser);
  const [posts, setPosts] = React.useState();

  const { data, isLoading, isSuccess } = useQuery(
    ["friends"],
    async () => {
      // check routes
      const result = await axios.post("/images/", user.friends);
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
      {isSuccess && posts.length > 0 && <PostList posts={posts} />}
      {posts && posts.length === 0 && (
        <Text as="i">You aren't following anyone.</Text>
      )}
    </VStack>
  );
};

export default Friends;
