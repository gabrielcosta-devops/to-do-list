import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" onClick={() => onEdit(task)}>
            <Edit />
          </IconButton>
          <IconButton edge="end" onClick={() => onDelete(task.id)}>
            <Delete />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={task.title}
        secondary={`Status: ${task.status}`}
      />
    </ListItem>
  );
};

export default TaskItem;