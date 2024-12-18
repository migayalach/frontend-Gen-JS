"use client";
import React from "react";
import { getIdProduct, auxClear } from "@/redux/actions";
import CreateProduct from "@/components/floatOption/createProduct/CreateProduct";
import { useSelector } from "react-redux";
import "./styleProduct.css";

function page({ params }) {
  const selectAux = useSelector(({ root }) => root.aux);
  const selectLogin = useSelector(({ root }) => root.login);
  const levelAccess = selectLogin?.access;

  return (
    <>
      <div className="body-container">
        <section className="container-card">
          <article>
            <div className="image-container">
              <img
                className="image-photo-head"
                src={selectAux?.urlProduct}
                alt={selectAux?.nameProduct}
              />
            </div>
            <header>
              <div className="container-span-header">
                <span className="text-title" style={{ background: "#f3c05b" }}>
                  Price: $ {selectAux?.priceProduct}
                </span>
                <span className="text-title" style={{ background: "#d5f2e3" }}>
                  State:
                  {selectAux?.stateProduct === 0
                    ? " Out of stock"
                    : " In stock"}
                </span>
              </div>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "5px",
                }}
              >
                {selectAux?.nameProduct}
              </p>
            </header>
            <p className="description-text">
              Date product: {selectAux?.dateIntroProduct?.slice(0, 10)}
            </p>
            <p className="description-text">Code: {selectAux?.codeProduct}</p>
            <p className="description-text">
              Description: {selectAux?.descriptionProduct}
            </p>

            <footer>
              <span>Stock: {selectAux?.stockProduct}</span>
              <span>Made: {selectAux?.madeProduct}</span>
            </footer>
          </article>
        </section>
      </div>

      {(levelAccess === "Administrador" || levelAccess === "Dueño") && (
        <div>
          <CreateProduct flag="Edit-product" user={selectLogin?.data?.idUser} />
        </div>
      )}
    </>
  );
}

export default page;
