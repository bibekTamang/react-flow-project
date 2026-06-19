import React, { useState } from "react";

export const DraggableNode = ({ type, label, icon }) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragEnd = () => {
    setIsGrabbing(false);
  };

  return (
    <div
      className={`${type} toolbar-node node-hover-effect cursor-grab active:cursor-grabbing ${
        isGrabbing ? "!cursor-grabbing" : ""
      }`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </div>
  );
};
