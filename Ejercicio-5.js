function rollDice(sides) {
  let randomNumber = Math.floor(Math.random() * sides) + 1;
  return `The dice shows: ${randomNumber}`;
}

console.log(rollDice(6));
console.log(rollDice(12));