import React from 'react';
import { ITabProps } from './tab.types';
import styles from './tab.module.scss';
import Typography from '../Typography/typography';
import { EColor } from '../../../shared/types/styles.types';
import { classes } from '../../../shared/utils/styles.util';

const Tab: React.FC<ITabProps> = (props) => {

  const {
    name,
    className,
    onClick,
    label,
    selectedName
  } = props;

  const selected = name === selectedName;

  const onTabSelect = () => {
    onClick && onClick(name);
  }

  return (
    <div className={classes(
      styles.tab,
      className
    )}>
      <button
        className={styles.labelBox}
        onClick={onTabSelect}
      >
        <Typography fontSize={14} color={EColor.WHITE} element='span'>
          {label}
        </Typography>
      </button>
      <div className={classes(
        styles.highlightBar,
        selected && styles.selected
      )}/>
    </div>
  )
}

export default Tab;
