import { HTMLAttributes, Component } from 'react';

export interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  gabTablet?: number;
  gapMobile?: number;
  col?: number;
  colTablet?: number;
  colMobile?: number;
  marginBottom?: number;
  stretch?: boolean;
  as?: string | Component;
  className?: string;
  style?: object;
}

export interface FlexProps {
  gap?: number;
  gabTablet?: number;
  gapMobile?: number;
  align?: string;
  justifyContent?: string;
  col?: number;
  colTablet?: number;
  colMobile?: number;
  className?: string;
  style?: object;
}
