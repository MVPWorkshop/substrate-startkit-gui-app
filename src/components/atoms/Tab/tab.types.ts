import { IWithClass } from '../../../shared/types/common.types';

export interface ITabProps extends IWithClass {
  name: string;
  label: string;
  onClick?: (tabName: string) => void;
  selectedName?: string;
}
