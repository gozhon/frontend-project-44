import readlineSync from 'readline-sync';

const User = readlineSync; // for convenience and comprehensibility
//= ====================================================//

const answer = () => {
  const userAnswer = User.question('Your answer: ');
  if (userAnswer === 'yes' || userAnswer === 'no') {
    return userAnswer;
  }
  return +userAnswer;
};

export default answer;