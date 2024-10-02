const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});


app.get('/sobre', (req, res) => {
    res.send('Sou um assistente virtual criado pela OpenAI.');
});


app.get('/contato', (req, res) => {
    res.send('Você pode entrar em contato pelo e-mail: contato@exemplo.com');
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
