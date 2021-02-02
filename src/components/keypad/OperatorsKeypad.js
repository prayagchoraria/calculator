import styled from 'styled-components';
import PropTypes from 'prop-types';
import {OperatorKey} from './keys';
import {ADD, DIVIDE, MULTIPLY, SUBTRACT} from '../../utils/constants';

const KeyWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 140px;
`;

const OperatorsKeypad = (
  {
    dispatch,
    theme,
  }
) => (
  <KeyWrapper>
    <OperatorKey
      dispatch={dispatch}
      label={'Add (+)'}
      operationType={ADD}
      theme={theme}
    />

    <OperatorKey
      dispatch={dispatch}
      label={'Subtract (-)'}
      operationType={SUBTRACT}
      theme={theme}
    />

    <OperatorKey
      dispatch={dispatch}
      label={'Multiply (*)'}
      operationType={MULTIPLY}
      theme={theme}
    />

    <OperatorKey
      dispatch={dispatch}
      label={'Divide (/)'}
      operationType={DIVIDE}
      theme={theme}
    />
  </KeyWrapper>
);

OperatorsKeypad.propTypes = {
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default OperatorsKeypad;
