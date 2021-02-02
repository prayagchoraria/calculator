import styled from 'styled-components';
import PropTypes from 'prop-types';
import themes from "../../utils/themes";

const StyledKey = styled.div`
  align-items: center;
  background: ${props => themes[props.theme].buttonBackground};
  border: 1px solid ${props => themes[props.theme].font};
  box-sizing: border-box;
  color: ${props => themes[props.theme].font};
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
    theme,
  }
) => (
  <StyledKey
    height={height}
    justifyContent={justifyContent}
    onClick={onClick}
    width={width}
    theme={theme}
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
  theme: PropTypes.string.isRequired,
}

export default Key;
