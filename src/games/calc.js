import getRandomInteger from '../utils/getRandomInt.js';
//= ===========================================//

const operators = ['+', '-', '*'];

const calc = () => {
  let answer;
  const randomInt = getRandomInteger();
  const randomInt2 = getRandomInteger();
  const randomOperators = getRandomInteger(0, operators.length - 1);
  switch (randomOperators) {
    case 0:
      console.log(`Question: ${randomInt} + ${randomInt2}`);
      answer = randomInt + randomInt2;
      break;
    case 1:
      console.log(`Question: ${randomInt} - ${randomInt2}`);
      answer = randomInt - randomInt2;
      break;
    case 2:
      console.log(`Question: ${randomInt} * ${randomInt2}`);
      answer = randomInt * randomInt2;
      break;
    default:
      break;
  }

  return answer;
};

export default calc;
