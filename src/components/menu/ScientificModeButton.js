import PropTypes from 'prop-types';
import Button from '../../library/button';
import {SCIENTIFIC_MODE} from '../../utils/constants';
import Key from "../../library/key";

const ScientificModeButton = (
  {
    dispatch,
    scientificMode,
    theme,
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
      theme={theme}
    />
  );
}

ScientificModeButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scientificMode: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
}

export default ScientificModeButton;
