import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getIdUser, auxClear } from "@/redux/actions";
import FormRegister from "@/components/form/formRegister/FormRegister";

function ModalEdit({ idData, flag }) {
  const selectLevel = useSelector(({ root }) => root.level);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
    dispatch(getIdUser(idData));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    dispatch(auxClear());
  };

  return (
    <>
      <Button type="primary" danger onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title="Usuario"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <FormRegister list={selectLevel} flag={flag} />
      </Modal>
    </>
  );
}

export default ModalEdit;
