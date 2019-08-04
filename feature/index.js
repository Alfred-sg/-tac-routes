import React from "react";
import { render } from "react-dom";
import { Router, Routes, router, dynamic } from "@tac/router";

const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/list"
  },
  {
    path: "/list",
    component: dynamic(import("./components/list"))
  },
  {
    path: "/create",
    component: () => <div>create</div>
  }
];

const detailRoute = {
  path: "/detail",
  component: () => <div>detail</div>
}

render(
  <Router>
    <button onClick={() => window.tac_history.push("/list")}>列表</button>
    <button onClick={() => window.tac_history.push("/create")}>新建</button>
    <button onClick={() => {
      console.log("old routes are", router.routes)
      router.addRoute(detailRoute);
      console.log("new routes are", router.routes)
    }}>添加详情</button>
    <button onClick={() => window.tac_history.push("/detail")}>详情</button>
    <Routes routes={routes} />
  </Router>
, document.getElementById('root'));
