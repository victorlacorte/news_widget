import { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button.attrs((props) => ({
  // type: props.type || 'button',
  disabled: props.disabled || false,
  color: props.color || 'blue',
}))`
  box-sizing: border-box;
  min-height: 40px;
  padding: 0px 32px;
  border: none;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: white;

  ${({ theme }) => theme.breakpoints.down('sm')`
    width: 100%;
  `}

  ${({ theme }) => css`
    ${theme.typography.button};
  `}

  ${({ disabled, color }) => !disabled && css`
    background-color: ${({ theme }) => theme.palette[color].main};

    :hover {
      background-color: ${({ theme }) => theme.palette[color].dark};
    }
  `}

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    cursor: default;
    background-color: ${({ theme }) => theme.palette.grey.dark};
  `}
`;

StyledButton.propTypes = {
  // type: PropTypes.oneOf(['button', 'submit']),

  disabled: PropTypes.bool,

  color: PropTypes.oneOf(['blue', 'black', 'grey']),
};

export default memo(StyledButton);
