import React from "react";
import RenderAction from "../components/action";

export const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "操作",
    dataIndex: "action",
    key: "action",
    render: () => <RenderAction />
  }
];
