import React from "react";
import { Table } from "antd";

function TableUser({ list }) {
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
  ];

  const dataMap = (data) => {
    return data?.map(({ nameUser, lastNameUser, emailUser }, index) => ({
      key: index,
      numberItem: index + 1,
      nameUser,
      lastNameUser,
      emailUser,
    }));
  };

  return (
    <div>
      <Table columns={columns} dataSource={dataMap(list)} pagination={true} />
    </div>
  );
}

export default TableUser;
