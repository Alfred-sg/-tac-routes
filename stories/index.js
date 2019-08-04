import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { Router, Routes } from "lib";

const routes = [
  {
    path: "/",
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

storiesOf("tac-routes", module)
  .add('with some emoji', () => (
    <Router>
      <Routes routes={routes} />
      <Button onClick={() => {
        console.log(window.tac_history);window.tac_history.push("/list")
      }}>跳转</Button>
      <Button onClick={() => window.tac_history.push("/create")}>跳转2</Button>
    </Router>
  ));