import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { NodeLabel } from "../common/NodeLabel";
import { useStore } from "../../store/store";
import { Dropdown } from "../common/Dropdown";
import { NodeType } from "../../config/nodeTypes";
import { Button } from "../actions/Button";
import { AiOutlinePlus } from "react-icons/ai";

const typeOptions = [
  { label: "Text", value: "Text" },
  { label: "File", value: "File" },
];

const functionOptions = [
  { label: "Pick First", value: "pickFirst" },
  { label: "Pick Second", value: "pickSecond" },
];

export const MergeNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      handles={[
        { type: "target", position: Position.Left, id: `${id}-target` },
        { type: "source", position: Position.Right, id: `${id}-source` },
      ]}
      type={NodeType.MERGE}
      width="320px"
    >
      <NodeLabel
        value={data.mergeName || id}
        onChange={(val) => updateNodeField(id, "mergeName", val)}
      />
      <Dropdown
        type="Text"
        label="Type"
        value={data.mergeType || "Text"}
        options={typeOptions}
        onChange={(val) => updateNodeField(id, "mergeType", val)}
      />
      <Dropdown
        type="Text"
        label="Function"
        value={data.function || "pickFirst"}
        options={functionOptions}
        onChange={(val) => updateNodeField(id, "function", val)}
      />

      <Button
        label="Add Path"
        icon={<AiOutlinePlus size={16} />}
        className="bg-white w-full py-2 text-brand-dark mt-2 border border-brand-light/10"
      />
    </BaseNode>
  );
};
