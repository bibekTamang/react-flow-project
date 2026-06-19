import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { NodeLabel } from "../common/NodeLabel";
import { useStore } from "../../store/store";
import { Dropdown } from "../common/Dropdown";
import { NodeType } from "../../config/nodeTypes";
import { VariableTextarea } from "../common/VariableTextArea";

const knowledgeBaseOptions = [
  { label: "Feburary 3rd Knowledge Base", value: "Text" },
  { label: "October 22nd Knowledge Base", value: "File" },
];

export const KnowledgeNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-target1`,
        },
        { type: "source", position: Position.Right, id: `${id}-source` },
      ]}
      type={NodeType.KNOWLEDGE}
      width="350px"
    >
      <NodeLabel
        value={data.knowledgeBaseName || id}
        onChange={(val) => updateNodeField(id, "knowledgeBaseName", val)}
      />
      <VariableTextarea
        id={id}
        label="Search Query"
        value={data?.searchQuery}
        onChange={(val) => updateNodeField(id, "searchQuery", val)}
        registerVariables={false}
      />
      <Dropdown
        type="Dropdown"
        label="Knkowledge Base"
        value={data.knowledgeBaseType}
        options={knowledgeBaseOptions}
        onChange={(val) => updateNodeField(id, "knowledgeBaseType", val)}
      />
    </BaseNode>
  );
};
