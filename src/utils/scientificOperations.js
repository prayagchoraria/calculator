import {SIGN, SQUARE, SQUARE_ROOT} from './constants';

const scientificOperations = {
  [SIGN]: (x) => x * -1,
  [SQUARE]: (x) => x * x,
  [SQUARE_ROOT]: (x) => Math.sqrt(x),
}

export default scientificOperations;
