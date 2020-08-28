import React from 'react';
import { ILandingBackgroundProps } from './landingBackground.types';
import styles from './landingBackgroud.module.scss';
import { classes } from '../../../shared/utils/styles.util';
import { ReactComponent as BackgroundSvg } from '../../../shared/assets/background.svg';

const LandingBackground: React.FC<ILandingBackgroundProps> = (props) => {
  return (
    <div className={styles.landingBackground}>
      <div className={classes(
        styles.boxSvg,
        props.hover ? styles.active : '',
      )}>
        <BackgroundSvg height='100vw' width='100vw'/>
      </div>
    </div>
  )
}

export default LandingBackground;
