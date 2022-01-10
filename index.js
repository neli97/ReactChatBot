const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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

app.use(bodyParser.json())

require('./routes/dialogFlowRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

