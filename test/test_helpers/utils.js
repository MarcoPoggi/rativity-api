const path = require('path')
const fs = require('fs');

function testname(dir, file) {
  if (dir === null || file === null) return "test no name"

  let directory = path.basename(dir);
  let filename = path.basename(file)

  return `${directory} > ${filename.split('.')[0]}`
}

function loadFakeData(datafile) {
  let rawjson = fs.readFileSync(`${__dirname}/../test_data/${datafile}.json`);
  let data = JSON.parse(rawjson);
  
  return data;
}


module.exports = {
  testname,
  loadFakeData,
}