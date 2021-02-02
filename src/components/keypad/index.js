import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumbersKeypad from './NumbersKeypad';
import OperatorsKeypad from './OperatorsKeypad';

const KeypadWrapper = styled.div`
  display: flex;
`;

const KeyPad = (
  {
    dispatch,
  }
) => (
  <KeypadWrapper>
    <NumbersKeypad
      dispatch={dispatch}
    />
    <OperatorsKeypad
      dispatch={dispatch}
    />
  </KeypadWrapper>
);

KeyPad.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default KeyPad;
