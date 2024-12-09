import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { postUsers, putUsers } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SelectLevel from "@/components/selector/SelectLevel";
import { clearDataRegister } from "@/helpers/userHelper";

function FormRegister({ list, flag }) {
  const dispatch = useDispatch();
  const selectAux = useSelector(({ root }) => root.aux);
  const [data, setData] = useState({
    idLevel: "",
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

  const handleLevel = (idLevel) => {
    setData({
      ...data,
      idLevel,
    });
  };

  const handleEdit = () => {
    dispatch(putUsers({ ...data, idUser: selectAux?.idUser }));
  };

  const onFinish = () => {
    const newInfo = clearDataRegister(data);
    // dispatch(postUsers(newInfo));
  };

  useEffect(() => {
    setData({
      idLevel: selectAux?.idLevel,
      nameUser: selectAux?.nameUser,
      lastNameUser: selectAux?.lastNameUser,
      emailUser: selectAux?.emailUser,
    });
  }, [selectAux]);

  // console.log(data);

  return (
    <div>
      <Form
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
          <Input
            name="nameUser"
            value={data?.nameUser}
            onChange={handleChange}
          />
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
          <Input
            name="lastNameUser"
            value={data?.lastNameUser}
            onChange={handleChange}
          />
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
          <Input
            name="emailUser"
            value={data?.emailUser}
            onChange={handleChange}
          />
        </Form.Item>

        {flag === "Edit-user" && (
          <Form.Item label="Level">
            <SelectLevel
              list={list}
              handleLevel={handleLevel}
              levelCurrently={selectAux?.nameLevel}
            />
          </Form.Item>
        )}

        {flag !== "Edit-user" && (
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
        )}
      </Form>
      {flag === "Edit-user" ? (
        <Button type="primary" htmlType="submit" onClick={handleEdit}>
          Edit
        </Button>
      ) : (
        <Button type="primary" htmlType="submit" onClick={onFinish}>
          Sign Up
        </Button>
      )}
    </div>
  );
}

export default FormRegister;
