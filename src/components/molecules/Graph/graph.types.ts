import { EPallets } from '../../../shared/types/pallets.types';
import { Position } from 'vis-network';

export type OnNodeHover = (data: {
  event: MouseEvent;
  node: EPallets;
  pointer: {
    DOM: Position;
    canvas: Position;
  }
}) => void;

export type OnNodeZoom = (data: {
  direction: '-' | '+';
  scale: number;
  pointer: Position;
}) => void;

export interface IGraphState {
  graphData: {
    nodes: {
      id: EPallets;
      label: string;
    }[];
    edges: {
      from: EPallets;
      to: EPallets;
      arrows: 'to';
      physics: false;
    }[];
  },
  graphScale: number;
  hoveredNodeId: EPallets,
  hoveredNodePosition: {
    x: number;
    y: number;
  }
}
