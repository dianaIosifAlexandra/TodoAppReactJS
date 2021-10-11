import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import style from "./EditModal.module.scss";

const EditModal = ({ editedItem, open, onClose, saveEditedTodoItem }) => {
  const [itemDescription, setItemDescription] = useState(editedItem);

  const handleChangeTodoItemDescription = (event) => {
    setItemDescription(event.target.value);
  };

  const handleClose = () => {
    onClose();
  };

  const onSaveItemDescription = () => {
    saveEditedTodoItem(itemDescription);
    setItemDescription("");
    onClose();
  };
  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <DialogTitle>Edit todo item</DialogTitle>
      <TextField
        className={style.textField}
        id="standard-basic"
        label="Todo item description"
        variant="standard"
        required
        value={itemDescription}
        onChange={handleChangeTodoItemDescription}
      />
      <div className={style.buttonGroup}>
        <Button
          variant="contained"
          color="primary"
          className={style.saveBtn}
          onClick={onSaveItemDescription}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={style.cancelBtn}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
    </Dialog>
  );
};

export default EditModal;
