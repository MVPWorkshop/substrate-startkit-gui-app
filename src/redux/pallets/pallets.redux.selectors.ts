import { IPalletResponse } from '../../services/pallets/palletsService.types';
import { RootState } from '../redux.types';

export function getCurrentlySelectedPallet(state: RootState): IPalletResponse | undefined {
  const selectedPallet = state.ui.selectedPallet;

  if (selectedPallet) {
    return state.pallets[selectedPallet];
  } else {
    return undefined;
  }
}
