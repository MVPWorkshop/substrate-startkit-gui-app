import React from 'react';
import { IDependencyListProps } from './dependencyList.types';
import styles from './dependencyList.module.scss';
import Typography from '../Typography/typography';
import { EColor } from '../../../shared/types/styles.types';
import { classes } from '../../../shared/utils/styles.util';

const DependencyList: React.FC<IDependencyListProps> = (props) => {

  const {
    label,
    dependencies
  } = props;

  return (
    <div className={classes(styles.dependencyList, props.className)}>
      <Typography
        className='font-weight-bold'
        fontSize={12}
        color={EColor.GRAY_DARK}
        uppercase={true}
      >
        {label}
      </Typography>
      {
        dependencies.map(dependency => (
          <div className={styles.dependencyBox} key={dependency}>
            {dependency}
          </div>
        ))
      }
    </div>
  )
}

export default DependencyList;
