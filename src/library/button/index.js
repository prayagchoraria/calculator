import styled from 'styled-components';
import PropTypes from 'prop-types';
import themes from "../../utils/themes";

const StyledButton = styled.div`
  align-items: center;
  background: ${props => props.active ? '#a1a1a1' : themes[props.theme].buttonBackground};
  border: 2px solid ${props => themes[props.theme].font};;
  box-sizing: border-box;
  color: ${props => themes[props.theme].font};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 40px;
  justify-content: center;
  padding: 5px;
  width: ${props => props.width}px;

  ${props => !props.active ? `&:hover {
    background: #d0d0d0;
  }` : ''}
`;

const Button = (
  {
    active,
    label,
    onClick,
    width,
    theme,
  }
) => (
  <StyledButton
    active={active}
    onClick={onClick}
    width={width}
    theme={theme}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

export default Button;
