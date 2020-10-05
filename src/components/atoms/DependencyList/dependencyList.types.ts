import { EPallets } from '../../../shared/types/pallets.types';
import { IWithClass } from '../../../shared/types/common.types';

export interface IDependencyListProps extends IWithClass {
  dependencies: EPallets[];
  label: string;
}
