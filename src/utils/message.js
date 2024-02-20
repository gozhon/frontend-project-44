import greetings from '../cli.js';
import question from './index.js';
//= =========================================//

// message = (count = 3, args = false, boolAns=true)

let userName;

const message = (msg, count = 3, task = 'even') => {
  userName = greetings();
  console.log(msg);
  const isRight = question(count, task);
  if (isRight !== false) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export default message;
