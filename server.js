var express = require('express');
var app = express();

var messages = [{text:'Some text', owner: 'Tim'}, {text: 'other message', owner: 'Jane'}]
app.use((req, res, next) =>  {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header("Acess-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.get('/messages', (req, res) => {
  res.json(messages);
})

app.listen(1234);
