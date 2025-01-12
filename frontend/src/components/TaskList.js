import React from "react";
import { List, Divider } from "@mui/material";
import TaskItem from "./TaskIten";

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <div key={task.id}>
          <TaskItem task={task} />
          {index < tasks.length - 1 && <Divider />}
        </div>
      ))}
    </List>
  );
};

export default TaskList;
