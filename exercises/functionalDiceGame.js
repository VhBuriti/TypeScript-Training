const getRandomRoll = () => Math.floor(Math.random() * 6) + 1;
const checkIfWon = (roll) => roll === 6;

const rollDice = () => {
  const roll = getRandomRoll();
  const message = checkIfWon(roll)
    ? `You rolled ${roll}. You Won!!`
    : `You rolled ${roll}. Try again!`;

  console.log(message);
};
