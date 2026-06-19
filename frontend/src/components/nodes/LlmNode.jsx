import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { NodeType } from "../../config/nodeTypes";
import { NodeLabel } from "../common/NodeLabel";
import { useStore } from "../../store/store";
import { VariableTextarea } from "../common/VariableTextArea";
import { Dropdown } from "../common/Dropdown";

const modelOptions = [
  { label: "gpt-4", value: "gpt-4" },
  { label: "gemma-4", value: "gemma-4" },
  { label: "oupus-4", value: "oupus-4" },
];

export const LLMNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      handles={[
        { type: "target", position: Position.Left, id: `${id}-target` },
        { type: "source", position: Position.Right, id: `${id}-source` },
      ]}
      type={NodeType.LLM}
      width="400px"
    >
      <NodeLabel
        value={data.llmName || id}
        onChange={(val) => updateNodeField(id, "llmName", val)}
      />
      <VariableTextarea
        id={id}
        label="System (Instructions)"
        value={data?.systemInstruction}
        onChange={(val) => updateNodeField(id, "systemInstruction", val)}
        registerVariables={false}
      />
      <VariableTextarea
        id={id}
        label="Prompt"
        value={data?.prompt}
        onChange={(val) => updateNodeField(id, "prompt", val)}
        registerVariables={false}
      />
      <Dropdown
        type="Dropdown"
        label="Model"
        value={data.selectedModel || "gpt-4"}
        options={modelOptions}
        onChange={(val) => updateNodeField(id, "selectedModel", val)}
      />
    </BaseNode>
  );
};
