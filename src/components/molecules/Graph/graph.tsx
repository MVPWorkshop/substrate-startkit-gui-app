import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/redux.types';
import { EPallets } from '../../../shared/types/pallets.types';
import { IGraphState, OnNodeHover, OnNodeZoom } from './graph.types';
import { DynamicObject } from '../../../shared/types/util.types';
import { IPalletResponse } from '../../../services/pallets/palletsService.types';
import { Network } from 'vis-network';
import { graphOptions } from '../../../shared/utils/graph.util';
import styles from './graph.module.scss';
import GraphNodeOptions from '../../atoms/GraphNodeOptions/graphNodeOptions';

export const nodeWidth = 160;
export const nodeHeight = 45;

const Graph = () => {

  const networkCanvasRef = useRef<HTMLDivElement>(null)
  const generatorDeps = useSelector<RootState, EPallets[]>(state => state.generator.dependencies);
  const palletDetails = useSelector<RootState, DynamicObject<IPalletResponse>>(state => state.pallets);

  const [graphData, setGraphData] = useState<IGraphState['graphData']>({
    edges: [],
    nodes: []
  });

  useEffect(() => {
    const newGraphData: IGraphState['graphData'] = {
      nodes: [],
      edges: []
    };

    for (let i = 0; i < generatorDeps.length; i++) {
      const dep = generatorDeps[i];
      const pallet = palletDetails[dep];

      if (pallet) {
        newGraphData.nodes.push({
          id: pallet.name,
          label: pallet.name
        });

        pallet.dependencies.using.forEach(usedDependency => {
          newGraphData.edges.push({
            from: pallet.name,
            to: usedDependency,
            arrows: 'to',
            physics: false
          })
        })
      }
    }

    setGraphData(newGraphData);
  }, [generatorDeps, palletDetails]);

  const [network, setNetwork] = useState<Network>();

  useEffect(() => {
    if (networkCanvasRef && networkCanvasRef.current) {
      setNetwork(new Network(networkCanvasRef.current, {}, graphOptions));
    }

    return () => {
      if (network) {
        network.destroy();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [networkCanvasRef]);

  const [hoveredNodeId, setHoveredNodeId] = useState<IGraphState['hoveredNodeId']>()
  const [hoveredNodePosition, setHoveredNodePosition] = useState<IGraphState['hoveredNodePosition']>();
  const [graphScale, setGraphScale] = useState<IGraphState['graphScale']>(1);

  const updateHoveredNodePosition = () => {
    if (!network) {
      return;
    }

    if (hoveredNodeId) {
      const { x, y } = network.canvasToDOM(network.getPosition(hoveredNodeId));
      setHoveredNodePosition({ x, y });
    } else {
      setHoveredNodePosition(undefined);
    }
  }

  useEffect(() => {
    updateHoveredNodePosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredNodeId])

  const onNodeHover: OnNodeHover = (data) => {
    setHoveredNodeId(data.node);
  }

  const onNodeBlur = () => {
    setHoveredNodeId(undefined);
  }

  const onCanvasZoom: OnNodeZoom = (data) => {
    setGraphScale(data.scale);
    updateHoveredNodePosition();
  }

  const onGraphDragEng = () => {
    updateHoveredNodePosition();
  }

  const onGraphDragStart = () => {
    setHoveredNodePosition(undefined);
  }

  useEffect(() => {
    if (network) {
      network.on('hoverNode', onNodeHover)
      network.on('blurNode', onNodeBlur)
      network.on('zoom', onCanvasZoom)
      network.on('dragEnd', onGraphDragEng)
      network.on('dragStart', onGraphDragStart)
    }

    return () => {
      if (network) {
        network.off('hoverNode', onNodeHover)
        network.off('zoom', onCanvasZoom)
        network.off('dragEnd', onGraphDragEng)
        network.off('dragStart', onGraphDragStart)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [network, hoveredNodeId]);

  useEffect(() => {
    if (network) {
      network.setData(graphData);
      setGraphScale(1);
      setHoveredNodeId(undefined);
      setHoveredNodePosition(undefined);
      network.redraw();
    }
  }, [network, graphData])

  return (
    <Fragment>
      <GraphNodeOptions
        nodeId={hoveredNodeId}
        width={nodeWidth}
        height={nodeHeight}
        scale={graphScale}
        position={hoveredNodePosition}
      />
      <div ref={networkCanvasRef} className={styles.graph}/>
    </Fragment>
  )
}

export default Graph;
