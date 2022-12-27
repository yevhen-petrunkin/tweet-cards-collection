import styled from 'styled-components';

export const Div = styled.div`
  padding-top: ${p => p.theme.space[16]}px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights[1]}px;
  text-align: center;
  text-transform: uppercase;
`;
