//capitalizeWords Solution
// hello returns ['H', 'E', 'L', 'L', 'O']
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;

}

capitalizeWords("hello")