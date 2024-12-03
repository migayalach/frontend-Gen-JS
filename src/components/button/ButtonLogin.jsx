import { Button } from "antd";
import React from "react";

function ButtonLogin({ handleLogin }) {
  const handleLoginBut = () => {
    handleLogin("login");
  };

  return (
    <Button type="primary" danger onClick={handleLoginBut}>
      Login
    </Button>
  );
}

export default ButtonLogin;
