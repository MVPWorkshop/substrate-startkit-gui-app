import React, { useState } from 'react';
import { ISidebarPalletsMenuProps } from '../SidebarPalletsMenu/sidebarPalletsMenu.types';
import SidebarMenu from '../../molecules/SidebarMenu/sidebarMenu';
import SearchBar from '../../atoms/SearchBar/searchBar';
import TemplatePreview from '../../molecules/TemplatePreview/templatePreview';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { ITemplateResponse } from '../../../services/templates/templatesService.types';
import { DynamicObject } from '../../../shared/types/util.types';
import { createLoadingSelector } from '../../../redux/loading/loading.redux.reducer';
import { ETemplatesReduxActions } from '../../../redux/templates/templates.redux.types';
import CONFIG from '../../../shared/constants/config.constants';
import RequestLinkBox from '../../atoms/RequestLinkBox/requestLinkBox';

const SideBarTemplatesMenu: React.FC<ISidebarPalletsMenuProps> = (props) => {

  const [searchValue, setSearchValue] = useState<string>('');

  const templates = useSelector<RootState, DynamicObject<ITemplateResponse>>(state => state.templates);
  const isFetchingTemplates = useSelector<RootState, boolean>(
    state => createLoadingSelector([
      ETemplatesReduxActions.FETCH_ALL_TEMPLATES,
      ETemplatesReduxActions.FETCH_TEMPLATE
    ])(state)
  )

  const renderTemplates = () => {
    return Object.keys(templates).map(key => {
      const template = templates[key]!;
      let shouldFilter = false;

      if (searchValue) {
        if (template.name.toLowerCase().search(searchValue.toLowerCase()) === -1) {
          shouldFilter = true;
        }
      }

      return shouldFilter ? null :
        <div className='mb-4' key={template.name}>
          <TemplatePreview template={template} />
        </div>
    })
  }

  return (
    <SidebarMenu {...props} loading={isFetchingTemplates}>
      <div className='mb-6'>
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          placeholder='Search templates'
        />
      </div>
      {renderTemplates()}
      <RequestLinkBox
        link={`mailto:${CONFIG.FEATURE_REQUEST_MAIL}?subject=Template request`}
        requestName='Request a template'
        shortDescription='Not finding the package for your use case? Submit a request for new template'
      />
    </SidebarMenu>
  )
};

export default SideBarTemplatesMenu;
