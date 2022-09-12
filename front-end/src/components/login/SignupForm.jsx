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
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "../../utils/axiosClient";
import { ActiveUser } from "../../contexts/contexts";

const SignupForm = () => {
  const { setUser } = React.useContext(ActiveUser);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const { mutate } = useMutation(
    (data) => {
      return axios.post("/signup", data);
    },
    {
      onSuccess: (response) => {
        setUser(response.data);
        navigate("/");
      },
    }
  );

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack gap={3} mb={3} width="80vw">
        <FormControl isInvalid={errors.firstname} isRequired>
          <FormLabel htmlFor="firstname">First name</FormLabel>
          <Input
            id="firstname"
            type="text"
            placeholder="What do we call you?"
            {...register("firstname", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
            // This should be through the theme later
            focusBorderColor="brand.BlizzardBlue"
          />
          <FormErrorMessage>
            {errors.firstname && errors.firstname.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email} isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            {...register("email", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
            // This should be through the theme later
            focusBorderColor="brand.BlizzardBlue"
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password} isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Your password"
            {...register("password", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            })}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.repassword} isRequired>
          <FormLabel htmlFor="repassword">Confirm Password</FormLabel>
          <Input
            id="repassword"
            type="password"
            placeholder="Type your password again"
            {...register("repassword", {
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
              validate: (repassword) =>
                repassword === password || "Passwords must match",
            })}
          />
          <FormErrorMessage>
            {errors.repassword && errors.repassword.message}
          </FormErrorMessage>
        </FormControl>
        <HStack width="100%" mt={5}>
          <Spacer />
          <Button isLoading={isSubmitting} type="submit">
            Submit
          </Button>
        </HStack>
      </VStack>
    </form>
  );
};

export default SignupForm;
