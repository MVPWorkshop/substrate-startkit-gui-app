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
  let tertiaryClassName: string | undefined;

  // If tertiary variant (not native to bootstrap) add the class manually
  if (theme === 'tertiary') {
    tertiaryClassName = ' btn-tertiary';
  } else if (theme === 'outline-tertiary') {
    tertiaryClassName = 'btn-tertiary-outline';
  } else {
    variant = theme;
  }

  const btnClassName = classes(
    styles.appButton,
    className,
    disabled && 'disabledElement',
    uppercase && styles.uppercase,
    tertiaryClassName
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
        <>
          <Spinner animation={'border'}/>
          <span>Please wait</span>
        </>
        :
        children
      }
      </span>
    </BTButton>
  )
};

export default Button;
