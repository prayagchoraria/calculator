import PropTypes from 'prop-types';
import Key from '../../../library/key';
import ScientificOperatorsKeypad from "../ScientificOperatorsKeypad";

const ActionKey = (
  {
    action,
    dispatch,
    label,
    theme,
  }
) => {
  const handleClick = () => {
    dispatch({type: action});
  }

  return (
    <Key
      height={60}
      justifyContent={'center'}
      label={label}
      onClick={handleClick}
      width={120}
      theme={theme}
    />
  );
}

ActionKey.propTypes = {
  action: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

export default ActionKey;
