import "./App.css";
import { Heading, Image, Box } from "@chakra-ui/react";

function App() {
  return (
    <Box className="App">
      <Heading>Hello Articuno</Heading>
      <Image
        src="https://res.cloudinary.com/planetariumfish/image/upload/v1662482896/pokemon-articuno_at8isl.gif"
        alt="Articuno!"
      />
    </Box>
  );
}

export default App;
