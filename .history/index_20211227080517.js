const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send('Running the post');
});


const uri = `mongodb+srv://${process.env.DB_USER}:{}@cluster0.juo58.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});






app.listen(port, ()=>{
  console.log('Genius Car Mechanics Services', port);
})