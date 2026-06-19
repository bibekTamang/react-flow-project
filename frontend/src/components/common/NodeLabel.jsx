import React from "react";

export const NodeLabel = ({ value, onChange }) => (
  <div className="flex flex-col mb-2">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="nodrag w-full text-center text-xs bg-brand-primary_lite py-1 rounded-md border-none outline-none focus:ring-0 placeholder-white/70 font-medium"
    />
  </div>
);
