import { ReactNode } from 'react';
import { IWithClass } from '../../../shared/types/common.types';

export interface IInfoBoxProps extends IWithClass {
  head: string;
  body: string | ReactNode;
}
