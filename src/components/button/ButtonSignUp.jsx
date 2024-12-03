import React from "react";
import { Button, Flex } from "antd";

function ButtonSignUp({ handleSignUp }) {
  const handleSignUpBut = () => {
    handleSignUp("Sing-up");
  };

  return (
    <Button type="primary" danger onClick={handleSignUpBut}>
      Sign Up
    </Button>
  );
}

export default ButtonSignUp;
