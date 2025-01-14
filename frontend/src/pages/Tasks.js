import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
} from '@mui/material';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudar React', status: 'Pendente' },
    { id: 2, title: 'Finalizar projeto', status: 'Concluída' },
  ]);
  const [filter, setFilter] = useState('Todos');

  const filteredTasks = tasks.filter(
    (task) => filter === 'Todos' || task.status === filter
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Minhas Tarefas
      </Typography>
      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="Todos">Todos</MenuItem>
        <MenuItem value="Pendente">Pendente</MenuItem>
        <MenuItem value="Concluída">Concluída</MenuItem>
      </Select>
      <List>
        {filteredTasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.title} secondary={task.status} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Tasks;