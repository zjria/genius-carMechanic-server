const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send('Running the post');
});


app.listen(port, ()=>{
  console.log('Genius Car Mechanics Services', port);
})