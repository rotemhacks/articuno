import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";
import { Box, VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack display="flex" alignItems="center" position="relative" minH="100vh">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Box height="2rem" />
      <Nav />
    </VStack>
  );
}

export default App;
