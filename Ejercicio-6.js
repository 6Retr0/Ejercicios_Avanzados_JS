const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, firstIndex, secondIndex) {
  if (
    firstIndex < 0 ||
    firstIndex >= array.length ||
    secondIndex < 0 ||
    secondIndex >= array.length
  ) {
    console.log("Index out of array range.");
    return array;
  }

  let valueToChange = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = valueToChange;
  return array;
}

console.log(swap(fantasticFour, -2, 2));
console.log(swap(fantasticFour, 0, 3));
