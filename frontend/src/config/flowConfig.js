import { InputNode } from "../components/nodes/InputNode";
import { LLMNode } from "../components/nodes/LlmNode";
import { OutputNode } from "../components/nodes/OutputNode";
import { TextNode } from "../components/nodes/TextNode";
import { ButtonEdge } from "../components/edges/ButtonEdge";
import { KnowledgeNode } from "../components/nodes/KnowledgeNode";
import { TalkNode } from "../components/nodes/TalkNode";
import { ConditionNode } from "../components/nodes/ConditionNode";
import { MergeNode } from "../components/nodes/MergeNode";
import { UrlNode } from "../components/nodes/UrlNode";

export const gridSize = 20;

export const proOptions = { hideAttribution: true };

export const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  knowledge: KnowledgeNode,
  talk: TalkNode,
  condition: ConditionNode,
  merge: MergeNode,
  url: UrlNode,
};

export const edgeTypes = {
  "button-edge": ButtonEdge,
};
