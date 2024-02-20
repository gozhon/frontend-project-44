#!/usr/bin/env node
import message from "../src/utils/message.js";
//= ====================================================//

// default = (msg, count = 3, task = 'even')
const isPrime = message(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  3,
  'prime',
);

export default isPrime;