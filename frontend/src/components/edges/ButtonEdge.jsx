import React from "react";
import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath } from "reactflow";
import { useStore } from "../../store/store";
import { IoCloseCircleOutline } from "react-icons/io5";

export const ButtonEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const removeEdge = useStore((state) => state.removeEdge);

  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
          className="nodrag nopan absolute text-sm pointer-events-auto"
        >
          <button
            onClick={(event) => {
              event.stopPropagation();
              removeEdge(id);
            }}
            title="Delete Connection"
            className="bg-white text-brand-primary"
          >
            <IoCloseCircleOutline size={22} />
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};
