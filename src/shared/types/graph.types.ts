import { NodeOptions, Options } from 'vis-network';

export type INodeRenderer = (data: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  label: string;
}) => {
  drawNode: () => void;
  nodeDimensions: {
    width: number;
    height: number;
  }
}

interface ExtendedNodeOptions extends NodeOptions {
  ctxRenderer: INodeRenderer
}

export interface GraphOptions extends Options {
  nodes?: ExtendedNodeOptions
}
