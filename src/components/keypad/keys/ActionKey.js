import PropTypes from 'prop-types';
import Key from '../../../library/key';

const ActionKey = (
  {
    action,
    dispatch,
    label,
  }
) => {
  const handleClick = () => {
    dispatch({type: action});
  }

  return (
    <Key
      justifyContent={'center'}
      label={label}
      onClick={handleClick}
      width={120}
    />
  );
}

ActionKey.propTypes = {
  action: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default ActionKey;
