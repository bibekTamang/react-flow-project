import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { NodeLabel } from "../common/NodeLabel";
import { useStore } from "../../store/store";
import { Dropdown } from "../common/Dropdown";
import { NodeType } from "../../config/nodeTypes";

const typeOptions = [
  { label: "Text", value: "Text" },
  { label: "File", value: "File" },
];

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      handles={[
        { type: "source", position: Position.Right, id: `${id}-source` },
      ]}
      type={NodeType.INPUT}
    >
      <NodeLabel
        value={data.inputName || id.replace("customInput-", "input_")}
        onChange={(val) => updateNodeField(id, "inputName", val)}
      />
      <Dropdown
        type="Dropdown"
        label="Type"
        value={data.inputType || "Text"}
        options={typeOptions}
        onChange={(val) => updateNodeField(id, "inputType", val)}
      />
    </BaseNode>
  );
};
