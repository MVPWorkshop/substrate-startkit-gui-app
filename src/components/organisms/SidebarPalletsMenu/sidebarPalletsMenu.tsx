import React, { useState } from 'react';
import SidebarMenu from '../../molecules/SidebarMenu/sidebarMenu';
import { ISidebarPalletsMenuProps } from './sidebarPalletsMenu.types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import SearchBar from '../../atoms/SearchBar/searchBar';
import { createLoadingSelector } from '../../../redux/loading/loading.redux.reducer';
import { EPalletsReduxActions } from '../../../redux/pallets/pallets.redux.types';
import { IPalletResponse } from '../../../services/pallets/palletsService.types';
import { DynamicObject } from '../../../shared/types/util.types';
import { EPalletCategories, EPallets } from '../../../shared/types/pallets.types';
import PalletCategorySelector from '../../molecules/PalletCategorySelector/palletCategorySelector';
import DraggablePalletPreviewDrag from '../../molecules/DraggablePalletPreview/Drag/draggablePalletPreview.drag';
import DraggablePalletPreviewIdle from '../../molecules/DraggablePalletPreview/Idle/draggablePalletPreview.idle';
import CONFIG from '../../../shared/constants/config.constants';
import RequestLinkBox from '../../atoms/RequestLinkBox/requestLinkBox';

const SidebarPalletsMenu: React.FC<ISidebarPalletsMenuProps> = (props) => {

  const [searchValue, setSearchValue] = useState<string>('');
  const [categoryValue, setCategoryValue] = useState<EPalletCategories | undefined>();

  const pallets = useSelector<RootState, DynamicObject<IPalletResponse, EPallets>>(state => state.pallets);
  const isFetchingPallets = useSelector<RootState, boolean>(
    state => createLoadingSelector([
      EPalletsReduxActions.FETCH_ALL_PALLETS,
      EPalletsReduxActions.FETCH_PALLET
    ])(state)
  )

  const renderPallets = () => {
    return Object.keys(pallets).map(key => {
      const pallet = pallets[key as EPallets]!;
      let shouldFilter = false;

      if (searchValue) {
        if (pallet.name.toLowerCase().search(searchValue.toLowerCase()) === -1) {
          shouldFilter = true;
        }
      }

      if (categoryValue) {
        if (!pallet.categories.some(category => category === categoryValue)) {
          shouldFilter = true;
        }
      }

      return shouldFilter ? null :
        <div className='mb-4' key={pallet.name}>
          <DraggablePalletPreviewDrag pallet={pallet}/>
          <DraggablePalletPreviewIdle pallet={pallet}/>
        </div>
    })
  }

  return (
    <SidebarMenu {...props} loading={isFetchingPallets}>
      <div className='mb-6'>
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          placeholder='Search pallets'
        />
      </div>

      <div className='mb-7'>
        <PalletCategorySelector
          value={categoryValue}
          onChange={setCategoryValue}
        />
      </div>

      <div>
        {renderPallets()}
        <RequestLinkBox
          link={`mailto:${CONFIG.FEATURE_REQUEST_MAIL}?subject=Pallet request`}
          requestName='Request a pallet'
          shortDescription={'Can\'t find your pallet in the store, submit a request to add it'}
        />
      </div>
    </SidebarMenu>
  )
};

export default SidebarPalletsMenu;
