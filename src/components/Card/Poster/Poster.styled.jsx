import styled, { keyframes } from 'styled-components';

const postervibe = keyframes`{
  55% {
    transform: scale(1.02);
  }
  65% {
    transform: scale(0.97);
  }
  80% {
    transform: scale(1);
  }
}`;

export const Img = styled.img`
  margin: ${p => p.theme.space[1]} auto;
  width: ${p => p.theme.sizes[12]}px;
  height: ${p => p.theme.sizes[11]}px;
  animation: ${postervibe} cubic-bezier(0.4, 0, 0.2, 1) 3000ms infinite;
  display: block;
`;
