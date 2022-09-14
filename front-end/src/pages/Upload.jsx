import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Spacer,
  HStack,
  VStack,
  Switch,
  Heading,
  Textarea,
  FormHelperText,
} from "@chakra-ui/react";
import FilePicker from "chakra-ui-file-picker";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axiosClient";

const Upload = () => {
  const [file, setFile] = React.useState();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const { mutate, isLoading } = useMutation(
    (data) => {
      return axios.post("/images", data);
    },
    {
      onSuccess: (response) => {
        const { _id } = response.data;
        navigate(`/post/${_id}`);
      },
    }
  );

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", file);
    for (const key in data) {
      formData.append(key, data[key]);
    }
    mutate(formData);
  };

  return (
    <VStack>
      <Heading mb={3}>Post your art</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={3} mb={3} width="80vw">
          <HStack width="100%">
            <FormControl isInvalid={errors.file} isRequired>
              <FormLabel htmlFor="file">Choose a file</FormLabel>
              <FilePicker
                onFileChange={(fileList) => {
                  setFile(fileList[0]);
                }}
                placeholder="choose a .jpg or .png file"
                clearButtonLabel="label"
                multipleFiles={false}
                accept="image/*"
                hideClearButton={true}
                // {...register("file", {
                //   required: "This is required",
                // })}
                // This should be through the theme later
                focusBorderColor="brand.BlizzardBlue"
              />
              <FormErrorMessage>
                {errors.file && errors.file.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.nsfw} w="10ch">
              <FormLabel htmlFor="nsfw">NSFW?</FormLabel>
              <Switch {...register("nsfw")}></Switch>
            </FormControl>
          </HStack>
          <FormControl isInvalid={errors.tags} isRequired>
            <FormLabel htmlFor="tags">Tags</FormLabel>
            <Input
              id="tags"
              placeholder="Enter tags separated by commas"
              {...register("tags")}
            />
            <FormHelperText>
              Enter tags separated by commas e.g. cats, not a hedgehog,
              illustration
            </FormHelperText>
            <FormErrorMessage>
              {errors.tags && errors.tags.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.description} isRequired>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              id="description"
              placeholder="A little bit about this piece."
              {...register("description", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              // This should be through the theme later
              focusBorderColor="brand.BlizzardBlue"
              resize="none"
            />
            <FormErrorMessage>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>
          <HStack width="100%" mt={5}>
            <Spacer />
            <Button isLoading={isLoading} type="submit">
              Submit
            </Button>
          </HStack>
        </VStack>
      </form>
    </VStack>
  );
};

export default Upload;
