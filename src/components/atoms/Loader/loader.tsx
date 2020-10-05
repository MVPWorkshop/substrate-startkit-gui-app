import React from 'react';
import { ReactComponent as LoaderSvg } from '../../../shared/assets/loader.svg';
import styles from './loader.module.scss'
import { IWithClass } from '../../../shared/types/common.types';
import { classes } from '../../../shared/utils/styles.util';

const Loader: React.FC<IWithClass> = (props) => {
  return (
    <LoaderSvg className={classes(
      styles.loader,
      props.className
    )} />
  )
}

export default Loader;
