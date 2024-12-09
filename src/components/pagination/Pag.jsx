import React, { useState } from "react";
import { Pagination } from "antd";
import { getPageUserAll } from "@/redux/actions";
import { useDispatch } from "react-redux";

function Pag({ info, access }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const totalPage = (info?.pages ?? 0) * 10;

  const onChange = (page) => {
    setCurrent(page);
    dispatch(getPageUserAll(access, page));
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
