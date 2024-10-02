// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Rota parametrizada
app.get('/saudacao/:nome', (req, res) => {
    const nome = req.params.nome; // Extrai o parâmetro "nome" da URL
    res.send(`Olá, ${Renato}!`); // Responde com uma saudação personalizada
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
