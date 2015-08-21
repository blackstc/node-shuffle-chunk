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

var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var shuffledArray = shuffle(inputArray);
var chunked = chunk(shuffledArray, 4);
