import getRandomInteger from '../utils/getRandomInt.js';
//= ===========================================//

const gcd = () => {
  const num1 = getRandomInteger();
  const num2 = getRandomInteger();
  const smallest = num1 - num2 > 0 ? num2 : num1;
  const arr = [];
  for (let i = 1; i <= smallest; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      arr.push(i);
    }
  }
  console.log(`Question: ${num1} ${num2}`);
  return arr[arr.length - 1];
};

export default gcd;
