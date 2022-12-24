import './fonts.css';

export const theme = {
  space: [
    -1, 0, 11, 15, 16, 20, 24, 32, 38, 48, 50, 51, 60, 61, 66, 74, 136, 139,
    334, 370,
  ],
  colors: {
    primaryColor: '#ebd8ff',
    secondaryColor: '#373737',
    accentColor: '#5cd3a8',
  },
  fonts: { fontFamily: "'Montserrat', sans-serif" },
  fontSizes: [20, 24],
  fontWeights: [500, 600],
  lineHeights: [24, 29],
  sizes: [1, 8, 39, 42, 43, 47, 53, 72, 88, 92, 100, 162, 226, 454, 998],
  borders: {
    visuallyHiddenBdr: 0,
    btnHoverBdr: `5px solid ${this.colors.accentColor}`,
  },
  radii: [12, 24, 100],
  zIndices: [2, 3],
  shadows: {
    cardShdw: '-3px 8px 24px rgba(0, 0, 0, 0.23)',
    cardBtnShdw: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
};
