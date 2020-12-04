import {
  EModalName,
  EUiReduxActions,
  SetSelectedPallet,
  SetSelectedTemplate,
  ToggleModalAction
} from './ui.redux.types';
import { EPallets } from '../../shared/types/pallets.types';
import { Thunk } from '../redux.types';

export function toggleModal(modalName: EModalName, modalState: boolean): ToggleModalAction {
  return {
    type: EUiReduxActions.TOGGLE_MODAL,
    payload: {
      name: modalName,
      state: modalState
    }
  }
}

export function setSelectedPallet(palletName?: EPallets): SetSelectedPallet {
  return {
    type: EUiReduxActions.SET_SELECTED_PALLET,
    payload: {
      palletName
    }
  }
}

export function setSelectedTemplate(templateId?: string): SetSelectedTemplate {
  return {
    type: EUiReduxActions.SET_SELECTED_TEMPLATE,
    payload: {
      templateId
    }
  }
}

export function togglePalletDetailsModal(palletName: EPallets, modalState: boolean): Thunk<void> {
  return dispatch => {
    // If closing modal set selected pallet to undefined
    dispatch(setSelectedPallet(modalState === true ? palletName : undefined));
    dispatch(toggleModal(EModalName.PALLET_DETAILS, modalState));
  }
}

export function toggleTemplateDetailsModal(templateId: string, modalState: boolean): Thunk<void> {
  return dispatch => {
    // If closing modal set selected template to undefined
    dispatch(setSelectedTemplate(modalState === true ? templateId : undefined));
    dispatch(toggleModal(EModalName.TEMPLATE_DETAILS, modalState));
  }
}
