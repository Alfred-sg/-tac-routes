import { RouteNode } from "types";
import travser from "../utils/travser";

/**
 * 路由控制器
 */
class Route {
  routes: Array<RouteNode> = [];
  fltternRoutes: {[key: string]: any} = {};
  subs: Array<Function> = [];

  setRoutes(routes: Array<RouteNode>) {
    this.routes = routes;
    this.notify();
  }

  /**
   * 添加路由
   * @param route 路由
   */
  addRoute(route: RouteNode) {
    if ( !this.routes.some(r => route.path === r.path) ){
      this.routes.push(route);
      this.notify();
    };
  }

  /**
   * 批量添加路由
   * @param routes 路由
   */
  addRoutes(routes: Array<RouteNode>) {
    const added = routes.some(route => {
      if ( !this.routes.some(r => route.path === r.path) ){
        this.routes.push(route);
        return true;
      };
      return false;
    });

    if (added) this.notify();
  }

  /**
   * 删除路由
   * @param route 路由
   */
  removeRoute(route: RouteNode) {
    const index = this.routes.indexOf(route);
    this.routes.splice(index, 1);
    this.notify();
  }

  /**
   * 绑定监听器
   * @param sub 监听器
   */
  subscribe(sub: Function){
    this.subs.push(sub);
    return {
      remove: () => {
        const index = this.subs.indexOf(sub);
        this.subs.splice(index, 1);
      }
    }
  }

  /**
   * 触发监听器
   */
  notify(){
    // 扁平化
    travser(this.routes, (node: RouteNode) => {
      this.fltternRoutes[node.path] = node;
    });

    this.subs.forEach(sub => {
      sub(this.routes);
    });
  }
}

export default new Route();