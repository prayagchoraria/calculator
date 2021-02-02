import PropTypes from 'prop-types';
import Button from '../../library/button';
import {SCIENTIFIC_MODE} from '../../utils/constants';

const ScientificModeButton = (
  {
    dispatch,
    scientificMode,
  }
) => {
  const handleClick = () => {
    dispatch({type: SCIENTIFIC_MODE});
  }

  return (
    <Button
      active={scientificMode}
      label={'Scientific Mode'}
      onClick={handleClick}
      width={180}
     />
  );
}

ScientificModeButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scientificMode: PropTypes.bool.isRequired,
}

export default ScientificModeButton;
