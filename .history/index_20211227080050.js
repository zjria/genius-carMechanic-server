const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send('Running the post');
});

// Password: geniusCarMechanicInformation
// User Name: geniusCarMechanicInformation


const uri = `mongodb+srv://process.env.DB_USER:process.env.DB_PASS@cluster0.juo58.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});






app.listen(port, ()=>{
  console.log('Genius Car Mechanics Services', port);
})