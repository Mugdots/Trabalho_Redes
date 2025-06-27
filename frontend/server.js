const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, 'css')));


app.use('/js', express.static(path.join(__dirname, 'js')));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("Servidor Requisitado");
})

app.listen(PORT, () => {
	console.log(`Clienteouvindo a porta ${PORT}`);
})

