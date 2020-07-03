import React from "react";
import { Form, Modal, Input } from "antd";

interface IProps {
  visible: boolean;
  onCancel: () => void;
  onOk: (values: any) => void;
  defaultValues: any;
}

const EditModal: React.FunctionComponent<IProps> = (props) => {
  const { visible, onCancel, onOk, defaultValues } = props;
  const [form] = Form.useForm();
  const { validateFields, resetFields } = form;

  /**
   * 提交
   */
  const handleSubmit = () => {
    validateFields().then((values) => {
      onOk(values);
    });
  };

  /**
   * 取消
   */
  const handleClose = () => {
    resetFields();
    onCancel();
  };

  return (
    <Modal visible={visible} title="编辑" onCancel={handleClose} onOk={handleSubmit}>
      <Form name="basic" initialValues={defaultValues}>
        <Form.Item label="name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="age" name="age">
          <Input />
        </Form.Item>

        <Form.Item label="address" name="address">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
