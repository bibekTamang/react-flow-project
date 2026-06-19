import { useState, useRef } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "../../store/store";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import {
  nodeTypes,
  edgeTypes,
  proOptions,
  gridSize,
} from "../../config/flowConfig";

import "reactflow/dist/style.css";
import { ZoomIndicator } from "../common/ZoomIndicator";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineCanvas = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector);

  const { onDragOver, onDrop } = useDragAndDrop(
    reactFlowWrapper,
    reactFlowInstance,
    getNodeID,
    addNode,
  );

  return (
    <div ref={reactFlowWrapper} style={{ width: "100vw", height: "80vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
      >
        <Background color="#aaa" gap={gridSize} />
        <Controls />
        <MiniMap />
        <ZoomIndicator />
      </ReactFlow>
    </div>
  );
};
