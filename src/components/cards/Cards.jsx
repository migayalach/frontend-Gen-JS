import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import {
  deleteProduct,
  getProductId,
  auditProductAction,
} from "@/redux/actions";
import { useDispatch } from "react-redux";
import Link from "next/link";

function Cards({ list, vie, user }) {
  const dispatch = useDispatch();

  const handleDelete = (idProduct) => {
    dispatch(deleteProduct(idProduct));
    dispatch(
      auditProductAction({
        idUser: user,
        idAction: 3,
        oldData: {},
        newData: {},
      })
    );
  };

  const handleUpdate = (idProduct) => {
    dispatch(getProductId(idProduct));
  };

  return (
    <>
      {list?.map(({ idProduct, nameProduct, priceProduct, urlProduct }) => (
        <Card
          key={idProduct}
          hoverable
          style={{
            width: 300,
            margin: "10px",
          }}
          cover={
            <img
              alt={nameProduct}
              className="w-full h-full object-cover"
              src={
                urlProduct ||
                "https://res.cloudinary.com/dqgcyonb9/image/upload/v1733325904/samples/k9uukxe6qgwnyqkyheye.png"
              }
            />
          }
          actions={
            vie
              ? [
                  <DeleteOutlined
                    key="Delete"
                    onClick={() => handleDelete(idProduct)}
                    style={{ color: "#da2c38", fontSize: "20px" }}
                  />,
                  <Link
                    onClick={() => handleUpdate(idProduct)}
                    href={`/product/${idProduct}`}
                    key="Edit"
                  >
                    <EditOutlined
                      style={{ color: "#2a9d8f", fontSize: "20px" }}
                    />
                  </Link>,
                ]
              : [
                  <Link
                    onClick={() => handleUpdate(idProduct)}
                    href={`/product/${idProduct}`}
                    key="Edit"
                  >
                    <EyeOutlined
                      style={{ color: "#2a9d8f", fontSize: "20px" }}
                    />
                  </Link>,
                ]
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">{nameProduct}</h2>
              <span className="text-xl font-semibold text-[#001d3d]">
                ${priceProduct}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}

export default Cards;
