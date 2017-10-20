var express = require('express');

var app = express();

var port = process.env.PORT || 4200;

app.use(express.static('dist'))


app.listen(port,()=>{
  console.log('app is running at port ',port);
});