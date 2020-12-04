export enum ESidebarMenus {
  PALLETS_MENU = 'PALLETS_MENU',
  TEMPLATES_MENU = 'TEMPLATES_MENU'
}

export interface ISidebarProps {
  onMenuChange: (selectedMenu?: ESidebarMenus) => void;
}
