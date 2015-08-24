var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/", function(req, res) {
  var array = [];
  var number = req.body.number;
  console.log(number);
  var chunkSize = req.body.chunk;

  for (var i = 0; i < number; i++) {
    array.push(i);
  }

  var shuffled = shuffle(array);
  var chunked = chunk(shuffled, chunkSize);
  res.render("results", {chunked: chunked});
});

function shuffle(array) {
  var temp = array.slice();
  var shuffledArray = [];
  while(temp.length > 0) {
    var index = Math.floor(Math.random() * temp.length);
    shuffledArray.push(temp.splice(index, 1)[0]);
  }
  return shuffledArray;
}

function chunk(array, chunkSize) {
  var temp = array.slice();
  var numberOfGroups = Math.ceil(array.length / chunkSize);
  var chunkedArray = [];

  while (temp.length > 0) {
    var chunks = [];
    for (var i = 0; i < numberOfGroups; i++) {
      if (temp.length / numberOfGroups < 1) {
        chunks = temp.splice(0, temp.length);
        break;
      } else {
        chunks[i] = temp.pop();
      }
    }
    chunkedArray.push(chunks);
  }
  return chunkedArray;
}

module.exports = router;
