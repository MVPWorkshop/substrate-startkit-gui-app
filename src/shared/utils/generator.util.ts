import { EPallets } from '../types/pallets.types';
import { DynamicObject } from '../types/util.types';
import { IPalletResponse } from '../../services/pallets/palletsService.types';

export function recursivelyFindPalletDependencies(params: {
  palletName: EPallets;
  pallets: DynamicObject<IPalletResponse, EPallets>;
  dependencyType: 'using' | 'usedBy',
}): EPallets[] {

  const dependenciesMap: Map<EPallets, boolean> = new Map<EPallets, boolean>();

  const findPalletDependency = (palletName: EPallets) => {
    const isDependencyPresent = dependenciesMap.get(palletName);

    if (isDependencyPresent) {
      return;
    }

    const pallet = params.pallets[palletName];

    if (pallet) {
      const palletDependencies = params.dependencyType === 'usedBy' ? pallet.dependencies.usedBy : pallet.dependencies.using;

      if (palletDependencies) {
        palletDependencies.forEach(dependency => {
          dependenciesMap.set(dependency, true);
          findPalletDependency(dependency);
        })
      }
    }
  }

  findPalletDependency(params.palletName);

  return Array.from(dependenciesMap.keys());
}
