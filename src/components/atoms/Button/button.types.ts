import React from 'react';
import { ButtonProps } from 'react-bootstrap';

export interface IButtonProps extends ButtonProps {
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  uppercase?: boolean;
  loading?: boolean;
}
