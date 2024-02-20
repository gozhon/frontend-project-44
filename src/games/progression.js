import getRandomInteger from '../utils/getRandomInt.js';
//= ===========================================//

const progression = () => {
  const result = [];
  const length = getRandomInteger(5, 13);
  const startProgression = getRandomInteger();
  for (let i = 0; i <= length * 2; i += 2) {
    const answer = startProgression + i;
    result.push(answer);
  }
  const hideNumber = getRandomInteger(0, result.length - 1);
  const answer = result[hideNumber];
  result[hideNumber] = '..';
  console.log('Question:', result.join(' '));
  return answer;
};

export default progression;
