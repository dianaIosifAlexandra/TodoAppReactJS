import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import AddTaskIcon from "@mui/icons-material/AddTask";

import style from "./AddTodoItem.module.scss";

const AddTodoItem = () => {
  return (
    <div className={style.addTodoItem} md-flex md-align="center">
      <Card>
        <CardContent>
          <TextField id="standard-basic" label="Todo item"></TextField>

          <Button variant="contained" color="primary">
            {/* <AddTaskIcon /> */}
            ADD
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddTodoItem;
