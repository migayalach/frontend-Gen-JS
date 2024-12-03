import React, { useState } from "react";
import { Modal } from "antd";
import LoginForm from "../../form/loginForm/LoginForm";
import ButtonSignUp from "@/components/button/ButtonSignUp";
import ButtonLogin from "@/components/button/ButtonLogin";
import FormRegister from "@/components/form/formRegister/FormRegister";

function ModalLogin({ closeModal }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [state, setState] = useState("login");

  const handleOk = () => {
    setIsModalOpen(false);
    closeModal();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    closeModal();
  };

  const handleState = (value) => {
    setState(value);
  };

  return (
    <div>
      {state === "login" ? (
        <Modal
          title="Login"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={<ButtonSignUp handleSignUp={handleState} />}
        >
          <LoginForm />
        </Modal>
      ) : (
        <Modal
          title="New user"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={<ButtonLogin handleLogin={handleState} />}
        >
          <FormRegister />
        </Modal>
      )}
    </div>
  );
}

export default ModalLogin;
