import React, { Fragment } from 'react';
import { ITabPanelProps } from './tabPanel.types';

const TabPanel: React.FC<ITabPanelProps> = (props) => {

  const {
    selectedName,
    name,
    children
  } = props;

  if (selectedName === name) {
    return (
      <Fragment>
        {children}
      </Fragment>
    );
  } else {
    return null;
  }
}

export default TabPanel;
