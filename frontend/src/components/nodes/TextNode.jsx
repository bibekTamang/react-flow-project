// textNode.js

import { useEffect, useMemo } from "react";
import { Position, useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./BaseNode";
import { NodeLabel } from "../common/NodeLabel";
import { useStore } from "../../store/store";
import { VariableTextarea } from "../common/VariableTextArea";
import { NodeType } from "../../config/nodeTypes";

const EMPTY_VARIABLES_ARRAY = [];

export const TextNode = ({ id, data }) => {
  const variables = data?.variables || EMPTY_VARIABLES_ARRAY;
  const updateNodeField = useStore((state) => state.updateNodeField);
  const updateNodeInternals = useUpdateNodeInternals();

  const handleConfig = useMemo(() => {
    return variables.map((v, i) => ({
      id: `${id}-${v}`,
      style: { top: `${((i + 1) * 100) / (variables.length + 1)}%` },
      type: "target",
      position: Position.Left,
      variableName: v,
    }));
  }, [variables, id]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [handleConfig, id, updateNodeInternals]);

  return (
    <BaseNode id={id} handles={handleConfig} type={NodeType.TEXT} width="260px">
      {variables.map((variable, index) => {
        const topPos = `${((index + 1) * 100) / (variables.length + 1)}%`;
        return (
          <div
            key={`label-${variable}`}
            className="absolute flex items-center justify-end"
            style={{
              top: topPos,
              right: "calc(100% + 10px)",
              transform: "translateY(-50%)",
              width: "150px",
            }}
          >
            <span className="text-xs text-brand-light font-medium truncate bg-white px-1 rounded">
              {variable}
            </span>
          </div>
        );
      })}
      <NodeLabel
        value={data?.textName || id.replace("customText-", "text_")}
        onChange={(val) => updateNodeField(id, "textName", val)}
      />

      <VariableTextarea
        id={id}
        label="Text"
        value={data?.text}
        onChange={(val) => updateNodeField(id, "text", val)}
      />
    </BaseNode>
  );
};
