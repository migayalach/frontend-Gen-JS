import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { postUsers } from "@/redux/actions";
import { useDispatch } from "react-redux";

function FormRegister() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    nameUser: "",
    lastNameUser: "",
    emailUser: "",
    passwordUser: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onFinish = () => {
    dispatch(postUsers(data));
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your nameUser!",
            },
          ]}
        >
          <Input name="nameUser" onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label="Lastname"
          rules={[
            {
              required: true,
              message: "Please input your lastNameUser!",
            },
          ]}
        >
          <Input name="lastNameUser" onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your emailUser!",
            },
          ]}
        >
          <Input name="emailUser" onChange={handleChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your passwordUser!",
            },
          ]}
        >
          <Input.Password name="passwordUser" onChange={handleChange} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormRegister;
