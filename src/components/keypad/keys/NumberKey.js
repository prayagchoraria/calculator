import PropTypes from 'prop-types';
import Key from '../../../library/key';
import {NUMBER} from '../../../utils/constants';

const NumberKey = (
  {
    dispatch,
    number,
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
    />
  );
}

NumberKey.propTypes = {
  dispatch: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
}

export default NumberKey;
