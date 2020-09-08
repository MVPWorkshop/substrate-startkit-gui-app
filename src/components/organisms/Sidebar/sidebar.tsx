import React, { Fragment, useState } from 'react';
import { ReactComponent as SubstrateLogoSvg } from '../../../shared/assets/substrate_logo.svg';
import { ReactComponent as TemplatesIconSvg } from '../../../shared/assets/templates_icon.svg';
import { ReactComponent as PalletsIconSvg } from '../../../shared/assets/pallets_icon.svg';
import styles from './sidebar.module.scss';
import { ESidebarMenus } from './sidebar.types';
import SidebarIcon from '../../atoms/SidebarIcon/sidebarIcon';
import SidebarPalletsMenu from '../SidebarPalletsMenu/sidebarPalletsMenu';
import { useAnchor } from '../../../shared/hooks/anchor.hook';
import SideBarTemplatesMenu from '../SidebarTemplatesMenu/sidebarTemplatesMenu';

const Sidebar: React.FC = () => {

  const [selectedMenu, setSelectedMenu] = useState<ESidebarMenus | undefined>();

  const toggleMenu = (menu: ESidebarMenus) => {
    setSelectedMenu(prevState => {
      console.log(prevState)
      if (prevState === menu) {
        return undefined;
      } else {
        return menu;
      }
    });
  }

  const [anchorDimensions, sidebarRef] = useAnchor();

  return (
    <Fragment>
      <div className={styles.sidebar} ref={sidebarRef}>
        <SubstrateLogoSvg className={styles.logoIcon}/>
        <div className={styles.menuIconsArea}>
          <SidebarIcon
            onClick={toggleMenu}
            menu={ESidebarMenus.PALLETS_MENU}
            menuTitle={'pallets'}
            menuIcon={PalletsIconSvg}
            isSelected={selectedMenu === ESidebarMenus.PALLETS_MENU}
          />

          <SidebarIcon
            onClick={toggleMenu}
            menu={ESidebarMenus.TEMPLATES_MENU}
            menuTitle={'templates'}
            menuIcon={TemplatesIconSvg}
            isSelected={selectedMenu === ESidebarMenus.TEMPLATES_MENU}
          />
        </div>
        <div/>
      </div>

      { selectedMenu === ESidebarMenus.PALLETS_MENU &&
        <SidebarPalletsMenu
          style={{left: anchorDimensions?.width}}
          closeMenu={() => setSelectedMenu(undefined)}
        />
      }
      { selectedMenu === ESidebarMenus.TEMPLATES_MENU &&
        <SideBarTemplatesMenu
          style={{left: anchorDimensions?.width}}
          closeMenu={() => setSelectedMenu(undefined)}
        />
      }
    </Fragment>
  )
}

export default Sidebar;
