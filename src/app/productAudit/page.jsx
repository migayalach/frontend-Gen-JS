"use client";
import React, { useEffect } from "react";
import { getAuditProduct } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TableProductsAudit from "@/components/table/tableProductsAudit/TableProductsAudit";

function page() {
  const dispatch = useDispatch();
  const selectAudit = useSelector(({ root }) => root.audit);

  useEffect(() => {
    dispatch(getAuditProduct());
  }, []);

  return (
    <div>
      <h1>List products audit</h1>
      <TableProductsAudit list={selectAudit} />
    </div>
  );
}

export default page;
