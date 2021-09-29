import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddTaskIcon from "@mui/icons-material/AddTask";

import style from "./AddTodoItem.module.scss";

const AddTodoItem = () => {
  const [todoItemDescription, setTodoItemDescription] = useState('');

  const handleSubmit = () => {
    console.log("a");
  };

  return (
    <div className={style.addTodoItem}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit} className={style.addTodoItemContainer}>
            <TextField
              id="standard-basic"
              label="Todo item"
              variant="standard"
              className={style.itemDescription}
              required
            />

            <TextField
              className={style.deadline}
              type="datetime-local"
              label="TodoItem deadline"
              defaultValue="2017-05-24T10:30"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />

            <Button
              variant="contained"
              color="primary"
              className={style.addBtn}
            >
              <AddTaskIcon className={style.addTodoItemIcon} />
              ADD
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddTodoItem;
