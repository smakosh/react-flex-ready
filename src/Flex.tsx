import * as React from 'react';
import styled from 'styled-components';
import { FlexProps } from './interfaces';
import Item from './Item';

const StyledFlex = styled.div<Omit<FlexProps, 'total'>>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  flex-wrap: wrap;
  align-items: ${({ align }) => align || 'center'};

  &:after {
    content: '';
    max-width: ${({ col, gap = 1 }) =>
      col && col < 12 ? `${(100 * col) / 12 - gap}%` : '100%'};
    width: 100%;

    @media (max-width: 960px) {
      max-width: ${({ colTablet, gabTablet = 1 }) =>
        colTablet && colTablet < 12
          ? `${(100 * colTablet) / 12 - gabTablet}%`
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

const Flex: React.FC<FlexProps> = ({
  children,
  col,
  colTablet,
  colMobile,
  gap,
  gabTablet,
  gapMobile,
  align,
  justifyContent,
  className,
  style,
}) => (
  <StyledFlex
    col={col}
    colTablet={colTablet}
    colMobile={colMobile}
    gap={gap}
    gabTablet={gabTablet}
    gapMobile={gapMobile}
    align={align}
    justifyContent={justifyContent}
    className={className}
    style={style}
  >
    {children}
    <Item col={col} colTablet={colTablet} colMobile={colMobile} />
  </StyledFlex>
);

export default Flex;
