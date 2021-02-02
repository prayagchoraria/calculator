import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.div`
  align-items: center;
  background: ${props => props.active ? '#909090' : '#f0f0f0'};
  border: 2px solid #000000;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 40px;
  justify-content: center;
  padding: 5px;
  width: ${props => props.width}px;

  ${props => !props.active ? `&:hover {
    background: #d0d0d0;
  }`: ''}
`;

const Button = (
  {
    active,
    label,
    onClick,
    width,
  }
) => (
  <StyledButton
    active={active}
    onClick={onClick}
    width={width}
  >
    {label}
  </StyledButton>
);

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
}

export default Button;
