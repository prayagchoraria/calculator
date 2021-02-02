import {ADD, DIVIDE, MULTIPLY, SUBTRACT} from './constants';

const operations = {
  [ADD]: (a, b) => a + b,
  [DIVIDE]: (a, b) => a / b,
  [MULTIPLY]: (a, b) => a * b,
  [SUBTRACT]: (a, b) => a - b,
}

export default operations;
