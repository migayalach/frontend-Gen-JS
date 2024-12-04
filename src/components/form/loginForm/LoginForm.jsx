"use client";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { loginUser } from "@/redux/actions";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
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
    dispatch(loginUser(data));
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

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
