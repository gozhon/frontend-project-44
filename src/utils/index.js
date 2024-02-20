import answer from './answer.js';
import tasks from './tasks.js';
//= =========================================//

const question = (count, task) => {
  for (let i = 0; i < count; i += 1) {
    const rightAnswer = tasks(task);
    const userAnswer = answer();
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}'`
          + ' is wrong answer ;(. Correct answer was '
          + `'${rightAnswer}'`,
      );
      return false;
    }
  }
  return true;
};
export default question;
