import styled, { keyframes } from 'styled-components';
import dotsImg from '../../../images/dots.svg';
import heartImg from '../../../images/heart.svg';

const flydots = keyframes`{
  55% {
    transform: skewX(-25deg) scaleY(1.2) rotate(10deg);
  }

  65% {
    transform: skewX(0deg) scaleY(1);
  }
}`;

const heartbeat = keyframes`{
  55% {
    transform: scale(1.3) rotate(-30deg);
  }
  65% {
    transform: scale(0.7);
  }
  80% {
    transform: scale(1);
  }
}`;

export const Div = styled.div`
  position: relative;
  padding-bottom: ${p => p.theme.space[11]}px;

  &:before {
    content: '';
    position: absolute;
    top: ${p => p.theme.space[17]}px;
    left: ${p => p.theme.space[12]}px;
    background-image: url(${dotsImg});
    width: ${p => p.theme.sizes[6]}px;
    height: ${p => p.theme.sizes[6]}px;
    animation: ${flydots} cubic-bezier(0.4, 0, 0.2, 1) 3000ms infinite;
  }

  &:after {
    content: '';
    position: absolute;
    top: ${p => p.theme.space[18]}px;
    left: ${p => p.theme.space[19]}px;
    background-image: url(${heartImg});
    width: ${p => p.theme.sizes[3]}px;
    height: ${p => p.theme.sizes[4]}px;
    animation: ${heartbeat} cubic-bezier(0.4, 0, 0.2, 1) 3000ms infinite;
  }
`;
