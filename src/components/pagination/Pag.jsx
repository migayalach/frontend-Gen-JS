import React, { useState } from "react";
import { Pagination } from "antd";
import {
  getPageUserAll,
  getPageProductsAll,
  getPageUsersAudit,
  getPageUsersProducts,
} from "@/redux/actions";
import { useDispatch } from "react-redux";

function Pag({ info, access, flag }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const totalPage = (info?.pages ?? 0) * 10;

  const onChange = (page) => {
    setCurrent(page);
    if (flag === "users") {
      dispatch(getPageUserAll(access, page));
    } else if (flag === "products") {
      dispatch(getPageProductsAll(page));
    } else if (flag === "people-audit") {
      dispatch(getPageUsersAudit(page));
    } else if (flag === "product-audit") {
      dispatch(getPageUsersProducts(page));
    }
  };

  return (
    <Pagination
      current={current}
      onChange={onChange}
      total={totalPage}
      align="center"
    />
  );
}

export default Pag;
