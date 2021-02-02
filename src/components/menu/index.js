import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScientificModeButton from './ScientificModeButton';
import ThemesButton from "./ThemesButton";
import themes from "../../utils/themes";

const MenuWrapper = styled.div`
  border: 1px solid ${props => themes[props.theme].font};
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
`;

const Menu = (
  {
    dispatch,
    scientificMode,
    theme,
  }
) => (
  <MenuWrapper
    theme={theme}
  >
    <ScientificModeButton
      dispatch={dispatch}
      scientificMode={scientificMode}
      theme={theme}
    />

    <ThemesButton
      dispatch={dispatch}
      theme={theme}
    />
  </MenuWrapper>
);

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scientificMode: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
}

export default Menu;
