import React from "react";
import useModal from "../../hooks/useModal";
import { Table, Button } from "antd";
import { fetchAllData } from "../../services/dashborad";
import EditForm from "./components/EditForm";
import "./index.scss";

interface IItems {
  name: string;
  age: number;
  address: string;
}

const Dashborad = () => {
  const [visible, hide, show] = useModal();

  const handleEdit = (item: {}) => {
    show();
    setDefaultItems(item);
  };

  const columns = [
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
      render: (text: string, record: IItems) => (
        <div className="actionWrap">
          <span onClick={() => handleEdit(record)}>编辑</span>
          <span>删除</span>
        </div>
      )
    }
  ];

  const [dataSource, changeDataSource] = React.useState<IItems[]>([]);

  const [defaultItems, setDefaultItems] = React.useState<IItems | {}>({});

  React.useEffect(() => {
    fetchData();
  }, []);

  /**
   * 请求列表数据
   */
  const fetchData = async () => {
    const res = await fetchAllData();
    changeDataSource(res);
  };

  const update = () => {
    hide();
  };

  return (
    <>
      <Button type="primary" className="addBtn">
        添加
      </Button>
      <Table dataSource={dataSource} columns={columns} />;
      {visible && (
        <EditForm visible={visible} onOk={update} onCancel={hide} defaultValues={defaultItems} />
      )}
    </>
  );
};

export default Dashborad;
