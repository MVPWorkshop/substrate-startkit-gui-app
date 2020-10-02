import { EGeneratorReduxActions, GeneratorReduxActions, GeneratorReduxReducerState } from './generator.redux.types';
import { EPallets } from '../../shared/types/pallets.types';
import { Reducer } from 'redux';
import { mergeArraysWithNoDuplicates, removeDuplicates } from '../../shared/utils/common.util';

const initialState: GeneratorReduxReducerState = {
  dependencies: [
    EPallets.PALLET_CONTRACT,
    EPallets.PALLET_BALANCE
  ]
}

const generatorReduxReducer: Reducer<GeneratorReduxReducerState, GeneratorReduxActions> = (state = initialState, action) => {
  switch (action.type) {
    case EGeneratorReduxActions.ADD_GENERATOR_DEPENDENCIES: {
      return {
        ...state,
        dependencies: mergeArraysWithNoDuplicates(state.dependencies, action.payload.pallets)
      }
    }
    case EGeneratorReduxActions.REMOVE_GENERATOR_DEPENDENCIES: {
      return {
        ...state,
        dependencies: removeDuplicates(state.dependencies, action.payload.pallets)
      }
    }
    default: {
      return state;
    }
  }
}

export default generatorReduxReducer;
