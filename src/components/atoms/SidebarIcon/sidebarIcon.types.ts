import { ESidebarMenus } from '../../organisms/Sidebar/sidebar.types';
import React from 'react';

export interface ISidebarIconProps {
  onClick: (menuItem: ESidebarMenus) => void;
  menu: ESidebarMenus;
  menuTitle: string;
  menuIcon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  isSelected: boolean;
}
