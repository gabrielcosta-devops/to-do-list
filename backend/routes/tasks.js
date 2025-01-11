const express = require("express");
const router = express.Router();
const pool = require("../db");

// Criar tarefa
router.post("/", async (req, res) => {
    const { user_id, title, description, status } = req.body;
    try {
        const newTask = await pool.query(
            "INSERT INTO tasks (user_id, title, description, status) VALUES ($1, $2, $3, $4) RETURNING *",
            [user_id, title, description, status || "pending"]
        );
        res.json(newTask.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});

// Listar todas as tarefas
router.get("/", async (req, res) => {
    try {
        const tasks = await pool.query("SELECT * FROM tasks");
        res.json(tasks.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});

// Obter tarefa por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const task = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
        if (task.rows.length === 0) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }
        res.json(task.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});

// Atualizar tarefa
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    try {
        const updatedTask = await pool.query(
            "UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *",
            [title, description, status, id]
        );
        if (updatedTask.rows.length === 0) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }
        res.json(updatedTask.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});

// Deletar tarefa
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);
        if (deletedTask.rows.length === 0) {
            return res.status(404).json({ message: "Tarefa não encontrada" });
        }
        res.json({ message: "Tarefa deletada com sucesso" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});

module.exports = router;
