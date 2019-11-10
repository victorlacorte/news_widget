import styled, { css } from 'styled-components';

import Button from 'components/Button';

const LoadingContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  margin-bottom: 72px;

  ${({ theme }) => theme.breakpoints.down('sm')`
    flex-direction: column;
    margin-bottom: 56px;

    & > *:first-child {
      margin-bottom: 40px;
    }
  `}

  ${({ theme }) => theme.breakpoints.up('sm')`
    justify-content: space-between;
    align-items: center;
  `}
`;

const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.typography.h1};
  `}

  color: ${({ theme }) => theme.palette.blue.main};

  border-bottom: 5px solid ${({ theme }) => theme.palette.blue.main};
`;

const StyledButton = styled(Button)`
    margin-top: 24px;
    margin-bottom: 48px;
`;

const ApiError = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body};
  `}

  color: red;
`;

const NewsApiText = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body};
  `}

  width: 100%;
  text-align: right;
  color: ${({ theme }) => theme.palette.black.main};
`;

export {
  LoadingContainer,
  Header,
  Title,
  StyledButton,
  ApiError,
  NewsApiText,
};
