"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsll, stateClear } from "@/redux/actions";
import Cards from "@/components/cards/Cards";
import CreateProduct from "@/components/floatOption/createProduct/CreateProduct";

function page() {
  const dispatch = useDispatch();
  const selectProducts = useSelector(({ root }) => root.products);
  const selectState = useSelector(({ root }) => root.state);
  const selectLogin = useSelector(({ root }) => root.login);
  const levelAccess = selectLogin?.access;

  useEffect(() => {
    dispatch(getProductsll());
  }, []);

  useEffect(() => {
    if (selectState?.state === "product-delete") {
      dispatch(getProductsll());
      setTimeout(() => {
        dispatch(stateClear());
      }, 500);
    }
  }, [selectState]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4 mt-2">
        List products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Cards
          list={selectProducts}
          vie={levelAccess}
          user={selectLogin?.data?.idUser}
        />
      </div>
      {levelAccess && (
        <div>
          <CreateProduct
            flag="Create-product"
            user={selectLogin?.data?.idUser}
          />
        </div>
      )}
    </div>
  );
}

export default page;
