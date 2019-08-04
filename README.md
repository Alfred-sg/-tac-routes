## @tac/router

基于 react-router 的路由辅助库。

## 基本使用

### 配置路由

```Javascript
import { Router, Routes } from "@tac/router";

const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/list"
  },
  {
    path: "/list",
    component: dynamic(import("./components/list"))// 动态加载
  },
  {
    path: "/create",
    component: () => <div>create</div>
  }
];

<Router>
  <Routes routes={routes} />
</Router>
```

### 运行时路由

```Javascript
import { router } from "@tac/router";
const detailRoute = {
  path: "/detail",
  component: () => <div>detail</div>
}

router.addRoute(detailRoute);
```

### 操纵 history

```Javascript
window.tac_history.push("/detail");
```

## apis

包含 react-router-dom 导出的所有模块。

### Router

* mode 可设置 hash, memory, browser。

### Routes

* routes 初始化路由。

### router

* routes 获取路由。
* setRoutes(routes) 设置路由。
* addRoute(route) 添加路由。
* removeRoute(route) 删除路由。
* subscribe(cb) 当路由信息变更时执行回调。
* notify 触发所有回调。