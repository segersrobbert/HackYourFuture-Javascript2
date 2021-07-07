const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  arr = values.filter((a, b, c) => c.indexOf(a) === b);
  console.log('array', arr);
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);
