// Actions
import { ReduxAction } from '../redux.types';
import { DynamicObject } from '../../shared/types/util.types';
import { EPallets } from '../../shared/types/pallets.types';

export enum EModalName {
  PALLET_DETAILS = 'PALLET_DETAILS',
  TEMPLATE_DETAILS = 'TEMPLATE_DETAILS'
}

export enum EUiReduxActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  SET_SELECTED_PALLET = 'SET_SELECTED_PALLET',
  SET_SELECTED_TEMPLATE = 'SET_SELECTED_TEMPLATE'
}

export type ToggleModalAction = ReduxAction<EUiReduxActions.TOGGLE_MODAL, {
  name: EModalName;
  state: boolean;
}>

export type SetSelectedPallet = ReduxAction<EUiReduxActions.SET_SELECTED_PALLET, {
  palletName?: EPallets;
}>

export type SetSelectedTemplate = ReduxAction<EUiReduxActions.SET_SELECTED_TEMPLATE, {
  templateId?: string;
}>

export type UiReduxActions =
  ToggleModalAction |
  SetSelectedPallet |
  SetSelectedTemplate;

// Reducer
export type UiReduxReducerState = {
  selectedPallet: EPallets | undefined;
  selectedTemplate: string | undefined;
  modals: DynamicObject<boolean, EModalName>;
};
