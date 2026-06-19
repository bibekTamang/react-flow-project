// store.js

import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  getNodeID: (type) => {
    const nodes = get().nodes;
    const existingIDs = nodes
      .filter((node) => node.type === type)
      .map((node) => {
        const parts = node.id.split("-");
        return parseInt(parts[1], 10);
      })
      .filter((id) => !isNaN(id));
    let newID = 0;
    while (existingIDs.includes(newID)) {
      newID += 1;
    }
    return `${type}-${newID}`;
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    if (!connection.sourceHandle || !connection.targetHandle) {
      return;
    }
    set({
      edges: addEdge(
        {
          ...connection,
          type: "button-edge",
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
          style: { stroke: "#818cf8" },
        },
        get().edges,
      ),
    });
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }

        return node;
      }),
    });
  },
  removeNode: (nodeId) => {
    set({
      nodes: get().nodes.filter((node) => node.id !== nodeId),
      edges: get().edges.filter(
        (edge) => edge.source !== nodeId && edge.target !== nodeId,
      ),
    });
  },
  removeEdge: (edgeId) => {
    set({
      edges: get().edges.filter((edge) => edge.id !== edgeId),
    });
  },
}));
