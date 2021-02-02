import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ActionKey, NumberKey} from './keys';
import {CLEAR, EQUALS} from '../../utils/constants';

const KeyWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  width: 360px;
`;

const NumbersKeypad = (
  {
    dispatch,
  }
) => (
  <KeyWrapper>
    <NumberKey
      dispatch={dispatch}
      number={1}
    />
    <NumberKey
      dispatch={dispatch}
      number={2}
    />
    <NumberKey
      dispatch={dispatch}
      number={3}
    />

    <NumberKey
      dispatch={dispatch}
      number={4}
    />
    <NumberKey
      dispatch={dispatch}
      number={5}
    />
    <NumberKey
      dispatch={dispatch}
      number={6}
    />

    <NumberKey
      dispatch={dispatch}
      number={7}
    />
    <NumberKey
      dispatch={dispatch}
      number={8}
    />
    <NumberKey
      dispatch={dispatch}
      number={9}
    />

    <ActionKey
      action={CLEAR}
      dispatch={dispatch}
      label={'Clear'}
    />
    <NumberKey
      dispatch={dispatch}
      number={0}
    />
    <ActionKey
      action={EQUALS}
      dispatch={dispatch}
      label={'='}
    />
  </KeyWrapper>
);

NumbersKeypad.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default NumbersKeypad;
