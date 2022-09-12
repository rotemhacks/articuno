import { Avatar, Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import React from "react";
import { FaHeart, FaHome, FaUserFriends, FaSearch } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ActiveUser } from "../../contexts/contexts";

const Nav = () => {
  const navigate = useNavigate();
  const { user } = React.useContext(ActiveUser);

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
      </Box>
      <Box className="navbutton" onClick={() => navigate("/friends")}>
        <FaUserFriends />
      </Box>
      <Box className="navbutton" onClick={() => navigate("/favorites")}>
        <FaHeart />
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
      </Box>
      <Box className="navbutton" onClick={() => navigate("/subs")}>
        <FaSearch />
      </Box>
      <Box className="navbutton" onClick={() => navigate("/profile")}>
        {user ? (
          <Avatar
            src={user.avatar || ""}
            name={`${user.firstname} ${user.lastname || ""}`}
            bg="brand.Gunmetal"
            size="sm"
          />
        ) : (
          <BsPersonFill />
        )}
      </Box>
    </HStack>
  );
};

export default Nav;
