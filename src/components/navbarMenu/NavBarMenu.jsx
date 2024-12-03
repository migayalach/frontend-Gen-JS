"use client";
import React, { useState } from "react";
import {
  ProductOutlined,
  UsergroupDeleteOutlined,
  UnorderedListOutlined,
  LoginOutlined,
  CloseSquareOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Link from "next/link";
import ModalLogin from "../modal/modalLogin/ModalLogin";

const items = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/user">Users</Link>,
    key: "user",
    icon: <UsergroupDeleteOutlined />,
  },
  {
    label: <Link href="/product">Products</Link>,
    key: "products",
    icon: <ProductOutlined />,
  },
  {
    label: "Audit",
    key: "SubMenu",
    icon: <UnorderedListOutlined />,
    children: [
      {
        type: "group",
        label: "Audit",
        children: [
          {
            label: <Link href="/peopleAudit">Activity</Link>,
            key: "peopleAudit",
          },
          {
            label: <Link href="/productAudit">Products</Link>,
            key: "productAudit",
          },
        ],
      },
    ],
  },
  {
    label: "Login",
    key: "login",
    icon: <LoginOutlined />,
  },
  {
    label: "Out",
    key: "out",
    icon: <CloseSquareOutlined />,
  },
];

function NavBarMenu() {
  const [current, setCurrent] = useState("home");
  const [modalShow, setModalShow] = useState(false);

  const onClick = (event) => {
    setCurrent(event.key);
    if (event.key === "login") {
      setModalShow(true);
    }
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      {modalShow && <ModalLogin closeModal={closeModal} />}
    </div>
  );
}

export default NavBarMenu;
