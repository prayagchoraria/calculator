import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScientificModeButton from './ScientificModeButton';

const MenuWrapper = styled.div`
  border: 1px solid #000000;
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
  }
) => (
  <MenuWrapper>
    <ScientificModeButton
      dispatch={dispatch}
      scientificMode={scientificMode}
    />
  </MenuWrapper>
);

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scientificMode: PropTypes.bool.isRequired,
}

export default Menu;
