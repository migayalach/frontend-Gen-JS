import React, { useState } from "react";
import { FileAddOutlined } from "@ant-design/icons";
import { FloatButton, Modal } from "antd";
import FormProduct from "@/components/form/formProduct/FormProduct";

function CreateProduct({ flag }) {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const handleOk = () => {
    setModal(false);
  };
  const handleCancel = () => {
    setModal(false);
  };

  return (
    <>
      <FloatButton
        icon={<FileAddOutlined />}
        type="primary"
        style={{
          insetInlineEnd: 24,
        }}
        onClick={() => showModal()}
      />

      {modal && (
        <Modal
          title={
            (flag === "Create-product" && "Create product") ||
            (flag === "Edit-product" && "Edit product")
          }
          open={modal}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          {flag === "Create-product" && <FormProduct flag={flag} />}
          {flag === "Edit-product" && <FormProduct flag={flag} />}
        </Modal>
      )}
    </>
  );
}

export default CreateProduct;
