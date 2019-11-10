import styled, { css } from 'styled-components';

const SelectContainer = styled.div`
  position: relative;

  ${({ theme }) => css`
    ${theme.typography.body}
  `}

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${({ theme }) => theme.palette.blue.main};
    top: 8px;
  }
}
`;

const Select = styled.select`
  appearance: none;
  background-color: white;
  border: none;
  color: ${({ theme }) => theme.palette.grey.dark};

  &:focus {
    outline: none;
  }
`;

export {
  SelectContainer,
  Select,
};
