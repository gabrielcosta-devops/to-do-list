const express = require("express");
const router = express.Router();
const pool = require("../db");

// Criar usuário
router.post("/", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await pool.query(
            "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
            [username, email, password]
        );
        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});

// Listar todos os usuários
router.get("/", async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});

// Listar usuário por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        if (user.rows.length === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});

// Atualizar usuário
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    try {
        const updatedUser = await pool.query(
            "UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *",
            [username, email, password, id]
        );
        if (updatedUser.rows.length === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.json(updatedUser.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});

// Deletar usuário
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
        if (deletedUser.rows.length === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        res.json({ message: "Usuário deletado com sucesso" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Erro no servidor");
    }
});


module.exports = router;