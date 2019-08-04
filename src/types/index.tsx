export interface RouterProps {
  /* 路由形式 */
  mode?: "hash" | "browser" | "memory",
  /* 是否懒加载 */
  lazy?: boolean,
  forceRefresh?: boolean,
  getUserConfirmation?: Function,
  keyLength: number,
  basename: string,
  authority: Function,
  exact?: boolean,
  children: React.ReactNode
}

export interface RoutesProps {
  routes: Array<RouteNode>,
  children: React.ReactNode
}

export interface RouteNode {
  /* 重定向 */
  redirect?: string | object,
  /* 权限校验 */
  auth?: Array<string>,
  /* 路由规则 */
  path: string,
  /* 渲染组件 */
  component?: any,
  /* 子路由 */
  children?: Array<RouteNode>
}
 