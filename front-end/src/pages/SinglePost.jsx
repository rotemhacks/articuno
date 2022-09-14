import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Spinner,
  Center,
} from "@chakra-ui/react";
import axios from "../utils/axiosClient";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function SinglePost() {
  const [post, setPost] = React.useState();
  const { id } = useParams();

  const { isLoading } = useQuery(
    [id],
    async () => {
      // check routes
      const result = await axios.get(`/images/${id}`);
      return result.data;
    },
    {
      onSuccess: (data) => {
        setPost(data);
      },
    }
  );

  return (
    // the values are hardcoded for now
    <Container maxW={"7xl"}>
      {isLoading && <Spinner />}
      {post && (
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          // py={{ base: 18, md: 24 }}
        >
          <Center>
            <Image
              rounded={"md"}
              alt={post.description}
              src={post.url}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              maxW={"650px"}
              // h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Center>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                {post.description}
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                {post.author}
              </Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontSize={"md"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                  aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                  maxime modi nam officiis porro, quae, quisquam quos
                  reprehenderit velit? Natus, totam.
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("yellow.500", "yellow.300")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  mb={"4"}
                >
                  Comments
                </Text>

                {/* hardcoded values for now */}
                <List spacing={2}>
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      @username: &nbsp;
                    </Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi deserunt laboriosam quod
                  </ListItem>
                </List>

                {/* <List spacing={2}>
                {comments.map((comment) => (
                  <ListItem>
                    <Text as={"span"} fontWeight={"bold"}>
                      {comment.author}
                    </Text>
                    {comment.body}
                  </ListItem>
                ))}
              </List> */}
              </Box>
            </Stack>

            <Button
              rounded={"lg"}
              alignSelf={"center"}
              w={"50%"}
              mt={8}
              size={"xs"}
              py={"4"}
              bg={useColorModeValue("gray.900", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                transform: "translateY(2px)",
                boxShadow: "lg",
              }}
            >
              Add a comment
            </Button>
          </Stack>
        </SimpleGrid>
      )}
    </Container>
  );
}
