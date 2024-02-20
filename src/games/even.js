import getRandomInteger from '../utils/getRandomInt.js';
//= ===========================================//

const even = () => {
  let answer = 0;
  const randomInt = getRandomInteger();
  console.log('Question:', randomInt);
  answer = randomInt % 2 === 0 ? 'yes' : 'no';
  return answer;
};

export default even;
