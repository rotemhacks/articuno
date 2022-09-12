import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import React from "react";
import { FaHeart, FaHome } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    // classes "navbar" + "navbutton" - set in index.css
    <HStack
      className="navbar"
      height="3rem"
      w="100%"
      justify="center"
      p="0.5rem"
    >
      <Box className="navbutton" onClick={() => navigate("/")}>
        <FaHome />
        <Text fontSize="xs">Home</Text>
      </Box>
      <Box className="navbutton" onClick={() => navigate("/favorites")}>
        <FaHeart />
        <Text fontSize="xs">Favorites</Text>
      </Box>
      <Box>
        <IconButton
          borderRadius="full"
          aria-label="upload an image"
          icon={<GrAdd size="24" />}
          size="lg"
          onClick={() => navigate("/upload")}
        />
      </Box>
      <Box className="navbutton" onClick={() => navigate("/subs")}>
        <HiHashtag />
        <Text fontSize="xs">Subs</Text>
      </Box>
      <Box className="navbutton" onClick={() => navigate("/profile")}>
        <BsPersonFill />
        <Text fontSize="xs">Profile</Text>
      </Box>
    </HStack>
  );
};

export default Nav;
