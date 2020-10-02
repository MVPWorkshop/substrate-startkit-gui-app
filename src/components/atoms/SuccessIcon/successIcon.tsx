import React from 'react';
import styles from './successIcon.module.scss';
import { ReactComponent as DoneIconSvg } from '../../../shared/assets/done_icon.svg';

const SuccessIcon = () => {
  return (
    <div className={styles.successIcon}>
      <DoneIconSvg/>
    </div>
  )
}

export default SuccessIcon;
