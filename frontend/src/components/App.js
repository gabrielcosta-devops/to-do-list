import React, { useState, useEffect } from "react";
import { Container, AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Função para buscar tarefas do backend
  const fetchTasks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/tasks`);
    const data = await response.json();
    setTasks(data);
  };  

  // Função para alternar o estado da tarefa (concluída ou não)
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Gestão de Tarefas</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Box my={2}>
          <Button variant="contained" color="primary" onClick={fetchTasks}>
            Carregar Tarefas
          </Button>
        </Box>
        <TaskList tasks={tasks} onToggleTask={toggleTaskCompletion} />
      </Container>
    </div>
  );
}

export default App;