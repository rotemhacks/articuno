import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";
import { Box, VStack } from "@chakra-ui/react";
import UserRoute from "./components/routes/UserRoute";
import Login from "./pages/Login";

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
        <Route path="/search" />
        <Route element={<UserRoute />}>
          <Route path="/favorites" />
          <Route path="/friends" />
          <Route path="/subs" />
          <Route path="/profile" />
          <Route path="/upload" />
        </Route>
      </Routes>
      <Box height="2rem" />
      <Nav />
    </VStack>
  );
}

export default App;
