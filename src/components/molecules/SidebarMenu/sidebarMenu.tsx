import React, { useRef } from 'react';
import styles from './sidebarMenu.module.scss';
import { ISidebarMenuProps } from './sidebarMenu.types';
import Loader from '../../atoms/Loader/loader';

const SidebarMenu: React.FC<ISidebarMenuProps> = (props) => {

  const menuRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleClickOutside = (ev: MouseEvent) => {
  //     if(!menuRef || !menuRef.current)
  //       return;
  //
  //     if(!menuRef.current.contains(ev.target as Node)){
  //       props.closeMenu()
  //     }
  //   };
  //
  //   document.addEventListener('mousedown', handleClickOutside);
  //
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }
  // }, [props]);

  return (
    <div className={styles.sidebarAbsoluteContainer}>
      <div
        className={styles.sidebarMenu}
        style={props.style}
        ref={menuRef}
      >
        {props.loading ?
          <div className='h-100 w-100 d-flex align-items-center justify-content-center'>
            <Loader />
          </div> :
          props.children
        }
      </div>
    </div>
  )
}

export default SidebarMenu;
