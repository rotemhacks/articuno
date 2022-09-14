import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function EditProfile() {
  return (
    <Flex align="center" justify="center" id="editProfile">
      <Box>
        <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
          <Heading>Edit Profile</Heading>

          <Stack
            spacing={{ base: 4, md: 8, lg: 20 }}
            direction={{ base: "column", md: "row" }}
          >
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  //   value={user.firstname}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  //   value={user.lastname}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  //   value={user.email}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Bio</FormLabel>

                <Textarea
                  name="bio"
                  placeholder="Write a short bio about yourself"
                  rows={5}
                  resize="none"
                  maxLength={140}
                  //   value={user.bio}
                />
              </FormControl>

              <Button
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
                isFullWidth
              >
                Update Profile
              </Button>
            </VStack>
          </Stack>
        </VStack>
      </Box>
    </Flex>
  );
}
