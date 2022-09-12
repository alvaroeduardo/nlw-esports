import express from 'express';

const app = express();

app.get('/', () => {
    console.log('Hello World!');
});

app.listen(3333, () => {
    console.log("Servidor iniciado com sucesso.");
})