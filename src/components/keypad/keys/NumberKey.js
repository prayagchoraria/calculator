import PropTypes from 'prop-types';
import Key from '../../../library/key';
import {NUMBER} from '../../../utils/constants';

const NumberKey = (
  {
    dispatch,
    number,
    theme,
  }
) => {
  const handleClick = () => {
    dispatch({type: NUMBER, number});
  }

  return (
    <Key
      height={60}
      justifyContent={'center'}
      label={number}
      onClick={handleClick}
      width={120}
      theme={theme}
    />
  );
}

NumberKey.propTypes = {
  dispatch: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
}

export default NumberKey;
