const express = require('express');
const path = require('path');
const redis = require('redis');
const app = express();
const client = redis.createClient();

const PORT = process.env.PORT || 3000;
const replicaApp = process.env.APP_NAME

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));



(async () => {
    client.on('error', err => console.log('Redis Client Error', err));
    client.on('ready', () => console.log('Redis Client iniciado'));
    await client.connect();
    await client.ping();
})


app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Servidor Requisitado por ${replicaApp}`);
})

app.get('/', async, (req, res) => {
    
})

app.listen(PORT, () => {
	console.log(`${replicaApp} está ouvindo a porta ${PORT}`);
})