"use client";
import React, { useEffect } from "react";
import { getAuditUser } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TableActivity from "@/components/table/tableActivity/TableActivity";
import Pag from "@/components/pagination/Pag";

function page() {
  const dispatch = useDispatch();
  const selectAudit = useSelector(({ root }) => root.audit);
  const selectInfo = useSelector(({ root }) => root?.info);

  useEffect(() => {
    dispatch(getAuditUser());
  }, []);

  return (
    <div>
      <header>
        <h1>List People activity</h1>
      </header>
      <main>
        <TableActivity list={selectAudit} />
      </main>
      <footer>
        <Pag info={selectInfo} flag="people-audit" />
      </footer>
    </div>
  );
}

export default page;
