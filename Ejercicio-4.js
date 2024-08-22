const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  if (array.includes(text)) {
    return array.indexOf(text);
  } else return -1;
}

console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Darth Vader"));

/*----------------------------------------------------------------------*/

function removeItem(array, text) {
  const index = findArrayIndex(array, text)

  if (index !== -1) {
    array.splice(index, 1)
  }
  return array;
}

console.log(removeItem(mainCharacters, "Anakin"))