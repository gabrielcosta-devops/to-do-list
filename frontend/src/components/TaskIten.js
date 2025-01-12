import React from "react";
import { ListItem, ListItemText, Checkbox } from "@mui/material";

const TaskItem = ({ task, onToggleTask }) => {
  const handleCheckboxChange = () => {
    onToggleTask(task.id);  // Chama a função para alterar o estado da tarefa
  };

  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={handleCheckboxChange}  // Atualiza o estado ao marcar/desmarcar
      />
      <ListItemText primary={task.name} />
    </ListItem>
  );
};

export default TaskItem;