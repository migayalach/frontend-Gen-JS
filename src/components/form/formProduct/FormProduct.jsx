import React, { useEffect, useState } from "react";
import { Button, Form, Input, DatePicker, Switch } from "antd";
import { addProduct, updateProduct, auditProductAction } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ImageCloudinary from "./ImageCloudinary";
import dayjs from "dayjs";

function FormProduct({ flag, user }) {
  const dispatch = useDispatch();
  const selectAux = useSelector(({ root }) => root.aux);
  const [data, setData] = useState({
    nameProduct: "",
    codeProduct: "",
    priceProduct: "",
    urlProduct: "",
    stockProduct: "",
    madeProduct: "",
    sizeProduct: "",
    dateIntroProduct: "",
    stateProduct: true,
  });
  const [passData, setPassData] = useState({});

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeDate = (date, dateString) => {
    setData({
      ...data,
      dateIntroProduct: dateString,
    });
  };

  const onChangeState = (checked) => {
    setData({
      ...data,
      stateProduct: checked,
    });
  };

  const handleURLChange = (URL) => {
    setData({
      ...data,
      urlProduct: URL,
    });
  };

  const onFinish = () => {
    if (flag === "Create-product") {
      dispatch(addProduct(data));
      dispatch(
        auditProductAction({
          idUser: user,
          idAction: 1,
          oldData: {},
          newData: data,
        })
      );
    } else if (flag === "Edit-product") {
      dispatch(updateProduct({ ...data, idProduct: selectAux?.idProduct }));
      dispatch(
        auditProductAction({
          idUser: user,
          idAction: 2,
          oldData: passData,
          newData: data,
        })
      );
    }
  };

  useEffect(() => {
    if (flag === "Edit-product") {
      setData({
        nameProduct: selectAux?.nameProduct,
        codeProduct: selectAux?.codeProduct,
        priceProduct: selectAux?.priceProduct,
        urlProduct: selectAux?.urlProduct,
        stockProduct: selectAux?.stockProduct,
        madeProduct: selectAux?.madeProduct,
        sizeProduct: selectAux?.sizeProduct,
        dateIntroProduct: selectAux?.dateIntroProduct?.substring(0, 10),
        stateProduct: selectAux?.stateProduct,
      });
      setPassData({
        nameProduct: selectAux?.nameProduct,
        codeProduct: selectAux?.codeProduct,
        priceProduct: selectAux?.priceProduct,
        urlProduct: selectAux?.urlProduct,
        stockProduct: selectAux?.stockProduct,
        madeProduct: selectAux?.madeProduct,
        sizeProduct: selectAux?.sizeProduct,
        dateIntroProduct: selectAux?.dateIntroProduct?.substring(0, 10),
        stateProduct: selectAux?.stateProduct,
      });
    }
  }, [flag]);

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 10,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Name product">
          <Input
            name="nameProduct"
            value={data.nameProduct}
            placeholder="Please input your name"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Code Product">
          <Input
            name="codeProduct"
            value={data.codeProduct}
            placeholder="Please input your code Product"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Price Product">
          <Input
            name="priceProduct"
            value={data.priceProduct}
            placeholder="Please input your price Product!"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Stock product">
          <Input
            type="number"
            name="stockProduct"
            value={data.stockProduct}
            placeholder="Please input your stock Product!"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Made product">
          <Input
            name="madeProduct"
            value={data.madeProduct}
            placeholder="Please input your made Product!"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item label="Size product">
          <Input
            name="sizeProduct"
            value={data.sizeProduct}
            placeholder="Please input your size Product!"
            onChange={handleChange}
          />
        </Form.Item>

        {flag === "Create-product" && (
          <Form.Item label="Date intro product">
            <DatePicker name="dateIntroProduct" onChange={onChangeDate} />
          </Form.Item>
        )}

        {flag === "Edit-product" && (
          <Form.Item label="Date intro product">
            <DatePicker
              name="dateIntroProduct"
              value={dayjs(data.dateIntroProduct)}
              onChange={onChangeDate}
            />
          </Form.Item>
        )}

        {flag === "Edit-product" && (
          <Form.Item label="State product">
            <Switch
              name="stateProduct"
              value={data.stateProduct}
              defaultChecked
              onChange={onChangeState}
            />
          </Form.Item>
        )}

        <Form.Item label="Image" name="urlProduct">
          <ImageCloudinary onChange={handleURLChange} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            {flag === "Create-product" && "Create product"}
            {flag === "Edit-product" && "Update product"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormProduct;
