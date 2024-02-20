#!/usr/bin/env node
import message from "../src/utils/message.js";
//= ======================================/

// default = (msg, count = 3, task = 'even')
const calc = message('What is the result of the expression?', 3, 'calc');
export default calc;