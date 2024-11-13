var express = require('express')
var app = express();

app.get("/url", (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Chegou no BackEnd')
})
app.put('/put/:id', (req, res) => {
    console.log("Chegou no PUT...")
    res.status(200).send('retorno do put');
})
app.post('/post',(req, res) => {
    console.log("Chegou no POST...")
    res.status(200).send(["REST","API","JSON"]);
})
app.delete('/delete/:id',(req, res) => {
    console.log("chegou no DELETE...")
    res.status(200).send("usando o DELETE para excluir...");
})

app.listen(process.env.PORT || 9000)
