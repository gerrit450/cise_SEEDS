const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://gerrit:Hungergames221@clustermern-shard-00-00.te3ee.mongodb.net:27017,clustermern-shard-00-01.te3ee.mongodb.net:27017,clustermern-shard-00-02.te3ee.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-rukgtm-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express'); //load express dependencies. must be installed npm install express --save
const app = express(); // this creates an express application
const bodyParser = require('body-parser');

let title;
let published;
let firstname;
let lastname;

app.use(bodyParser.urlencoded({ extended: true })) //reading information from form in App.js that uses a middleware called body-parser

async function run() {

  app.set('view engine', 'ejs');

  try
  {
    client.connect();
    console.log('connected!');
  }
  catch (err) 
  {
        console.log(err);
  }

  const collection = client.db('Merndata').collection('mern');

  app.post('/formdata', function (req, res) // if a request is sent on localhost4001/formdata, it will run this function
  {
    res.send(req.body.title);
    console.log("parsed!"); // saving input

      let personDocument = { // an object parsed to mongodb server
        "title": req.body.title,
        "published": new Date(req.body.date), // date YY/MM/DD                                                                                                                           
        "Authors": { "FirstName": req.body.firstname, "LastName": req.body.lastname },
    }
       
       const p = collection.insertOne(personDocument); //insert into database an object that contains information
    })

  app.get('/readdata', (req, res) => { //reading collections from the mongodb database when on localhost4001/readdata
    const db = client.db('Merndata') // go to database
      db.collection('mern').find().toArray() // then go to collection
        .then(data => {
          console.log(data)
          res.render('readBook.ejs', { output: data })
        })
        .catch(error => console.error(error))
        
  })

  app.put('/updatedata', (req, res) => 
  {
    res.send("updating!");
    const db = client.db('Merndata') // go to database
    db.collection('mern').findOneAndUpdate({title: req.body.title}, {$set: {title: "changed!", authors:{FirstName: "changed!", 
    LastName: "changed" }}}, {upsert: true} )

    .then(result => {console.log(result),res.send(result)})
    .catch(error => console.error(error))
  })

app.listen(4001, function() //starting port for server
{
  console.log('connected to localhost 4001');
})

}

run(); //running the function