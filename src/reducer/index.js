import {CALCULATE, CLEAR, EQUALS, NUMBER} from '../utils/constants';
import operations from '../utils/operations';

export const INITIAL_STATE = {
  calculated: true,
  display: 0,
  operation: null,
  reset: true,
  result: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case CALCULATE: {
      const {
        operationType,
      } = action;

      const {
        calculated,
        display,
        operation,
        result,
      } = state;

      if (calculated) {
        return {
          ...state,
          operation: operationType,
        }
      } else {
        const value = operation ? operations[operation](result, display) : display;

        return {
          ...state,
          calculated: true,
          display: value,
          operation: operationType,
          reset: false,
          result: value,
        }
      }
    }

    case CLEAR: {
      return {
        ...INITIAL_STATE,
      }
    }

    case EQUALS: {
      const {
        calculated,
        display,
        operation,
        result,
      } = state;

      const value = operation ? operations[operation](result, display) : display;

      if (calculated) {
        return state;
      } else {
        return {
          ...state,
          calculated: true,
          display: value,
          operation: null,
          result: value,
          reset: true,
        }
      }
    }

    case NUMBER: {
      const {
        number,
      } = action;

      const {
        calculated,
        display,
        reset,
      } = state;

      return {
        ...state,
        calculated: false,
        display: calculated || reset ? number : display * 10 + number,
        reset: false,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;
