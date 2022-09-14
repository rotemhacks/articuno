import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";
import { Box, VStack } from "@chakra-ui/react";
import UserRoute from "./components/routes/UserRoute";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Friends from "./pages/Friends";
import Subs from "./pages/Subs";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import SinglePost from "./pages/SinglePost";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <VStack
      display="flex"
      alignItems="center"
      position="relative"
      minH="100vh"
      width="100vw"
      pt={5}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route element={<UserRoute />}>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/subs" element={<Subs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile/edit" element={<EditProfile />} />
        </Route>
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
      <Box height="4rem" />
      <Nav />
    </VStack>
  );
}

export default App;
