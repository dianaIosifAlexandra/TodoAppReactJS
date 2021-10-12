import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import MyList from "../pages/MyList/MyList";

const routes = {
  home: "/",
  mylist: "/mylist",
};

const ReactRouter = () => {
  return (
    <div>
      <div>
        <Link to={routes.home}>Dashboard</Link>
        <Link to={routes.mylist}>My List</Link>
      </div>

      <BrowserRouter>
        <Switch>
          <Route exact path={routes.home} component={Dashboard}>
            <Dashboard />
          </Route>
          <Route path={routes.mylist} component={MyList}>
            <MyList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default ReactRouter;
