// time 1: 32:31
// time 2:

function zipList(one, two) {
  const arr = [];
  for (let i = 0; i < one.length; i++) {
    arr.push(one[i]);
    arr.push(two[i]);
  }
  return arr;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheSimpleWay(one, two) {
  return _.flatten(_.zip(one, two), 1);
}

console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
