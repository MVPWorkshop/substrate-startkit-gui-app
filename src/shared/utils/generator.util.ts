import { EPallets } from '../types/pallets.types';
import { DynamicObject } from '../types/util.types';
import { IPalletResponse } from '../../services/pallets/palletsService.types';

enum EPalletDependencyMapStatus {
  PROCESSING = 'PROCESSING',
  FINALIZED = 'FINALIZED'
}

export function recursivelyFindPalletDependencies(params: {
  palletName: EPallets;
  pallets: DynamicObject<IPalletResponse, EPallets>;
  dependencyType: 'using' | 'usedBy',
}): EPallets[] {

  const dependenciesMap: Map<EPallets, EPalletDependencyMapStatus> = new Map<EPallets, EPalletDependencyMapStatus>();

  const findPalletDependency = (palletName: EPallets) => {
    const dependencyStatus = dependenciesMap.get(palletName);
    if (dependencyStatus && dependencyStatus === EPalletDependencyMapStatus.FINALIZED) {
      return;
    }

    const pallet = params.pallets[palletName];
    dependenciesMap.set(palletName, EPalletDependencyMapStatus.PROCESSING);

    if (pallet) {
      const palletDependencies = params.dependencyType === 'usedBy' ? pallet.dependencies.usedBy : pallet.dependencies.using;

      if (palletDependencies) {
        palletDependencies.forEach(dependency => {
          if (dependenciesMap.get(dependency) !== EPalletDependencyMapStatus.PROCESSING) {
            findPalletDependency(dependency);
          }
        })
      }
    }

    dependenciesMap.set(palletName, EPalletDependencyMapStatus.FINALIZED);
  }

  findPalletDependency(params.palletName);
  dependenciesMap.delete(params.palletName);

  return Array.from(dependenciesMap.keys());
}
