"use client";
// COMPONET'S
import Pag from "@/components/pagination/Pag";
import TableUser from "@/components/table/tableUser/TableUser";
import Loading from "@/components/pageInfo/Loading";
import Page404 from "@/components/pageInfo/Page404";

// HOOK'S
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//REDUX
import { getUsersAll, getLevelAll } from "@/redux/actions";

function page() {
  const dispatch = useDispatch();
  const selectUsers = useSelector(({ root }) => root.users);
  const selectInfo = useSelector(({ root }) => root?.info);
  const selectInfoUser = useSelector(
    ({ root }) => root?.login?.data?.nameLevel
  );
  const selectCredential = useSelector(({ root }) => root?.login);

  useEffect(() => {
    if (selectCredential) {
      dispatch(getUsersAll(selectInfoUser));
    }
  }, [selectCredential]);

  useEffect(() => {
    dispatch(getUsersAll(selectInfoUser));
  }, []);

  useEffect(() => {
    if (selectInfoUser === "Administrador") {
      dispatch(getLevelAll());
    }
  }, [selectInfoUser]);

  if (Object.keys(selectCredential).length === 0) {
    return (
      <div>
        <Page404 />
      </div>
    );
  }

  if (!selectUsers?.length && !selectInfo) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <header>
        <h1>List Users</h1>
      </header>
      <main>
        <TableUser list={selectUsers} access={selectInfoUser} />
      </main>
      <footer>
        <Pag info={selectInfo} access={selectInfoUser} flag="users" />
      </footer>
    </div>
  );
}

export default page;
