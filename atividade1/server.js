const express = require('express');
const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});

// Rota sobre
app.get('/sobre', (req, res) => {
    res.send('Sou um assistente virtual criado pela OpenAI.');
});

// Rota de contato
app.get('/contato', (req, res) => {
    res.send('Você pode entrar em contato pelo e-mail: contato@exemplo.com');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
