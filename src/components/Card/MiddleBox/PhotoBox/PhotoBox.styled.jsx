import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  z-index: ${p => p.theme.zIndices[0]};
  top: ${p => p.theme.space[10]}%;
  left: ${p => p.theme.space[10]}%;
  transform: translate(-50%, -50%);
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: ${p => p.theme.radii[2]}px;
  overflow: hidden;
`;
