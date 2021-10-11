import React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import style from "./EditModal.module.scss";

const EditModal = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  //   const handleListItemClick = (value) => {
  //     onClose(value);
  //   };
  return (
    <Dialog onClose={handleClose} open={open} className={style.dialogContainer}>
      <DialogTitle>EditModal</DialogTitle>
      <TextField
        id="standard-basic"
        label="Todo item"
        variant="standard"
        required
        // value={todoItemDescription}
        // onChange={handleChangeTodoItem}
      />
      <Button variant="contained">Contained</Button>
    </Dialog>
  );
};

export default EditModal;
