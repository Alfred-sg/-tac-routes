import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import AuthorityContext from "../context/AuthorityContext";
import travser from "../utils/travser";
import { RouteNode, RoutesProps } from "../types";
import router from "../apis/router";

/**
 * 单个路由
 * @param {RouteNode} route 路由信息
 * @param {Array<RouteNode>} children 子路由
 */
function renderRoute(
  route: RouteNode, 
  children: Array<RouteNode>
): React.ReactNode {
  // 重定向
  if (route.redirect) {
    return <Route 
      key={route.path} 
      path={route.path} 
      exact
      render={() => <Redirect to={route.redirect} />}
    />;
  }

  // 路由节点
  const routeNode = <Route 
    key={route.path} 
    path={route.path} 
    render={props => {
      return children ? (
        <route.component {...props}>
          <Switch>{children}</Switch>
        </route.component>
      ) : (
        <route.component {...props} />
      )
    }}
  />;

  // 权限校验
  if (route.auth) {
    return (
      <AuthorityContext.Consumer>
        {(authority: Function) => authority(route.auth) ? routeNode : ""}
      </AuthorityContext.Consumer>
    );
  }

  return routeNode;
};

/**
 * 全量路由
 * @param {object} props
 */
class Routes extends React.Component<RoutesProps> {
  subscriber: {remove: Function};
  state = {
    routes: []
  }

  componentDidMount(){
    this.subscriber = router.subscribe((routes: Array<RouteNode>) => {
      this.setState({
        routes
      });
    });
    router.setRoutes(this.props.routes);
  }

  componentWillUnmount(){
    this.subscriber.remove();
  }

  render() {
    const { routes } = this.state;
    const { children } = this.props;

    return (
      <Switch>
        {children ? children : travser(routes, renderRoute)}
      </Switch>
    );
  }
}

export default Routes;