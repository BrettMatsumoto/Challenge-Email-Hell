let dataset = require('./../email_log.json');
//data is an object with keyword emails whos value is an array of objects

let getList = dataset.emails.reduce(function(prev, curr) {
  if (!prev.hasOwnProperty(curr.email)) {
    prev[curr.email] = 1;
  } else {
    prev[curr.email] += 1;
  }
  return prev;
}, {});
console.log(getList);