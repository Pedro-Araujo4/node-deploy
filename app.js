var express = require('express')
var app = express();

app.get("/url", (req, res) => {
    res.send('Chegou no BackEnd')
})

app.listen(process.env.PORT || 9000)
