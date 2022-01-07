const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;


const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

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


    // Get API
    app.get('/services', async(req, res)=>{
      const cursor = servicesCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });
    
    // Get Single API
    app.get('/services/:id', async (req, res)=>{
      const id = req.params.id;
      console.log('Hitting The Services Post', id);
      const query = {_id: ObjectId(id)};
      const service = await servicesCollection.findOne(query);
      res.json(service);
    })

    // POST API
    app.post('/services', async(req, res)=>{

      const service = req.body;
      console.log('hitting the post', service);

      const result = await servicesCollection.insertOne(service);
      console.log(result);

      res.json(result);
    });
  }   
  finally {

    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send('Running the post genius, Heroku-part tow');
});    

app.listen(port, ()=>{
  console.log('Genius Car Mechanics Services', port);
})