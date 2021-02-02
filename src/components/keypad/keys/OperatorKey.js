import PropTypes from 'prop-types';
import Key from '../../../library/key';
import {CALCULATE} from '../../../utils/constants';

const OperatorKey = (
  {
    dispatch,
    label,
    operationType,
  }
) => {
  const handleClick = () => {
    dispatch({type: CALCULATE, operationType});
  }

  return (
    <Key
      height={60}
      justifyContent={'flex-end'}
      label={label}
      onClick={handleClick}
      width={140}
    />
  );
}

OperatorKey.propTypes = {
  dispatch: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  operationType: PropTypes.string.isRequired,
}

export default OperatorKey;
