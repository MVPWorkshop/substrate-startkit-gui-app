import { EPalletCategories } from '../../../shared/types/pallets.types';

export interface IPalletCategorySelectorProps {
  value: EPalletCategories | undefined;
  onChange: (value: EPalletCategories | undefined) => void;
}
