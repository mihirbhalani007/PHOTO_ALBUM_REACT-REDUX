[1mdiff --git a/src/components/UsersList.js b/src/components/UsersList.js[m
[1mindex 3515006..1f7b352 100644[m
[1m--- a/src/components/UsersList.js[m
[1m+++ b/src/components/UsersList.js[m
[36m@@ -1,28 +1,38 @@[m
[31m-import { useEffect } from "react";[m
[32m+[m[32mimport { useEffect, useState } from "react";[m
 import { useDispatch, useSelector } from "react-redux";[m
 import { fetchUsers, addUser } from "../store";[m
 import Skeleton from "./Skeleton";[m
 import Button from "./Button";[m
 [m
 function UsersList() {[m
[32m+[m[32m  const [isLoadingUsers, setIsLoadingUsers] = useState(false);[m
[32m+[m[32m  const [loadingUsresErros, setLoadingUsresError] = useState(null);[m
   const dispatch = useDispatch();[m
[31m-  const { isLoading, data, error } = useSelector((state) => {[m
[32m+[m[32m  const { data } = useSelector((state) => {[m
     return state.users;[m
   });[m
 [m
   useEffect(() => {[m
[31m-    dispatch(fetchUsers());[m
[32m+[m[32m    setIsLoadingUsers(true);[m
[32m+[m[32m    dispatch(fetchUsers())[m
[32m+[m[32m      .unwrap()[m
[32m+[m[32m      .catch((err) => {[m
[32m+[m[32m        setLoadingUsresError(err);[m
[32m+[m[32m      })[m
[32m+[m[32m      .finally(() => {[m
[32m+[m[32m        setIsLoadingUsers(false);[m
[32m+[m[32m      });[m
   }, [dispatch]);[m
 [m
   const handleUserAdd = () => {[m
     dispatch(addUser());[m
   };[m
 [m
[31m-  if (isLoading) {[m
[32m+[m[32m  if (isLoadingUsers) {[m
     return <Skeleton times={6} className="h-10 w-full" />;[m
   }[m
 [m
[31m-  if (error) {[m
[32m+[m[32m  if (loadingUsresErros) {[m
     return <div>Error fetching data.....</div>;[m
   }[m
 [m
[1mdiff --git a/src/index.js b/src/index.js[m
[1mindex c77b972..e95254d 100644[m
[1m--- a/src/index.js[m
[1m+++ b/src/index.js[m
[36m@@ -1,9 +1,9 @@[m
 import React from "react";[m
 import App from "./App";[m
 import { createRoot } from "react-dom/client";[m
[31m-import "./Index.css";[m
[32m+[m[32mimport "./index.css";[m
 import { Provider } from "react-redux";[m
[31m-import { store } from "./store";[m
[32m+[m[32mimport { store } from "./store/index";[m
 [m
 const el = document.getElementById("root");[m
 const root = createRoot(el);[m
