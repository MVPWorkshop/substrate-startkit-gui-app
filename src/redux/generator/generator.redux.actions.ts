import { EPallets } from '../../shared/types/pallets.types';
import {
  AddGeneratorDependencies,
  EGeneratorReduxActions,
  RemoveGeneratorDependencies,
  ResetGenerator
} from './generator.redux.types';
import { Thunk } from '../redux.types';
import AuthService from '../../services/auth/auth.service';
import GeneratorService from '../../services/generator/generator.service';
import ActionUtil from '../../shared/utils/action.util';
import { recursivelyFindPalletDependencies } from '../../shared/utils/generator.util';

export function addGeneratorDependencies(pallets: EPallets[]): AddGeneratorDependencies {
  return {
    type: EGeneratorReduxActions.ADD_GENERATOR_DEPENDENCIES,
    payload: {
      pallets
    }
  }
}

export function removeGeneratorDependencies(pallets: EPallets[]): RemoveGeneratorDependencies {
  return {
    type: EGeneratorReduxActions.REMOVE_GENERATOR_DEPENDENCIES,
    payload: {
      pallets
    }
  }
}

export function resetGenerator(): ResetGenerator {
  return {
    type: EGeneratorReduxActions.RESET_GENERATOR,
    payload: {}
  }
}

export function addPalletToGenerator(pallet: EPallets): Thunk<void> {
  return (dispatch, getState) => {
    const palletDetails = getState().pallets[pallet];

    if (!palletDetails) {
      return;
    }

    const depsToAdd = recursivelyFindPalletDependencies({
      pallets: getState().pallets,
      palletName: pallet,
      dependencyType: 'using'
    })

    console.log([
      ...depsToAdd,
      pallet
    ])

    dispatch(addGeneratorDependencies([
      ...depsToAdd,
      pallet
    ]));
  }
}

export function removePalletFromGenerator(pallet: EPallets): Thunk<void> {
  return (dispatch, getState) => {
    const palletDetails = getState().pallets[pallet];

    if (!palletDetails) {
      return;
    }

    const depsToRemove = recursivelyFindPalletDependencies({
      pallets: getState().pallets,
      palletName: pallet,
      dependencyType: 'usedBy'
    })

    dispatch(removeGeneratorDependencies([
      ...depsToRemove,
      pallet
    ]));
  }
}

export function addTemplateToGenerator(templateId: string): Thunk<Promise<void>> {
  return async (dispatch, getState) => {
    const template = getState().templates[templateId];

    if (!template) {
      return;
    }

    dispatch(resetGenerator());
    template.dependencies.forEach(dependency => {
      dispatch(addPalletToGenerator(dependency));
    })
  }
}

/**
 * @description Logs the user into Github and then calls backend to generate the code
 * @return Error | string If successful returns link to the repo, if errors returns that error
 */
export function generateCode(): Thunk<Promise<Error | string>> {
  return async (dispatch, getState) => {
    try {
      dispatch(ActionUtil.requestAction(EGeneratorReduxActions.GENERATE_CODE));

      await AuthService.githubLogin();
      const response = await GeneratorService.generateCode({
        pallets: getState().generator.dependencies
      });

      dispatch(ActionUtil.successAction(EGeneratorReduxActions.GENERATE_CODE));

      return response.repository;

    } catch (error) {
      dispatch(ActionUtil.errorAction(EGeneratorReduxActions.GENERATE_CODE));
      return error;
    }
  }
}
