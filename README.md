## @tac/routes

基于 react-router 的路由辅助库。

### 配置路由

```Javascript
import { Router, Routes, route } from "@tac/routes";

const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/list"
  },
  {
    path: "/list",
    component: () => <div>list</div>
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
import { router } from "@tac/routes";
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