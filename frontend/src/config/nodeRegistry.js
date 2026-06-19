import { MdInput, MdOutput } from "react-icons/md";
import { BsOpenai } from "react-icons/bs";
import { RxFileText } from "react-icons/rx";
import { LuDownload, LuMessageCircle } from "react-icons/lu";
import { PiArrowsMergeBold } from "react-icons/pi";
import { GoArrowSwitch } from "react-icons/go";
import { MdInsertLink } from "react-icons/md";
import { InputNode } from "../components/nodes/InputNode";
import { OutputNode } from "../components/nodes/OutputNode";
import { LLMNode } from "../components/nodes/LlmNode";
import { TextNode } from "../components/nodes/TextNode";
import { NodeType } from "./nodeTypes";
import { KnowledgeNode } from "../components/nodes/KnowledgeNode";
import { TalkNode } from "../components/nodes/TalkNode";
import { ConditionNode } from "../components/nodes/ConditionNode";
import { UrlNode } from "../components/nodes/UrlNode";

export const NODE_REGISTRY = {
  [NodeType.INPUT]: {
    labelKey: "nodeRegistry.input.label",
    titleKey: "nodeRegistry.input.title",
    infoKey: "nodeRegistry.input.info",
    icon: <MdInput size={24} />,
    component: InputNode,
    outputs: [
      {
        outputField: "text",
        outputFieldDes: "The inputted text.",
        type: "Text",
      },
    ],
  },
  [NodeType.OUTPUT]: {
    labelKey: "nodeRegistry.output.label",
    titleKey: "nodeRegistry.output.title",
    infoKey: "nodeRegistry.output.info",
    icon: <MdOutput size={24} />,
    component: OutputNode,
    outputs: [
      {
        outputField: "text",
        outputFieldDes: "The inputted text.",
        type: "Text",
      },
    ],
  },
  [NodeType.LLM]: {
    labelKey: "nodeRegistry.llm.label",
    titleKey: "nodeRegistry.llm.title",
    infoKey: "nodeRegistry.llm.info",
    icon: <BsOpenai size={24} />,
    component: LLMNode,
    outputs: [
      {
        outputField: "response",
        outputFieldDes: "The output of LLM.",
        type: "Text",
      },
      {
        outputField: "token_used",
        outputFieldDes: "Total number of tokens used in the LLM call.",
        type: "Text",
      },
    ],
  },
  [NodeType.TEXT]: {
    labelKey: "nodeRegistry.text.label",
    titleKey: "nodeRegistry.text.title",
    infoKey: "nodeRegistry.text.info",
    icon: <RxFileText size={24} />,
    component: TextNode,
    outputs: [
      {
        outputField: "text",
        outputFieldDes: "The inputted text.",
        type: "Text",
      },
    ],
  },
  [NodeType.KNOWLEDGE]: {
    labelKey: "nodeRegistry.knowledge.label",
    titleKey: "nodeRegistry.knowledge.title",
    infoKey: "nodeRegistry.knowledge.info",
    icon: <LuDownload size={24} />,
    component: KnowledgeNode,
    outputs: [
      {
        outputField: "chunks",
        outputFieldDes:
          "Semantically similar chunks retrieved from the knowledge base.",
        type: "List<Text>",
      },
      {
        outputField: "citation_metadata",
        outputFieldDes:
          "Citation metadata from knowledge base outputs, used for showing sources in LLM responses.",
        type: "List<Text>",
      },
    ],
  },
  [NodeType.TALK]: {
    labelKey: "nodeRegistry.talk.label",
    titleKey: "nodeRegistry.talk.title",
    infoKey: "nodeRegistry.talk.info",
    icon: <LuMessageCircle size={24} />,
    component: TalkNode,
    outputs: [
      {
        outputField: "text",
        outputFieldDes: "The inputted text.",
        type: "Text",
      },
    ],
  },
  [NodeType.CONDITION]: {
    labelKey: "nodeRegistry.condition.label",
    titleKey: "nodeRegistry.condition.title",
    infoKey: "nodeRegistry.condition.info",
    icon: <GoArrowSwitch size={24} />,
    component: ConditionNode,
    outputs: [
      {
        outputField: "text",
        outputFieldDes: "The inputted text.",
        type: "Text",
      },
    ],
  },
  [NodeType.MERGE]: {
    labelKey: "nodeRegistry.merge.label",
    titleKey: "nodeRegistry.merge.title",
    infoKey: "nodeRegistry.merge.info",
    icon: <PiArrowsMergeBold size={24} />,
    component: ConditionNode,
    outputs: [
      {
        outputField: "text",
        outputFieldDes: "The inputted text.",
        type: "Text",
      },
    ],
  },
  [NodeType.URL]: {
    labelKey: "nodeRegistry.url.label",
    titleKey: "nodeRegistry.url.title",
    infoKey: "nodeRegistry.url.info",
    icon: <MdInsertLink size={24} />,
    component: UrlNode,
    outputs: [
      {
        outputField: "content",
        outputFieldDes: "The content of URL.",
        type: "Text",
      },
      {
        outputField: "links",
        outputFieldDes: "The sub-links present.",
        type: "Text",
      },
    ],
  },
};
