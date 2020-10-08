import { AllKeysRequired, DynamicObject } from '../types/util.types';
import { ECommonAuthors, EPalletCategories, EPallets, ESubstrateVersion } from '../types/pallets.types';

export const palletCategoryLabels: DynamicObject<string, EPalletCategories, AllKeysRequired> = {
  [EPalletCategories.ACCOUNTS]: 'Accounts',
  [EPalletCategories.ASSETS]: 'Assets',
  [EPalletCategories.CONSENSUS]: 'Consensus',
  [EPalletCategories.GOVERNANCE]: 'Governance',
  [EPalletCategories.IDENTITY]: 'Identity',
  [EPalletCategories.RUNTIME]: 'Runtime',
  [EPalletCategories.SMART_CONTRACTS]: 'Smart Contracts'
}

export const substrateVersionLabels: DynamicObject<string, ESubstrateVersion, AllKeysRequired> = {
  [ESubstrateVersion.ONE]: 'Substrate 1.0',
  [ESubstrateVersion.TWO]: 'Substrate 2.0'
}

export const commonAuthorsLabels: DynamicObject<string, ECommonAuthors | string, AllKeysRequired> = {
  [ECommonAuthors.PARITY_TECHNOLOGIES]: 'Parity Technologies'
}

export const palletsIncludedInNodeTemplate: EPallets[] = [
  EPallets.PALLET_BALANCE,
  EPallets.PALLET_AURA,
  EPallets.PALLET_GRANDPA,
  EPallets.PALLET_RANDOMNESS_COLLECTIVE_FLIP,
  EPallets.PALLET_SUDO,
  EPallets.PALLET_TIMESTAMP,
  EPallets.PALLET_TRANSACTION_PAYMENT
]
