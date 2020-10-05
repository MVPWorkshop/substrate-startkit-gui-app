import { EGeneratorReduxActions, GeneratorReduxActions, GeneratorReduxReducerState } from './generator.redux.types';
import { Reducer } from 'redux';
import { mergeArraysWithNoDuplicates, removeDuplicates } from '../../shared/utils/common.util';

const initialState: GeneratorReduxReducerState = {
  dependencies: []
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
