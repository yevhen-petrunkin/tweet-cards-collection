import styled from 'styled-components';

export const Article = styled.article`
  position: relative;
  padding-top: ${p => p.theme.space[8]}px;
  padding-bottom: ${p => p.theme.space[9]}px;
  width: ${p => p.theme.sizes[13]}px;
  color: ${p => p.theme.colors.primaryColor};
  font-family: ${p => p.theme.fonts.fontFamily};
  background-image: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: ${p => p.theme.shadows.cardShdw};
  border-radius: ${p => p.theme.radii[1]}px;
`;
