import styled, { keyframes } from 'styled-components';

const btnvibe = keyframes`{
  55% {
    transform: scale(1.01);
  }
  65% {
    transform: scale(0.97);
  }
  80% {
    transform: scale(1);
  }
}`;

const btnhover = keyframes`{
  25% {
    color: #ebd8ff;
    border-bottom-color: #ebd8ff;
  }
  50% {
    border-right-color: #ebd8ff;
  }
  75% {
    border-top-color: #ebd8ff;
  }
  100% {
    border-left-color: #ebd8ff;
  }
}`;

export const Button = styled.button`
  margin: ${p => p.theme.space[1]}px;
  padding: ${p => p.theme.space[4]}px;
  width: ${p => p.theme.sizes[12]}px;
  box-sizing: border-box;
  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights[0]}px;
  text-transform: inherit;
  color: ${p => p.theme.colors.secondaryColor};
  background-color: ${p => p.theme.colors.primaryColor};
  box-shadow: ${p => p.theme.shadows.cardBtnShdw};
  border-radius: ${p => p.theme.radii[0]}px;
  border: none;
  cursor: pointer;
  animation: ${btnvibe} cubic-bezier(0.4, 0, 0.2, 1) 3000ms infinite;
  transition: color linear 300ms, background-color linear 400ms;

  &:hover,
  &:active {
    padding: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.btnHoverBdr};
    background-color: ${p => p.theme.colors.accentColor};
    animation: ${btnhover} linear 1200ms 1;
  }
`;
