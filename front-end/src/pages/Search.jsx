import {
  HStack,
  IconButton,
  VStack,
  Heading,
  FormControl,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [posts, setPosts] = React.useState();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const { mutate, isLoading, isSuccess } = useMutation(
    (data) => {
      return axios.post("/search", data);
    },
    {
      onSuccess: (response) => {
        setPosts(response.data);
      },
    }
  );

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <VStack>
      <Heading mb={3}>Search by tag</Heading>
      <form onSubmit={handleSubmit(onSubmit)} mb={5}>
        <HStack gap={3} mb={3} width="80vw">
          <FormControl isInvalid={errors.search} isRequired>
            <Input
              id="search"
              type="text"
              placeholder="Search for a tag like cat, watercolor, purple..."
              {...register("search", {
                required: "This is required",
              })}
              // This should be through the theme later
              focusBorderColor="brand.BlizzardBlue"
            />
            <FormErrorMessage>
              {errors.search && errors.search.message}
            </FormErrorMessage>
          </FormControl>
          <IconButton
            aria-label="search by tag"
            icon={<FaSearch />}
            isLoading={isSubmitting}
            type="submit"
          />
        </HStack>
      </form>
      {isLoading && <Spinner />}
      {isSuccess && posts.length > 0 && <PostList posts={posts} />}
      {posts && posts.length === 0 && (
        <Text as="i">No posts matching your query.</Text>
      )}
    </VStack>
  );
};

export default Search;
