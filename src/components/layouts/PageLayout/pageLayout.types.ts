import { IWithClass } from '../../../shared/types/common.types';
import { ContainerProps } from 'react-bootstrap';

export interface IPageLayoutProps extends IWithClass {
  fluid?: ContainerProps['fluid'];
}
