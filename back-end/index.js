const express = require("express");
const bodyParser = require('body-parser');
require("dotenv").config();
const connectDB = require("./utils/connectDB");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://esgellman:digits@cluster0.neecle7.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let comments = [];
let image = "";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

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

  await client.db("artstuff").createCollection(req.params.id, function (err, res) {
    if (err) {
        //console.log(err);
        if (err.codeName =="NamespaceExists") {
            console.log("Already Exists Collection  : " + req.params.id + "");
            return;
        }
    }
    console.log("Collection created! : "+req.params.id+"");

  });

  const collection = client.db("artstuff").collection(req.params.id);
  let comment = req.body;
  console.log(comment);
  var myquery = { text: comment["comment"]};
  collection.insertOne(myquery);
  res.end("comment sent");
})