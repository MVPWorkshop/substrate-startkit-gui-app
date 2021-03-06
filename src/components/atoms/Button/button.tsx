import React, { FC } from 'react';
import { Button as BTButton, ButtonProps, Spinner } from 'react-bootstrap';
import { IButtonProps } from './button.types';
import styles from './button.module.scss';
import { classes } from '../../../shared/utils/styles.util';

const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    onClick,
    disabled,
    uppercase,
    loading,
    theme,
    ...other
  } = props;

  let variant: string | undefined;
  let customTheme: string | undefined;

  // If tertiary variant (not native to bootstrap) add the class manually
  if (theme === 'tertiary') {
    customTheme = ' btn-tertiary';
  } else if (theme === 'outline-tertiary') {
    customTheme = 'btn-tertiary-outline';
  } else if (theme === 'flat') {
    customTheme = 'btn-flat';
  } else {
    variant = theme;
  }

  const btnClassName = classes(
    styles.appButton,
    className,
    disabled && 'disabledElement',
    uppercase && styles.uppercase,
    customTheme,
    props.flat && styles.flat
  );

  return (
    <BTButton
      className={btnClassName}
      onClick={onClick}
      disabled={disabled || !!loading}
      variant={variant as ButtonProps['variant']}
      {...other}
    >
      <span>
      {loading ?
        <div className='d-flex align-items-center justify-content-center'>
          <Spinner animation={'border'}/>
          <span className='ml-1'>Please wait</span>
        </div>
        :
        children
      }
      </span>
    </BTButton>
  )
};

export default Button;
