import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TodoItem = ({ todoItem = {} }) => {

  const deleteItem = () => {
    console.log('Delete');
  }

  return (
    <ListItem disablePadding>     
        <ListItemText>{todoItem.itemDescription}</ListItemText>
        <ListItemIcon>
         <Button onClick={deleteItem}>
           <DeleteIcon />
         </Button>
         <Button>
           <EditIcon />
         </Button>
        </ListItemIcon>
    </ListItem>
  );
};

export default TodoItem;
