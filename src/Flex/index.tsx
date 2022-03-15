import * as React from 'react';
import { FlexProps } from '../interfaces';
import Item from '../Item';
import { StyledFlex } from './styles';

const Flex: React.FC<FlexProps> = ({
  children,
  col = 12,
  colTablet,
  colMobile,
  gap,
  gapTablet,
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
    gapTablet={gapTablet}
    gapMobile={gapMobile}
    align={align}
    justifyContent={justifyContent}
    className={className}
    style={style}
  >
    {children}
    <Item
      col={col}
      colTablet={colTablet}
      colMobile={colMobile}
      gap={gap}
      gapTablet={gapTablet}
      gapMobile={gapMobile}
    />
  </StyledFlex>
);

export default Flex;
