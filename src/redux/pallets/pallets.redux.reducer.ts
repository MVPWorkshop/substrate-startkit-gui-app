import { Reducer } from 'redux';
import { EPalletsReduxActions, PalletReduxActions, PalletReduxReducerState } from './pallets.redux.types';

const initialState: PalletReduxReducerState = {
};

// Reducer which contains all pallet related data
const palletsReduxReducer: Reducer<PalletReduxReducerState, PalletReduxActions> = (state = initialState, action) => {
  switch (action.type) {
    case EPalletsReduxActions.SET_ALL_PALLETS: {
      const newState = {...state};

      action.payload.pallets.map(pallet => (
        newState[pallet.name] = pallet
      ))

      return newState;
    }
    case EPalletsReduxActions.SET_PALLET: {
      return {
        ...state,
        [action.payload.palletName]: {
          ...action.payload.pallet
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default palletsReduxReducer;
