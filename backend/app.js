const swaggerUi = require('swagger-ui-express');
const express = require ('express');
const app = express();
const port = 4956;
const path = require('path');
const fs = require('fs')

//Load of Swagger spec
const swaggerDoc = JSON.parse(fs.readFileSync(path.join(__dirname,'swagger.json'),'utf-8'));

//Serve uses Swagger UI 
app.use('/swagger-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc));

//To check if the Server works 
app.get('/',(req,res) => {
    res.send("alive")
})
//Get method for the courses 
app.get('/courses',(req,res) => {
    res.send("works")
})
app.get('/course/{:id}',(req,res) => {
    res.send("get id works")
})
//Post Method to add new courses 
app.post('/course', (req,res) =>{
    res.send('post works')
})
//Update existing courses
app.put('/course/{:id}', (req,res) => {
    res.send('put works')
})
//Delete existing courses 
app.delete('/course/{:id}', (req,res) => {
    res.send('delete works')
})

app.listen(port, () => {
    console.log(`Server runnig : http://localhost:${port}`)
})

