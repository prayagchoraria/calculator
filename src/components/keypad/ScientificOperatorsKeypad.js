import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ScientificOperatorKey} from './keys';
import {SIGN, SQUARE, SQUARE_ROOT} from '../../utils/constants';

const KeyWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 160px;
`;

const OperatorsKeypad = (
  {
    dispatch,
    theme,
  }
) => (
  <KeyWrapper>
    <ScientificOperatorKey
      dispatch={dispatch}
      label={'Sign (+/-)'}
      operationType={SIGN}
      theme={theme}
    />

    <ScientificOperatorKey
      dispatch={dispatch}
      label={`Square (x²)`}
      operationType={SQUARE}
      theme={theme}
    />

    <ScientificOperatorKey
      dispatch={dispatch}
      label={'Square root (√x)'}
      operationType={SQUARE_ROOT}
      theme={theme}
    />
  </KeyWrapper>
);

OperatorsKeypad.propTypes = {
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default OperatorsKeypad;
