// server.js
const express = require('express');
const gerarNumeroAleatorio = require('./utils'); // Importa a função do módulo

const app = express();
const PORT = 3000;

// Rota para gerar e responder com um número aleatório
app.get('/numero', (req, res) => {
    const numeroAleatorio = gerarNumeroAleatorio();
    res.send(`Número aleatório: ${numeroAleatorio}`);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
