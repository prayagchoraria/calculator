import PropTypes from 'prop-types';
import Button from '../../library/button';
import {DARK, LIGHT, THEME_CHANGE} from '../../utils/constants';
import styled from "styled-components";

const ThemesButtonWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
`;

const ThemesButton = (
  {
    dispatch,
    theme,
  }
) => {
  const handleClick = (theme) => {
    dispatch({type: THEME_CHANGE, theme});
  }

  return (
    <ThemesButtonWrapper>
      <Button
        active={theme === LIGHT}
        label={'Light Theme'}
        onClick={() => handleClick(LIGHT)}
        width={120}
        theme={theme}
      />
      <Button
        active={theme === DARK}
        label={'Dark Theme'}
        onClick={() => handleClick(DARK)}
        width={120}
        theme={theme}
      />
    </ThemesButtonWrapper>
  );
}

ThemesButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default ThemesButton;

