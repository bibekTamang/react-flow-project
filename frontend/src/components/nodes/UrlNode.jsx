import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { NodeLabel } from "../common/NodeLabel";
import { useStore } from "../../store/store";
import { Dropdown } from "../common/Dropdown";
import { NodeType } from "../../config/nodeTypes";
import { Input } from "../common/Input";

const providerOptions = [
  { label: "Default", value: "Default" },
  { label: "Third Party", value: "ThirdParty" },
];

export const UrlNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      handles={[
        { type: "target", position: Position.Left, id: `${id}-target` },
        { type: "source", position: Position.Right, id: `${id}-source` },
      ]}
      type={NodeType.URL}
    >
      <NodeLabel
        value={data.urlName || id}
        onChange={(val) => updateNodeField(id, "urlName", val)}
      />
      <Dropdown
        type="Dropdown"
        label="Provider"
        value={data.provider || "Text"}
        options={providerOptions}
        onChange={(val) => updateNodeField(id, "provider", val)}
      />
      <Input label="URL" type="Text" placeholder="www.example.com" />
    </BaseNode>
  );
};
