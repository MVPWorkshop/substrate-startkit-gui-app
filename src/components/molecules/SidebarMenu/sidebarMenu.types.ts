import React from 'react';

export interface ISidebarMenuProps {
  style?: React.CSSProperties;
  closeMenu: () => void;
  loading?: boolean;
}
