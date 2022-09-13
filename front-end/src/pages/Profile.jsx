import { Avatar, Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { ActiveUser } from "../contexts/contexts";
import axios from "../utils/axiosClient";

const Profile = () => {
  const { user } = React.useContext(ActiveUser);

  return (
    <Box>
      <Heading>Profile</Heading>
      <SimpleGrid
        columns={[1, null, 2]}
        spacing={["2rem", null, "1rem"]}
        width={["90%", null, "60%"]}
      >
        <Avatar
          src={user.picture}
          name={`${user.firstname} ${user.lastname}`}
        />
        <VStack>
          {/* Name, email, bio, showing NSFW, subscribed tags, blacklisted tags */}
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Profile;
