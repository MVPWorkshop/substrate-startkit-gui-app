import React from 'react';
import styles from './successIcon.module.scss';
import { ReactComponent as DoneIconSvg } from '../../../shared/assets/done_icon.svg';
import { IWithClass } from '../../../shared/types/common.types';
import { classes } from '../../../shared/utils/styles.util';

const SuccessIcon: React.FC<IWithClass> = (props) => {
  return (
    <div className={classes(styles.successIcon, props.className)}>
      <DoneIconSvg/>
    </div>
  )
}

export default SuccessIcon;
