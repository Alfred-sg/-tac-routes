// import React from 'react';
import router from "../../apis/router";

const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/list"
  },
  {
    path: "/list",
    component: () => {}
  },
  {
    path: "/create",
    auth: ["login"],
    component: () => {}
  }
];

const detailRoute = {
  path: "/detail",
  component: () => {}
}

describe("test router", () => {
  let num = 0;
  router.subscribe(() => ++num);

  // 设置路由。TODO：数据扁平化测试
  test('test setRoutes', () => {
    router.setRoutes(routes);

    expect(num).toBe(1);
    expect(router.routes).toBe(routes);
  });

  // 添加路由
  test('test addRoute', () => {
    router.addRoute(detailRoute);

    expect(num).toBe(2);
    expect(router.routes.includes(detailRoute)).toBe(true);
  });

  // 删除路由
  test('test removeRoute', () => {
    router.removeRoute(detailRoute);

    expect(num).toBe(3);
    expect(router.routes.includes(detailRoute)).toBe(false);
  });

  // 触发监听器
  test('test notify', () => {
    router.notify();

    expect(num).toBe(4);
  });
});