const swaggerUi = require('swagger-ui-express');
const express = require ('express');
const app = express();
const port = 4956;
const path = require('path');
const fs = require('fs')
const sequelize = require('./config/database');
const Courses = require('./models/Courses.js');
const { finalization } = require('process');
const { Query } = require('pg');

//Load of Swagger spec
const swaggerDoc = JSON.parse(fs.readFileSync(path.join(__dirname,'swagger.json'),'utf-8'));

//Serve uses Swagger UI 
app.use('/swagger-docs',swaggerUi.serve,swaggerUi.setup(swaggerDoc));
//To receive JSON object 
app.use(express.json())
//For testin the synchronization

/*(async () => {
    try {
      // Sync models with the database
      await sequelize.sync({ force: true }); // Use { alter: true } for safe schema updates
      console.log('Database synced successfully.');
  
      // Insert test data
      await Courses.create({ course: 'math', module: 'science' });

    } catch (error) {
      console.error('Error syncing the database:', error);
    } finally {
      await sequelize.close(); // Close the connection when done
    }
  })();
*/

//To check if the Server works 
app.get('/',(req,res) => {
    res.send("alive")
})
//Get method for the courses 
app.get('/courses',async (req,res) => {
    const courses = await Courses.findAll();
    res.send(JSON.stringify(courses))
})
app.get('/course',async (req,res) => {
  const id = req.query.id
  const courses = await Courses.findByPk(id)
  res.send(JSON.stringify(courses))
})

//Post Method to add new courses 
app.post('/course', async (req,res) =>{
  const {course,module} = req.body 
  const query = await Courses.create({course: course ,module:module} )
  res.send(JSON.stringify(query))
})

//Update existing courses
app.put('/course', async(req,res) => {
  const {id,column,value} = req.query;
  const query = await Courses.update(
      {[column]: value},
      {
        where: {
          id: id
        },
      },
    );
  res.send(query)
})

//Delete existing courses 
app.delete('/course', (req,res) => {
  const id = req.query.id
    const query = Courses.destroy({
      where: {
        id: id
      }
    });
  res.send(query)
})

app.listen(port, () => {
    console.log(`Server runnig : http://localhost:${port}`)
})

