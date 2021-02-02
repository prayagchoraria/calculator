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
  }
) => (
  <KeyWrapper>
    <ScientificOperatorKey
      dispatch={dispatch}
      label={'Sign (+/-)'}
      operationType={SIGN}
    />

    <ScientificOperatorKey
      dispatch={dispatch}
      label={`Square (x²)`}
      operationType={SQUARE}
    />

    <ScientificOperatorKey
      dispatch={dispatch}
      label={'Square root (√x)'}
      operationType={SQUARE_ROOT}
    />
  </KeyWrapper>
);

OperatorsKeypad.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default OperatorsKeypad;
