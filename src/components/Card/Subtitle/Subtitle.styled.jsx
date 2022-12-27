import styled from 'styled-components';

export const H2 = styled.h2`
  position: absolute;
  width: ${p => p.theme.sizes[0]}px;
  height: ${p => p.theme.sizes[0]}px;
  margin: ${p => p.theme.space[0]}px;
  border: ${p => p.theme.borders.visuallyHiddenBdr}px;
  padding: ${p => p.theme.space[1]}px;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
