import { EPallets } from '../../shared/types/pallets.types';
import { AddGeneratorDependencies, EGeneratorReduxActions, RemoveGeneratorDependencies } from './generator.redux.types';
import { Thunk } from '../redux.types';
import AuthService from '../../services/auth/auth.service';
import GeneratorService from '../../services/generator/generator.service';
import ActionUtil from '../../shared/utils/action.util';

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

export function addPalletToGenerator(pallet: EPallets): Thunk<void> {
  return (dispatch, getState) => {
    const palletDetails = getState().pallets[pallet];

    if (!palletDetails) {
      return;
    }

    dispatch(addGeneratorDependencies([
      ...palletDetails.dependencies.using,
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

    dispatch(removeGeneratorDependencies([
      ...palletDetails.dependencies.usedBy,
      pallet
    ]));
  }
}

export function generateCode(): Thunk<Promise<void>> {
  return async (dispatch, getState) => {
    try {
      dispatch(ActionUtil.requestAction(EGeneratorReduxActions.GENERATE_CODE));

      await AuthService.githubLogin();
      const response = await GeneratorService.generateCode({
        pallets: getState().generator.dependencies
      });

      window.open(response.repository);

      dispatch(ActionUtil.successAction(EGeneratorReduxActions.GENERATE_CODE));

    } catch (error) {
      dispatch(ActionUtil.errorAction(EGeneratorReduxActions.GENERATE_CODE));

    }
  }
}
