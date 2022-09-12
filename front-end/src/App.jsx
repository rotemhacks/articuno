import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/nav/Nav";
import { Box, VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack display="flex" alignItems="center">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Box height="2rem" />
      <Box position="fixed" bottom={0} width="lg">
        <Nav />
      </Box>
    </VStack>
  );
}

export default App;
