const express = require ('express');
const app = express();
const port = 4956;
const path = require('path')
app.get('/',(req,res) => {
    res.send("alive")
})

app.get('/course',(req,res) => {
    res.send("works")
})
app.post('/course', (req,res) =>{
    res.send('post works')
})
app.put('/course/:id', (req,res) => {
    res.send('put works')
})
app.delete('/course/:id', (req,res) => {
    res.send('delete works')
})

app.listen(port, () => {
    console.log(`Server runnig : http://localhost:${port}`)
})

