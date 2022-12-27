import styled from 'styled-components';
import ellipseImg from '../../../images/ellipse.svg';
import rectangleImg from '../../../images/rectangle.svg';

export const Div = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: ${p => p.theme.space[10]}%;
    left: ${p => p.theme.space[10]}%;
    transform: translate(-50%, -50%);
    z-index: ${p => p.theme.zIndices[1]};
    background-image: url(${ellipseImg});
    width: ${p => p.theme.sizes[9]}px;
    height: ${p => p.theme.sizes[9]}px;
  }

  &:after {
    content: '';
    position: absolute;
    background-image: url(${rectangleImg});
    width: ${p => p.theme.sizes[13]}px;
    height: ${p => p.theme.sizes[1]}px;
  }
`;
