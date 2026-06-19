// outputNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { NodeLabel } from "../common/NodeLabel";
import { useStore } from "../../store/store";
import { Dropdown } from "../common/Dropdown";
import { NodeType } from "../../config/nodeTypes";

const outputTypeOptions = [
  { label: "Text", value: "Text" },
  { label: "Image", value: "Image" },
];

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      handles={[{ type: "target", position: Position.Left, id: `${id}-value` }]}
      type={NodeType.OUTPUT}
    >
      <NodeLabel
        value={data?.outputName || id.replace("customOutput-", "output_")}
        onChange={(val) => updateNodeField(id, "outputName", val)}
      />
      <Dropdown
        type="Dropdown"
        label="Type"
        value={data.outputType || "Text"}
        options={outputTypeOptions}
        onChange={(val) => updateNodeField(id, "outputType", val)}
      />
    </BaseNode>
  );
};
