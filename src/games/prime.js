import getRandomInteger from "../utils/getRandomInt.js";
//= ===========================================//

const isPrime = () => {
  const n = getRandomInteger();
  console.log('Question:', n);
  let answer;
  if (n < 2) {
    answer = 'no';
    return answer;
  }
  if (n === 2) {
    answer = 'yes';
    return answer;
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      answer = 'no';
      return answer;
    }
    i += 1;
  }
  answer = 'yes';
  return answer;
};

export default isPrime;