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
    theme,
  }
) => (
  <KeyWrapper>
    <NumberKey
      dispatch={dispatch}
      number={1}
      theme={theme}
    />
    <NumberKey
      dispatch={dispatch}
      number={2}
      theme={theme}
    />
    <NumberKey
      dispatch={dispatch}
      number={3}
      theme={theme}
    />

    <NumberKey
      dispatch={dispatch}
      number={4}
      theme={theme}
    />
    <NumberKey
      dispatch={dispatch}
      number={5}
      theme={theme}
    />
    <NumberKey
      dispatch={dispatch}
      number={6}
      theme={theme}
    />

    <NumberKey
      dispatch={dispatch}
      number={7}
      theme={theme}
    />
    <NumberKey
      dispatch={dispatch}
      number={8}
      theme={theme}
    />
    <NumberKey
      dispatch={dispatch}
      number={9}
      theme={theme}
    />

    <ActionKey
      action={CLEAR}
      dispatch={dispatch}
      label={'Clear'}
      theme={theme}
    />
    <NumberKey
      dispatch={dispatch}
      number={0}
      theme={theme}
    />
    <ActionKey
      action={EQUALS}
      dispatch={dispatch}
      label={'='}
      theme={theme}
    />
  </KeyWrapper>
);

NumbersKeypad.propTypes = {
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default NumbersKeypad;
