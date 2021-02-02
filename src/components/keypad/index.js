import PropTypes from 'prop-types';
import styled from 'styled-components';
import NumbersKeypad from './NumbersKeypad';
import OperatorsKeypad from './OperatorsKeypad';
import ScientificOperatorsKeypad from './ScientificOperatorsKeypad';

const KeypadWrapper = styled.div`
  display: flex;
`;

const KeyPad = (
  {
    dispatch,
    scientificMode,
  }
) => (
  <KeypadWrapper>
    <NumbersKeypad
      dispatch={dispatch}
    />

    <OperatorsKeypad
      dispatch={dispatch}
    />

    {scientificMode && (
      <ScientificOperatorsKeypad
        dispatch={dispatch}
      />
    )}
  </KeypadWrapper>
);

KeyPad.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scientificMode: PropTypes.bool.isRequired,
}

export default KeyPad;
