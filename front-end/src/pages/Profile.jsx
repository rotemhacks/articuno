import {
  Avatar,
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ActiveUser } from "../contexts/contexts";
import axios from "../utils/axiosClient";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = React.useContext(ActiveUser);

  const handleLogout = async () => {
    const response = await axios.post("/logout", user.firstname);
    setUser(null);
  };

  return (
    <VStack justify="center">
      <Heading mb={3}>Profile</Heading>
      {user && (
        <>
          <SimpleGrid
            columns={[1, null, 2]}
            spacing={["2rem", null, "1rem"]}
            // width={["90%", null, "60%"]}
          >
            <Avatar
              src={user.picture}
              name={`${user.firstname} ${user.lastname || ""}`}
              bg="brand.Aero"
              size="2xl"
            />
            <VStack>
              <Text>{`${user.firstname} ${user.lastname || ""}`}</Text>
              <Text>{user.email}</Text>
              {/* Name, email, bio, showing NSFW, subscribed tags, blacklisted tags */}
            </VStack>
          </SimpleGrid>
          <Box color="white" borderRadius={7} py={2} px={3} bg={"brand.LapisLazuli"} >
            <Link to="/profile/edit/:id" bg="brand.LapisLazuli">
              Edit Profile
            </Link>
          </Box>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      )}
    </VStack>
  );
};

export default Profile;
