const express = require('express');
const http = require('http');

//incializar aplicação express
const app = express();
const server = http.createServer(app);

//configurar Express
const inicializar = async () => {
    try{
        const PORT = 3000;
        server.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
     } catch (error) {
        console.error('Error ao inicializar o Servidor', error);
    }
};

//executar o inicalizador
inicializar();

//executar os modulos app, server
module.exports = {app,server };   