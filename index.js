const express = require('express');
const app = express()


app.use(express.static('public'));

var hits = 0;
app.get('/hits', (req, res) => {
    ++hits
    res.contentType('text/plain').send((hits.toString()))
})

app.listen(2000);