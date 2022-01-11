const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { MongoClient } = require('mongodb');

//app.use(bodyParser.urlencoded({ extended: false }))

//const config = require('./config/keys');
//const mongoose = require('mongoose');

//mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

/*var MongoClient = require('mongodb').MongoClient;
var url = config.mongoURI;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.registration.insert(
    { "name" : "test1",
      "age" : 343,
      "gender" : "female"
    }
 );
});
*/
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")

// connect to your cluster

/*addToDB();
async function addToDB()
{
    
    const uri = "mongodb+srv://neli:MqGFL7zznwcP2h3@cluster0.60obe.mongodb.net/test?retryWrites=true&w=majority";
    const client = await new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // specify the DB's name
    await client.connect(err => {
        console.log("MongoDB connected ");
        const db = client.db('test');
        // execute find query
        
        db.collection("registration").insertOne({
            "name" : "nePOOP",
            "address" : 24,
            "phone" : "gender",
            "email": "neli.zarkova@abv.bg"
       })
        console.log("SUCC ADD INTO DB");
        // close connection
    });
    
    client.close();
}
*/


app.use(bodyParser.json());

if(process.env.NODE_ENV == 'production') {
    app.use(express.static(client/build));

    const path = require('path');
    app.get('*', (req, res) => {
        red.sendFiles(path.resolve(__dirname, 'build', 'index.html'));
    })
}

require('./routes/dialogFlowRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

