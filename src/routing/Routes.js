import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemButton from "@mui/material/ListItemButton";

import Dashboard from "../pages/Dashboard/Dashboard";
import MyList from "../pages/MyList/MyList";
import style from "./Routes.module.scss";

const routes = {
  home: "/",
  mylist: "/mylist",
};

const ReactRouter = () => {
  return (
    <div>
      <div>
        <MenuList className={style.menu}>
          <MenuItem className={style.menuItem}>
            <ListItemButton>
              <Link to={routes.home} className={style.routeLink}>
                Dashboard
              </Link>
            </ListItemButton>
          </MenuItem>
          <MenuItem className={style.menuItem}>
            <ListItemButton>
              <Link to={routes.mylist} className={style.routeLink}>
                My List
              </Link>
            </ListItemButton>
          </MenuItem>
        </MenuList>
      </div>

      <Switch>
        <Route exact path={routes.home} component={Dashboard}>
          <Dashboard />
        </Route>
        <Route path={routes.mylist} component={MyList}>
          <MyList />
        </Route>
      </Switch>
    </div>
  );
};
export default ReactRouter;
