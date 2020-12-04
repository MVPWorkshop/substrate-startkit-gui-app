import { EPallets } from '../../shared/types/pallets.types';
import { IPalletResponse } from '../../services/pallets/palletsService.types';
import { EPalletsReduxActions, SetAllPalletsAction, SetPalletAction } from './pallets.redux.types';
import { Thunk } from '../redux.types';
import ActionUtil from '../../shared/utils/action.util';
import PalletsService from '../../services/pallets/pallets.service';

export function setPallet(palletName: EPallets, pallet: IPalletResponse): SetPalletAction {
  return {
    type: EPalletsReduxActions.SET_PALLET,
    payload: {
      palletName,
      pallet
    }
  }
}

export function setAllPallets(pallets: IPalletResponse[]): SetAllPalletsAction {
  return {
    type: EPalletsReduxActions.SET_ALL_PALLETS,
    payload: {
      pallets
    }
  }
}

export function fetchAllPallets(): Thunk<Promise<void>> {
  return async dispatch => {
    try {
      dispatch(ActionUtil.requestAction(EPalletsReduxActions.FETCH_ALL_PALLETS));

      const pallets = await PalletsService.getPalletList();

      dispatch(ActionUtil.successAction(EPalletsReduxActions.FETCH_ALL_PALLETS));
      dispatch(setAllPallets(pallets));

    } catch (error) {
      dispatch(ActionUtil.errorAction(EPalletsReduxActions.FETCH_ALL_PALLETS));
    }
  }
}

export function fetchPallet(palletName: EPallets): Thunk<Promise<void>> {
  return async dispatch => {
    try {
      dispatch(ActionUtil.requestAction(EPalletsReduxActions.FETCH_PALLET));

      const pallet = await PalletsService.getPallet(palletName);

      dispatch(ActionUtil.successAction(EPalletsReduxActions.FETCH_PALLET));
      dispatch(setPallet(palletName, pallet));

    } catch (error) {
      dispatch(ActionUtil.errorAction(EPalletsReduxActions.FETCH_PALLET));
    }
  }
}
