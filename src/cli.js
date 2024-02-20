import readlineSync from 'readline-sync';

const User = readlineSync; // for convenience and comprehensibility
//= ====================================================//
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = User.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export default greetings;
