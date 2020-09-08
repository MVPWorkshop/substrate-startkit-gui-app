import { DynamicObject } from '../../shared/types/util.types';
import { IPalletResponse } from '../../services/pallets/palletsService.types';
import { EPallets } from '../../shared/types/pallets.types';
import { ReduxAction } from '../redux.types';

// Actions
export enum EPalletsReduxActions {
  SET_PALLET = 'SET_PALLET',
  SET_ALL_PALLETS = 'SET_ALL_PALLETS',
  FETCH_PALLET = 'FETCH_PALLET',
  FETCH_ALL_PALLETS = 'FETCH_ALL_PALLETS'
}

export type SetPalletAction = ReduxAction<EPalletsReduxActions.SET_PALLET, {
  palletName: EPallets;
  pallet: IPalletResponse;
}>;

export type SetAllPalletsAction = ReduxAction<EPalletsReduxActions.SET_ALL_PALLETS, {
  pallets: IPalletResponse[];
}>;

export type PalletReduxActions =
  SetPalletAction |
  SetAllPalletsAction;

// Reducer
export type PalletReduxReducerState = DynamicObject<IPalletResponse, EPallets>;
