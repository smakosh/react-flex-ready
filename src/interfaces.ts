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

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  gap?: number;
  gabTablet?: number;
  gapMobile?: number;
  align?: string;
  justifyContent?: string;
  col?: number;
  colTablet?: number;
  colMobile?: number;
  as?: string | Component;
  className?: string;
  style?: object;
}
