import { ReduxAction } from '../redux.types';
import { EPallets } from '../../shared/types/pallets.types';

export enum EGeneratorReduxActions {
  ADD_GENERATOR_DEPENDENCIES = 'ADD_GENERATOR_DEPENDENCIES',
  REMOVE_GENERATOR_DEPENDENCIES = 'REMOVE_GENERATOR_DEPENDENCIES',
  GENERATE_CODE = 'GENERATE_CODE'
}

export type AddGeneratorDependencies = ReduxAction<EGeneratorReduxActions.ADD_GENERATOR_DEPENDENCIES, {
  pallets: EPallets[];
}>

export type RemoveGeneratorDependencies = ReduxAction<EGeneratorReduxActions.REMOVE_GENERATOR_DEPENDENCIES, {
  pallets: EPallets[];
}>

export type GeneratorReduxActions =
  AddGeneratorDependencies |
  RemoveGeneratorDependencies;

// Reducer
export type GeneratorReduxReducerState = {
  dependencies: EPallets[];
}
