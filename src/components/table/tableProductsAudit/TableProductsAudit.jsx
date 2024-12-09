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
      title: "Name user",
      dataIndex: "nameUser",
      key: "nameUser",
    },
    {
      title: "Date",
      dataIndex: "timeAction",
      key: "timeAction",
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
          default:
            color = "gray";
            text = "Unknown";
        }

        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Old data",
      dataIndex: "oldData",
      key: "oldData",
      render: (oldData) => {
        return oldData ? JSON.stringify(oldData, null, 2) : "-";
      },
    },
    {
      title: "New data",
      dataIndex: "newData",
      key: "newData",
      render: (newData) => {
        return newData ? JSON.stringify(newData, null, 2) : "-";
      },
    },
  ];

  const dataMap = (data) => {
    return data?.map(
      ({ nameUser, nameAction, timeAction, oldData, newData }, index) => ({
        key: index,
        numberItem: index + 1,
        nameUser,
        nameAction,
        timeAction,
        oldData,
        newData,
      })
    );
  };

  return (
    <div>
      <Table columns={columns} dataSource={dataMap(list)} pagination={false} />
    </div>
  );
}

export default TableProductsAudit;
