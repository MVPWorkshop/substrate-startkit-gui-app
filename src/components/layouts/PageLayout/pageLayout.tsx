import { Container } from 'react-bootstrap';
import React from 'react';
import styles from './pageLayout.module.scss';
import { classes } from '../../../shared/utils/styles.util';
import { IPageLayoutProps } from './pageLayout.types';

const PageLayout: React.FC<IPageLayoutProps>  = (props) => {

  const {
    fluid,
    children,
    className: propsClassName
  } = props;

  return (
    <Container
      fluid={fluid}
      className={classes(
        styles.pageLayout,
        propsClassName
      )}
    >
      {children}
    </Container>
  )
}

export default PageLayout;
