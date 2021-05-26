const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://gerrit:Hungergames221@clustermern-shard-00-00.te3ee.mongodb.net:27017,clustermern-shard-00-01.te3ee.mongodb.net:27017,clustermern-shard-00-02.te3ee.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-rukgtm-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express'); //load express dependencies. must be installed npm install express --save
const app = express(); // this creates an express application
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT|| 4001;

app.use(bodyParser.urlencoded({ extended: true })) //reading information from form in App.js that uses a middleware called body-parser

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, './App.js')))

async function run() {

  app.set('view engine', 'ejs'); // setting the view engine to use embedded javascript language to display

  try
  {
    await client.connect();
    console.log('connected!');
    
  }
  catch (err) 
  {
        console.log(err);
  } 


  const collection = client.db('Merndata').collection('mern');

  app.post('/articles/submit', function (req, res) // if a request is sent on localhost4001/formdata, it will run this function
  {
    res.send("Thank you for submitting the article!");
    console.log("parsed!"); // saving input

      let personDocument = { // an object parsed to mongodb server
        "title": req.body.title,
        "published": new Date(req.body.year), // date YY/MM/DD     
        "source": req.body.source,
        "practice": req.body.practice,
        "claim": req.body.claim,                                                                                                             
        "Authors": req.body.name,
    }
       
         collection.insertOne(personDocument); //insert into database an object that contains information
    })

  app.post( '/results', (req, res) => { //reading collections from the mongodb database when on localhost4001/readdata
    const db = client.db('Merndata') // go to database
    const collect = db.collection('mern') // then go to collection
    //collect.find({title: "/most/"}).toArray() 
    collect.find( {$and: [{title:{$regex: req.body.search ,$options:"$i"}}, {claim:{$regex: req.body.claim , $options:"$i"}}]}).toArray()
        .then(data => {
          console.log(data)
          //console.log( req.body.search," and ",req.body.claim);
         // res.send(data)
          res.render('display.ejs', {output: data })
        })
        .catch(error => console.error(error))
        
  })
  
  app.get('/articles', (req, res) => {
    app.use(express.static(path.join(__dirname, '/Form')));
    res.render('addArticle.ejs')

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

  // AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)

app.get('/', (req, res) => {
  app.use(express.static('createForm'))
  res.sendFile(path.join(__dirname + '/createForm/form.html'))
  
})


app.listen(PORT, function() //starting port for server
{
  console.log('connected to',PORT);
  
})

}
run().catch(console.dir);; //running the function 