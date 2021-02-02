import PropTypes from 'prop-types';
import Key from '../../../library/key';
import {CALCULATE} from '../../../utils/constants';
import ScientificOperatorsKeypad from "../ScientificOperatorsKeypad";


const OperatorKey = (
  {
    dispatch,
    label,
    operationType,
    theme,
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
      theme={theme}
    />
  );
}

OperatorKey.propTypes = {
  dispatch: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  operationType: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

export default OperatorKey;
