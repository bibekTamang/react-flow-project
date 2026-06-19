import React from "react";
import { Handle, useEdges } from "reactflow";

export const BaseHandle = ({ id, type, ...props }) => {
  const edges = useEdges();

  const isConnected = edges.some((edge) =>
    type === "target" ? edge.targetHandle === id : edge.sourceHandle === id,
  );
  return (
    <Handle
      id={id}
      type={type}
      className={`
        !w-3 !h-3 !border !border-brand-primary !rounded-full transition-all duration-300 !bg-white
        flex items-center justify-center
        hover:!scale-75
      `}
      {...props}
    >
      {isConnected && (
        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />
      )}
    </Handle>
  );
};
