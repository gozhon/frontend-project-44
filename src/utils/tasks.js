import calc from '../games/calc.js';
import even from '../games/even.js';
import gcd from '../games/gcd.js';
import progression from '../games/progression.js';
//= ==================================================//

const tasks = (taskName) => {
  let rightAnswer;
  switch (taskName) {
    case 'even': {
      rightAnswer = even();
      break;
    }
    case 'gcd': {
      rightAnswer = gcd();
      break;
    }
    case 'calc': {
      rightAnswer = calc();
      break;
    }
    case 'progression': {
      rightAnswer = progression();
      break;
    }
    case 'prime': {
      rightAnswer = isPrime();
      break;
    }
    default:
      break;
  }
  return rightAnswer;
};

export default tasks;