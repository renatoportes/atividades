// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página Inicial</title>
        </head>
        <body>
            <h1>Bem-vindo à minha página!</h1>
            <p>Esta é uma página HTML simples servida pelo Express.</p>
        </body>
        </html>
    `);
});

// Rota da API
app.get('/api/data', (req, res) => {
    const dados = {
        nome: "Seu Nome",
        idade: 30,
        profissao: "Desenvolvedor",
        cidade: "Sua Cidade"
    };
    res.json(dados); // Responde com um objeto JSON
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
