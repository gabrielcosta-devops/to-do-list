const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware para verificar o token JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Token não fornecido.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido.' });

    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };