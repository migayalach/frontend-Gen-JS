"use client";
import React, { useEffect } from "react";
import { getAuditProduct } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TableProductsAudit from "@/components/table/tableProductsAudit/TableProductsAudit";
import Pag from "@/components/pagination/Pag";

function page() {
  const dispatch = useDispatch();
  const selectAudit = useSelector(({ root }) => root.audit);
  const selectInfo = useSelector(({ root }) => root?.info);

  useEffect(() => {
    dispatch(getAuditProduct());
  }, []);

  return (
    <div>
      <header>
        <h1>List products audit</h1>
      </header>
      <main>
        <TableProductsAudit list={selectAudit} />
      </main>
      <footer>
        <Pag info={selectInfo} flag="product-audit" />
      </footer>
    </div>
  );
}

export default page;
