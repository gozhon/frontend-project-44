#!/usr/bin/env node
import message from '../src/utils/message.js';
//= ====================================================//

// default = (msg, count = 3, task = 'even')
message(
  'Answer "yes" if the number is even, otherwise answer "no".',
  3,
  'even',
);
