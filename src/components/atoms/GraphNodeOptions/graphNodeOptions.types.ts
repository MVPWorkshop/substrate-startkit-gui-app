import { Position } from 'vis-network';
import { EPallets } from '../../../shared/types/pallets.types';

export interface IGraphNodeOptionsProps {
  nodeId?: EPallets;
  width: number;
  height: number;
  scale: number;
  position?: Position;
}
