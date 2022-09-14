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
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { setUser } = React.useContext(ActiveUser);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const { mutate } = useMutation(
    (data) => {
<<<<<<< HEAD
      console.log(import.meta.env.VITE_BASE_URL);
      return axios.post("/login", data, {
        withCredentials: true,
      });
=======
      return axios.post("/login", data);
>>>>>>> 0a69bfc9fea1463c6bc55132bc0b178b9d291718
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

export default LoginForm;
