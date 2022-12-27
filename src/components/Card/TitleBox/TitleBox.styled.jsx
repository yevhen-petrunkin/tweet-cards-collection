import styled, { keyframes } from 'styled-components';
import img from '../../../images/camera.svg';

const flycamera = keyframes`{
  55% {
    transform: skewY(25deg) scaleY(1.2) rotate(10deg);
  }

  65% {
    transform: skewX(0deg) scaleY(1);
  }
}`;

export const Div = styled.div`
  &:after {
    content: '';
    position: absolute;
    left: ${p => p.theme.space[20]}px;
    background-image: url(${img});
    width: ${p => p.theme.sizes[2]}px;
    height: ${p => p.theme.sizes[5]}px;
    animation: ${flycamera} cubic-bezier(0.4, 0, 0.2, 1) 3000ms infinite;
  }
`;
