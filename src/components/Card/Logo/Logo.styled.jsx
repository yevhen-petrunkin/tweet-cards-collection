import styled from 'styled-components';

export const Img = styled.img`
  position: absolute;
  top: ${p => p.theme.space[6]}px;
  left: ${p => p.theme.space[6]}px;
  width: ${p => p.theme.sizes[8]}px;
  display: block;
`;
