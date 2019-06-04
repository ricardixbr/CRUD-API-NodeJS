const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Backend da aplicação de cobrança!');
});

app.listen(3001);