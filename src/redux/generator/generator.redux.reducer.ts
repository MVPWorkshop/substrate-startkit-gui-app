import { EGeneratorReduxActions, GeneratorReduxActions, GeneratorReduxReducerState } from './generator.redux.types';
import { Reducer } from 'redux';
import { mergeArraysWithNoDuplicates, removeDuplicates } from '../../shared/utils/common.util';
import { palletsIncludedInNodeTemplate } from '../../shared/constants/pallet.constants';

const initialState: GeneratorReduxReducerState = {
  dependencies: [
    ...palletsIncludedInNodeTemplate
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
    case EGeneratorReduxActions.RESET_GENERATOR: {
      return {
        ...initialState
      }
    }
    default: {
      return state;
    }
  }
}

export default generatorReduxReducer;
