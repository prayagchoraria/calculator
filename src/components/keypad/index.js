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
    theme,
  }
) => (
  <KeypadWrapper>
    <NumbersKeypad
      dispatch={dispatch}
      theme={theme}
    />

    <OperatorsKeypad
      dispatch={dispatch}
      theme={theme}
    />

    {scientificMode && (
      <ScientificOperatorsKeypad
        dispatch={dispatch}
        theme={theme}
      />
    )}
  </KeypadWrapper>
);

KeyPad.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scientificMode: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
}

export default KeyPad;
