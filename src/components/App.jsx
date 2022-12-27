import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import userData from '../data/userData';
import { Box } from './Box';
import { MainTitle } from './MainTitle/MainTitle';
import { CollectionList } from './CollectionList/CollectionList';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box width="998px" p="0 15px" ml="auto" mr="auto">
        <Box pt="60px" pb="60px">
          <MainTitle text="Heading" />
          <CollectionList users={userData} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
