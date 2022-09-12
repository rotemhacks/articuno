import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import React from "react";
import { FaHeart, FaHome } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";

const Nav = () => {
  return (
    // class "navbar" for media queries in the CSS. Make it span the whole width on phones, and look nice on desktop
    <HStack className="navbar" height="2rem" w="100%" justify="center">
      <Box className="navbutton">
        <FaHome />
        <Text fontSize="xs">Home</Text>
      </Box>
      <Box className="navbutton">
        <FaHeart />
        <Text fontSize="xs">Favorites</Text>
      </Box>
      <Box>
        <IconButton
          borderRadius="full"
          aria-label="upload an image"
          icon={<GrAdd />}
        />
      </Box>
      <Box className="navbutton">
        <HiHashtag />
        <Text fontSize="xs">Subs</Text>
      </Box>
      <Box className="navbutton">
        <BsPersonFill />
        <Text fontSize="xs">Profile</Text>
      </Box>
    </HStack>
  );
};

export default Nav;
