import React from "react";
import { Table } from "antd";
import ModalEdit from "@/components/modal/modalEdit/ModalEdit";

function TableUser({ list, access }) {
  const columns = [
    {
      title: "N°",
      dataIndex: "numberItem",
      key: "numberItem",
    },
    {
      title: "Name",
      dataIndex: "nameUser",
      key: "nameUser",
    },
    {
      title: "LastName",
      dataIndex: "lastNameUser",
      key: "lastNameUser",
    },
    {
      title: "Email",
      dataIndex: "emailUser",
      key: "emailUser",
    },
    ...(access === "Administrador"
      ? [
          {
            title: "Edit",
            key: "update",
            render: ({ idUser }) => (
              <ModalEdit idData={idUser} flag="Edit-user" />
            ),
          },
        ]
      : []),
  ];

  const dataMap = (data) => {
    return data?.map(
      ({ idUser, nameUser, lastNameUser, emailUser }, index) => ({
        key: index,
        numberItem: index + 1,
        idUser,
        nameUser,
        lastNameUser,
        emailUser,
      })
    );
  };

  return (
    <div>
      <Table columns={columns} dataSource={dataMap(list)} pagination={false} />
    </div>
  );
}

export default TableUser;
