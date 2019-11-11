import styled, { css } from 'styled-components';

const Root = styled.div`
  // overflow-wrap: break-word;
  border-bottom: 2px solid ${({ theme }) => theme.palette.grey.dark};
  padding-bottom: 24px;
  margin-bottom: 24px;
`;

const LinkTitle = styled.a`
  ${({ theme }) => css`
    ${theme.typography.h2}
  `}

  color: ${({ theme }) => theme.palette.black.main};
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  margin-top: 24px;

  ${({ theme }) => theme.breakpoints.up('sm')`
    & > *:first-child {
      margin-right: 24px;
      align-items: center;
    }
  `}

  ${({ theme }) => theme.breakpoints.down('sm')`
    flex-direction: column;

    & > *:first-child {
      margin-bottom: 8px;
    }
  `}
`;

const PublishedAt = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body}
  `}

  color: ${({ theme }) => theme.palette.grey.dark};
`;

const SourceName = styled.div`
  ${({ theme }) => css`
    ${theme.typography.body}
  `}

  color: white;
  background-color: ${({ theme }) => theme.palette.grey.main};
  padding: 4px 36px;
  border-radius: 4px;
  width: fit-content;
  text-align: center;
`;

export {
  Root,
  LinkTitle,
  Container,
  PublishedAt,
  SourceName,
};
