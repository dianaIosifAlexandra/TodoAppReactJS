import React, { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import EditModal from "../EditModal/EditModal";

const TodoItem = ({ todoItem, deletetodoItem }) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const onDeleteTodoItem = () => {
    deletetodoItem(todoItem.id);
  };

  const handleClickOpenEditModal = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    // setSelectedValue(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={2} sm={2} md={2}>
        <Checkbox />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <ListItemText>{todoItem.description}</ListItemText>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <ListItemText>{todoItem.deadline}</ListItemText>
      </Grid>
      <Grid item xs={2} sm={4} md={2}>
        <ListItemIcon>
          <Tooltip title="Delete" placement="top">
            <IconButton onClick={onDeleteTodoItem}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit" placement="top">
            <IconButton onClick={handleClickOpenEditModal}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <EditModal open={openEditModal} onClose={handleCloseEditModal} />
        </ListItemIcon>
      </Grid>
    </Grid>
  );
};

export default TodoItem;
