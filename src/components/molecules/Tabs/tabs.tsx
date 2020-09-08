import React, { isValidElement, useState } from 'react';
import Tab from '../../atoms/Tab/tab';
import TabPanel from '../../atoms/TabPanel/tabPanel';
import { ITabProps } from '../../atoms/Tab/tab.types';
import { ITabsProps } from './tabs.types';
import { ITabPanelProps } from '../../atoms/TabPanel/tabPanel.types';

const Tabs: React.FC<ITabsProps> = (props) =>{

  const [selectedTab, setSelectedTab] = useState(props.defaultSelectedTab);

  return (
    <div>
      <div className='d-flex overflow-auto'>
        {React.Children.map(props.children, child => {
          if (isValidElement(child) && child.type === Tab) {
            return React.cloneElement<ITabProps>(child, {
              ...child.props,
              className: 'flex-grow-1',
              selectedName: selectedTab,
              onClick: setSelectedTab
            });
          }

          return null;
        })}
      </div>
      <div>
        {React.Children.map(props.children, child => {
          if (isValidElement(child) && child.type === TabPanel) {
            return React.cloneElement<ITabPanelProps>(child, {
              ...child.props,
              selectedName: selectedTab
            });
          }

          return null;
        })}
      </div>
    </div>
  )
}

export default Tabs;
