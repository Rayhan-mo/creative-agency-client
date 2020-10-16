const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()


const app = express();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.18zpv.mongodb.net/${process.env.DB_}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const customerCollection = client.db("creativeAgency").collection("customer");
 
  app.post('/addCustomer', (req, res) => {
      const customer =req.body;
      customerCollection.insertOne({customer})
      .then(result => {
          res.send(result.insertedCount);
      })
  })
});


app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.get('/', (req, res) =>{
    res.send("hello world")
})

app.listen(process.env.PORT || port)