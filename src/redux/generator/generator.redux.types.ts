import { ReduxAction } from '../redux.types';
import { EPallets } from '../../shared/types/pallets.types';

export enum EGeneratorReduxActions {
  ADD_GENERATOR_DEPENDENCIES = 'ADD_GENERATOR_DEPENDENCIES',
  REMOVE_GENERATOR_DEPENDENCIES = 'REMOVE_GENERATOR_DEPENDENCIES',
  GENERATE_CODE = 'GENERATE_CODE',
  RESET_GENERATOR = 'RESET_GENERATOR'
}

export type AddGeneratorDependencies = ReduxAction<EGeneratorReduxActions.ADD_GENERATOR_DEPENDENCIES, {
  pallets: EPallets[];
}>

export type RemoveGeneratorDependencies = ReduxAction<EGeneratorReduxActions.REMOVE_GENERATOR_DEPENDENCIES, {
  pallets: EPallets[];
}>

export type ResetGenerator = ReduxAction<EGeneratorReduxActions.RESET_GENERATOR, {}>

export type GeneratorReduxActions =
  AddGeneratorDependencies |
  RemoveGeneratorDependencies |
  ResetGenerator;

// Reducer
export type GeneratorReduxReducerState = {
  dependencies: EPallets[];
}
