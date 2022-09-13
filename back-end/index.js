const express = require("express");
require("dotenv").config();
const connectDB = require("./utils/connectDB");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://esgellman:digits@cluster0.neecle7.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let comments = [];
let image = "";

const PORT = process.env.PORT || 3000;

const app = express();

connectDB((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  app.listen(PORT, () => {
    console.log(`👉 Server listening on ${PORT}.`);

  });
});

app.get('/image/:id', async (req, res)=>{
  const collection = client.db("artstuff").collection(req.params.id);
  
  const comments = await collection.find().toArray();

  res(comments);

})

app.post('/image/:id', async (req, res)=>{
  let id = req.params.id;
  const collection = client.db("artstuff").collection(req.params.id);
  //let comment = req.body.comment;
  let comment = "such a great job";
  var myquery = { text: comment};
  collection.insertOne(myquery);
  res("comment sent");
})