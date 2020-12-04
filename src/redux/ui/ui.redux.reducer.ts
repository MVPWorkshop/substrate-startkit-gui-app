import { Reducer } from 'redux';
import { EUiReduxActions, UiReduxActions, UiReduxReducerState } from './ui.redux.types';

const initialState: UiReduxReducerState = {
  modals: {},
  selectedPallet: undefined,
  selectedTemplate: undefined
}

const uiReduxReducer: Reducer<UiReduxReducerState, UiReduxActions> = (state = initialState, action) => {
  switch (action.type) {
    case EUiReduxActions.TOGGLE_MODAL: {

      const { state: modalState, name: modalName } = action.payload;

      return {
        ...state,
        modals: {
          ...state.modals,
          [modalName]: modalState
        }
      }
    }
    case EUiReduxActions.SET_SELECTED_PALLET: {
      return {
        ...state,
        selectedPallet: action.payload.palletName
      }
    }
    case EUiReduxActions.SET_SELECTED_TEMPLATE: {
      return  {
        ...state,
        selectedTemplate: action.payload.templateId
      }
    }
    default: {
      return state;
    }
  }
}

export default uiReduxReducer;
