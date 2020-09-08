import { ECommonAuthors, EPalletCategories, EPallets, ESubstrateVersion } from '../../shared/types/pallets.types';

export interface IPalletResponse {
  name: EPallets;
  size: number;
  downloads: number;
  packageName: string;
  version: string;
  license: string;
  updated: Date;
  description: string;
  shortDescription: string;
  compatibility: ESubstrateVersion;
  categories: EPalletCategories[];
  authors: (string | ECommonAuthors)[];
  dependencies: {
    using: EPallets[],
    usedBy: EPallets[]
  };
}
