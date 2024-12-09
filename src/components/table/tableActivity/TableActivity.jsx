import React from "react";
import { Table, Tag } from "antd";

function TableActivity({ list }) {
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
      title: "Type activity",
      dataIndex: "nameEntryExit",
      key: "nameEntryExit",
      render: (nameEntryExit) => {
        let color = nameEntryExit === "entrada" ? "success" : "error";
        let text = nameEntryExit === "entrada" ? "Login" : "Out";
        return (
          <Tag color={color}>
            <p>{text}</p>
          </Tag>
        );
      },
    },
    {
      title: "Time",
      dataIndex: "timeEntryExit",
      key: "timeEntryExit",
    },
  ];

  const dataMap = (data) => {
    return data?.map(({ nameUser, nameEntryExit, timeEntryExit }, index) => ({
      key: index,
      numberItem: index + 1,
      nameUser,
      nameEntryExit,
      timeEntryExit,
    }));
  };

  return (
    <div>
      <Table columns={columns} dataSource={dataMap(list)} pagination={false} />
    </div>
  );
}

export default TableActivity;
