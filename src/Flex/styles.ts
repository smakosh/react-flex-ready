import styled from 'styled-components';
import { FlexProps } from '../interfaces';

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: ${({ align }) => align || 'center'};

  &:after {
    content: '';
    max-width: ${({ col, gap = 1 }) =>
      col && col < 12 ? `${(100 * col) / 12 - gap}%` : '100%'};
    width: 100%;

    @media (max-width: 960px) {
      max-width: ${({ colTablet, gapTablet = 1 }) =>
        colTablet && colTablet < 12
          ? `${(100 * colTablet) / 12 - gapTablet}%`
          : '100%'};
    }

    @media (max-width: 680px) {
      max-width: ${({ colMobile, gapMobile = 1 }) =>
        colMobile && colMobile < 12
          ? `${(100 * colMobile) / 12 - gapMobile}%`
          : '100%'};
    }
  }
`;
