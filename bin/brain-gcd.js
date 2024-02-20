#!/usr/bin/env node
import message from '../src/utils/message.js';
//= ====================================================//

// default = (msg, count = 3, task = 'even')
const gcd = message(
  'Find the greatest common divisor of given numbers.',
  3,
  'gcd',
);

export default gcd;
