"use client";
import React, { useEffect } from "react";
import { getUsersAll } from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TableUser from "@/components/table/tableUser/TableUser";

function page() {
  const dispatch = useDispatch();
  const selectUsers = useSelector(({ root }) => root.users);

  useEffect(() => {
    dispatch(getUsersAll());
  }, []);

  return (
    <div>
      <h1>List Users</h1>
      <TableUser list={selectUsers} />
    </div>
  );
}

export default page;
