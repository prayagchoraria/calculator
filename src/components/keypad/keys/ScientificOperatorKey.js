import PropTypes from 'prop-types';
import Key from '../../../library/key';
import {CALCULATE_SCIENTIFIC} from '../../../utils/constants';
import Menu from "../../menu";

const ScientificOperatorKey = (
  {
    dispatch,
    label,
    operationType,
    theme,
  }
) => {
  const handleClick = () => {
    dispatch({type: CALCULATE_SCIENTIFIC, operationType});
  }

  return (
    <Key
      height={80}
      justifyContent={'center'}
      label={label}
      onClick={handleClick}
      width={160}
      theme={theme}
    />
  );
}

ScientificOperatorKey.propTypes = {
  dispatch: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  operationType: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

export default ScientificOperatorKey;
