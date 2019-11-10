import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

const RingChild = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border-width: 6px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${({ theme }) => theme.palette.blue.main} transparent transparent transparent;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export {
  Ring,
  RingChild,
};
