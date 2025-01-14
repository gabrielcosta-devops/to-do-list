import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ onSubmit, initialTask = { title: '', status: 'Pendente' } }) => {
  const [task, setTask] = useState(initialTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ title: '', status: 'Pendente' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Título"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Salvar
      </Button>
    </Box>
  );
};

export default TaskForm;