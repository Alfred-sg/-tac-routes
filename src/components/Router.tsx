import React from "react";
import { Router as ReactRouter } from "react-router";
import { createBrowserHistory, createHashHistory, createMemoryHistory } from "history";
import AuthorityContext from "../context/AuthorityContext";
import LazyContext from "../context/LazyContext";
import { RouterProps } from "../types";

const createHistoryMap = {
  browser: createBrowserHistory,
  hash: createHashHistory,
  memory: createMemoryHistory
};

/**
 * 全局总路由
 * @param {object} props
 */
function Router({
  mode = "hash", 
  lazy = false,
  forceRefresh = false,
  getUserConfirmation,
  keyLength,
  basename,
  authority = () => true,
  children
}: RouterProps): React.ReactNode {
  const createHistory = createHistoryMap[mode];
  const history = createHistory({
    forceRefresh,
    getUserConfirmation,
    keyLength,
    basename
  });
  (window as any).tac_history = history;
    
  return (
    <ReactRouter history={history}>
      <AuthorityContext.Provider value={authority}>
        <LazyContext.Provider value={lazy}>
          {children}
        </LazyContext.Provider>
      </AuthorityContext.Provider>
    </ReactRouter>
  );
}

export default Router;