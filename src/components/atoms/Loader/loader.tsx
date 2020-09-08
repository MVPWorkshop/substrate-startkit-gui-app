import React from 'react';
import { ReactComponent as LoaderSvg } from '../../../shared/assets/loader.svg';
import styles from './loader.module.scss'

const Loader: React.FC = () => {
  return (
    <LoaderSvg className={styles.loader} />
  )
}

export default Loader;
