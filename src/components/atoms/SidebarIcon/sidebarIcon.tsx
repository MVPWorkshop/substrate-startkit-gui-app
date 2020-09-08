import React from 'react';
import styles from './sidebarIcon.module.scss'
import { ISidebarIconProps } from './sidebarIcon.types';
import { classes } from '../../../shared/utils/styles.util';

const SidebarIcon: React.FC<ISidebarIconProps> = (props) => {

  const {
    menu,
    menuTitle,
    menuIcon: Icon,
    isSelected
  } = props;

  const onClick = () => {
    props.onClick(menu);
  }

  return (
    <button
      onClick={onClick}
      className={classes(
        styles.sidebarIcon,
        isSelected && styles.selected
      )}
    >
      <div className={styles.activeIndicator}/>
      <div className={styles.iconContainer}>
        <Icon className={styles.icon}/>
        <div className={styles.title}>
          {menuTitle}
        </div>
      </div>
    </button>
  )
}

export default SidebarIcon;
