#!/usr/bin/env node
import message from '../src/utils/message.js';
//= ====================================================//

// default = (msg, count = 3, task = 'even')
const progression = message(
  'What number is missing in the progression?',
  3,
  'progression',
);

export default progression;