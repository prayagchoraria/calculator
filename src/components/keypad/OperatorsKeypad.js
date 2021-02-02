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
  }
) => (
  <KeyWrapper>
    <OperatorKey
      dispatch={dispatch}
      label={'Add (+)'}
      operationType={ADD}
    />

    <OperatorKey
      dispatch={dispatch}
      label={'Subtract (-)'}
      operationType={SUBTRACT}
    />

    <OperatorKey
      dispatch={dispatch}
      label={'Multiply (*)'}
      operationType={MULTIPLY}
    />

    <OperatorKey
      dispatch={dispatch}
      label={'Divide (/)'}
      operationType={DIVIDE}
    />
  </KeyWrapper>
);

OperatorsKeypad.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default OperatorsKeypad;
