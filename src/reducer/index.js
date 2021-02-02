import {CALCULATE, CALCULATE_SCIENTIFIC, CLEAR, EQUALS, LIGHT, NUMBER, SCIENTIFIC_MODE, THEME_CHANGE} from '../utils/constants';
import operations from '../utils/operations';
import scientificOperations from '../utils/scientificOperations';

export const INITIAL_STATE_CALCULATOR = {
  calculated: true,
  display: 0,
  operation: null,
  reset: true,
  result: 0,
}

export const INITIAL_STATE = {
  ...INITIAL_STATE_CALCULATOR,
  scientificMode: false,
  theme: LIGHT,
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

    case CALCULATE_SCIENTIFIC: {
      const {
        operationType,
      } = action;

      const {
        display,
      } = state;

      const value = scientificOperations[operationType](display);

      return {
        ...state,
        calculated: true,
        display: value,
        operation: null,
        reset: false,
        result: value,
      }

    }

    case CLEAR: {
      return {
        ...state,
        ...INITIAL_STATE_CALCULATOR,
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

    case SCIENTIFIC_MODE: {
      const {
        scientificMode,
      } = state;

      return {
        ...state,
        scientificMode: !scientificMode,
      }
    }

    case THEME_CHANGE: {
      const {
        theme,
      } = action;

      return {
        ...state,
        theme,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default reducer;
