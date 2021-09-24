import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.headerContainer}>
      <Card className={style.cardContainer}>
        <CardContent className={style.headerCard}>
          <div>Todo App</div>
        </CardContent>
      </Card>
    </header>
  );
};

export default Header;
