const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const app = express();
const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.juo58.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// async nem function
async function run() {
  try{

    await client.connect();
    const database = client.db('carMechanics');
    const servicesCollection = database.collection('carInfo');

    // POST API
    app.post('/services', async());

  }   
  finally {

    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send('Running the post');
});    

app.listen(port, ()=>{
  console.log('Genius Car Mechanics Services', port);
})