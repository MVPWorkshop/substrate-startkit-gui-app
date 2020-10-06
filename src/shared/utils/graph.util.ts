import { nodeHeight, nodeWidth } from '../../components/molecules/Graph/graph';
import { GraphOptions, INodeRenderer } from '../types/graph.types';

const nodeRenderer: INodeRenderer = ({ctx, label, x, y}) => {
  const drawNode = () => {
    const xPos = x - (nodeWidth / 2); // Center of rectangle node;

    ctx.fillStyle = '#252525'; // Background color of the node
    ctx.fillRect(xPos, y, nodeWidth, nodeHeight); // Node size
    ctx.fillStyle = '#C1A2CA'; // Purple rectangle on the side of the node
    ctx.fillRect(xPos, y, 6, 45);
    ctx.font="14px Poppins"; // Node label styles
    ctx.textAlign="center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(label, x,y+(nodeHeight / 2));
  }

  return {
    drawNode,
    nodeDimensions: {
      width: nodeWidth,
      height: nodeHeight
    }
  }
}

export const calculateGraphNodeLeftPosition = (nodeXPosition: number, scale: number) => {
  const approxPixelDifference = 8;
  const leftGutter = 40;

  return nodeXPosition + leftGutter + ((1 - scale) * 10 * approxPixelDifference);
}

export const calculateGraphNodeTopPosition = (nodeYPosition: number) => {
  const topGutter = 87;

  return nodeYPosition + topGutter;
}

export const graphOptions: GraphOptions = {
  nodes: {
    shape: "custom",
    ctxRenderer: nodeRenderer
  },
  autoResize: true,
  edges: {
    width: 1.6,
    arrows: {
      to: {
        type: 'image',
        scaleFactor: 0
      }
    },
    color: '#4A4A4A',
    arrowStrikethrough: true
  },
  interaction: {
    hover: true,
    navigationButtons: false,
    keyboard: {
      enabled: false,
      bindToWindow: false,
      speed: {zoom: 0.0},
    },
    zoomView: true
  },
  manipulation: false,
  layout: {
    hierarchical: {
      enabled: true,
      direction: 'UD',
      levelSeparation: 300,
      sortMethod: 'directed',
      nodeSpacing: 200,
    }
  },
  physics: {
    enabled: false,
  }
}
