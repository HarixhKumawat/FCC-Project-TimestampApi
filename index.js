// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//accepting empty date parameter!
app.get("/api", function (req, res) {
  date = new Date();
  res.json({unix: Date.now(), utc: date.toUTCString()});
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'}); 
  console.log("welcome to our api :)  ")
});

app.get("/api/:date?", function (req, res) {
  reqDate = req.params.date;

  if(!isNaN(Date.parse(reqDate)))
  print = dateFinderS(reqDate);
  else if(/\d{5,}/.test(reqDate))
  print = dateFinderI(reqDate);
  else
  print = {error: "Invalid Date"}

  res.json(print);
});



dateFinderS = (dateStr) => {
  date = new Date(dateStr);
  return {unix: date.getTime(), utc: date.toUTCString()};
}
dateFinderI = (dateStr) => {
  date = new Date(parseInt(dateStr));
  return {unix: date.getTime(), utc: date.toUTCString()};
}

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000 , function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
