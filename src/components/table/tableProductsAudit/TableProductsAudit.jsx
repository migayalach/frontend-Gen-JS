import React from "react";
import { Table, Tag } from "antd";

function TableProductsAudit({ list }) {
  const columns = [
    {
      title: "N°",
      dataIndex: "numberItem",
      key: "numberItem",
    },
    {
      title: "Name product",
      dataIndex: "nameProduct",
      key: "nameProduct",
    },
    {
      title: "Code product",
      dataIndex: "codeProduct",
      key: "codeProduct",
    },
    {
      title: "Type activity",
      dataIndex: "nameAction",
      key: "nameAction",
      render: (nameAction) => {
        let color = "";
        let text = "";
        switch (nameAction) {
          case "create":
            color = "green";
            text = "Create";
            break;
          case "update":
            color = "yellow";
            text = "Edit";
            break;
          case "delete":
            color = "orange";
            text = "Delete";
            break;
        }

        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Old data",
      dataIndex: "oldData",
      key: "oldData",
    },
    {
      title: "New data",
      dataIndex: "newData",
      key: "newData",
    },
  ];

  const dataMap = (data) => {
    return data?.map(
      (
        {
          nameProduct,
          codeProduct,
          nameUser,
          nameAction,
          timeAction,
          oldData,
          newData,
        },
        index
      ) => ({
        key: index,
        numberItem: index + 1,
        nameProduct,
        codeProduct,
        nameUser,
        nameAction,
        timeAction,
        oldData: ":D",
        newData: "!D",
      })
    );
  };

  return (
    <div>
      <Table columns={columns} dataSource={dataMap(list)} pagination={true} />
    </div>
  );
}

export default TableProductsAudit;
