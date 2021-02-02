import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledKey = styled.div`
  align-items: center;
  background: #f0f0f0;
  border: 1px solid #000000;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  height: ${props => props.height}px;
  justify-content: ${props => props.justifyContent};
  padding: 5px;
  width: ${props => props.width}px;

  &:hover {
    background: #d0d0d0;
  }
`;

const Key = (
  {
    height,
    justifyContent,
    label,
    onClick,
    width,
  }
) => (
  <StyledKey
    height={height}
    justifyContent={justifyContent}
    onClick={onClick}
    width={width}
  >
    {label}
  </StyledKey>
);

Key.propTypes = {
  height: PropTypes.number.isRequired,
  justifyContent: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
}

export default Key;
