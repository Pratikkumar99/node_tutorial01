const express = require('express');
const app = express();//app as functionality of express
const db =require('./db');
const Person = require('./models/Person');
const MenuItem = require('./models/MenuItems');
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());//req.body me store kr lega

//POST route to add a person
app.post('/person',async (req,res)=>{
  try {
    const data = req.body;//asssuming the request body contains the person data
    //create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    //save the new Person to the database
    const response = await newPerson.save();
    console.log("data saved",response);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({error : "Internal Server error"});
  }
})
//GET method to get the the data from the database: 
app.get('/person',async (req,res)=>{
  try{
    const data =await Person.find();
    console.log('Data fetched succesfully');
    res.status(200).json(data);
  }catch (error) {
    console.log(error);
    res.status(500).json({error : "Internal Server error"});
  }
})
app.get('/',function(req,res){
  res.send("welcome to my hotel.. How i can help you ?");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

