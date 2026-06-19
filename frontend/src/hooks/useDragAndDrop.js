import { useCallback } from "react";
import { getInitNodeData } from "../utils/nodeUtils";

export const useDragAndDrop = (
  reactFlowWrapper,
  reactFlowInstance,
  getNodeID,
  addNode,
) => {
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!reactFlowWrapper.current || !reactFlowInstance) return;

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const applicationData = event.dataTransfer.getData(
        "application/reactflow",
      );

      if (!applicationData) return;

      try {
        const appData = JSON.parse(applicationData);
        const type = appData?.nodeType;

        if (!type) return;

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const gridSize = 20;
        const snappedPosition = {
          x: Math.round(position.x / gridSize) * gridSize,
          y: Math.round(position.y / gridSize) * gridSize,
        };

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position: snappedPosition,
          data: getInitNodeData(nodeID, type),
        };
        console.log("newNode", newNode);
        addNode(newNode);
      } catch (error) {
        console.error("Failed to parse dropped node data:", error);
      }
    },
    [reactFlowInstance, reactFlowWrapper, getNodeID, addNode],
  );

  return { onDragOver, onDrop };
};
