import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import LoginForm from "../components/login/LoginForm";
import SignupForm from "../components/login/SignupForm";

const Login = () => {
  const [hasAccount, setHasAccount] = React.useState(true);
  return (
    <VStack>
      <Heading>{hasAccount ? "Login" : "Sign Up"}</Heading>
      {hasAccount ? <LoginForm /> : <SignupForm />}
      <Text
        _hover={{ cursor: "pointer", color: "brand.Aero" }}
        onClick={() => setHasAccount(!hasAccount)}
        as="b"
        color="brand.LapisLazuli"
      >
        {hasAccount ? "No account? Sign up!" : "Have an account? Login!"}
      </Text>
    </VStack>
  );
};

export default Login;
