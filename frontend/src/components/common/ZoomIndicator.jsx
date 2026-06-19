import React from "react";
import { useStore } from "reactflow";

export const ZoomIndicator = () => {
  const zoom = useStore((state) => state.transform[2]);
  const percentage = Math.round(zoom * 100);

  return (
    <div className="absolute bottom-[122px] left-3.5 bg-white rounded border border-gray-200 z-10 text-[10px] font-medium py-1 px-0.5">
      {percentage}%
    </div>
  );
};
