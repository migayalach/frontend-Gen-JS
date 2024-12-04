"use client";
import React, { useEffect } from "react";
import { getAuditUser } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TableActivity from "@/components/table/tableActivity/TableActivity";

function page() {
  const dispatch = useDispatch();
  const selectAudit = useSelector(({ root }) => root.audit);

  useEffect(() => {
    dispatch(getAuditUser());
  }, []);

  return (
    <div>
      <h1>List People activity</h1>
      <TableActivity list={selectAudit} />
    </div>
  );
}

export default page;
