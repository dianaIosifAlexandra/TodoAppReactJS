import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddTaskIcon from "@mui/icons-material/AddTask";

import style from "./AddTodoItem.module.scss";

const AddTodoItem = ({ submit }) => {
  let [todoItemDescription, setTodoItemDescription] = useState("");
  const [isAddBtnAvailable, setAddIsBtnAvailable] = useState(true);
  let [deadline, setDeadline] = useState("");

  const handleChangeTodoItem = (event) => {
    setTodoItemDescription(event.target.value);
  };

  const handleChangeDeadline = (event) => {
    setDeadline(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit(todoItemDescription, deadline);
    setTodoItemDescription("");
    setDeadline("");
    setAddIsBtnAvailable(true);
  };

  useEffect(() => {
    if (todoItemDescription && deadline) {
      setAddIsBtnAvailable(false);
    }
  }, [todoItemDescription, deadline]);

  return (
    <div className={style.addTodoItem}>
      <Card>
        <CardContent className={style.addTodoItemContainer}>
          <TextField
            id="standard-basic"
            label="Todo item"
            variant="standard"
            className={style.itemDescription}
            required
            value={todoItemDescription}
            onChange={handleChangeTodoItem}
            fullWidth
          />

          <TextField
            className={style.deadline}
            type="datetime-local"
            label="TodoItem deadline"
            InputLabelProps={{
              shrink: true,
            }}
            required
            value={deadline}
            onChange={handleChangeDeadline}
            fullWidth
          />

          <Button
            variant="contained"
            color="primary"
            className={style.addBtn}
            onClick={onSubmit}
            disabled={isAddBtnAvailable}
          >
            <AddTaskIcon className={style.addTodoItemIcon} />
            ADD
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddTodoItem;
