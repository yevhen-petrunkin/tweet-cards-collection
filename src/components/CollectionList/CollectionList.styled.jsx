import styled from 'styled-components';

export const UL = styled.ul`
  padding: ${p => p.theme.space[1]}px;
  margin: ${p => p.theme.space[1]}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 60px;
  list-style: none;
`;
