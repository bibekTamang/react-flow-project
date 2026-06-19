// outputNode.js

import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { NodeLabel } from "../common/NodeLabel";
import { useStore } from "../../store/store";
import { NodeType } from "../../config/nodeTypes";
import { SelectionCard } from "../common/SelectionCard";

const talkTypes = [
  {
    titleKey: "talkTypes.message.title",
    descriptionKey: "talkTypes.message.description",
  },
  {
    titleKey: "talkTypes.image.title",
    descriptionKey: "talkTypes.image.description",
  },
  {
    titleKey: "talkTypes.card.title",
    descriptionKey: "talkTypes.card.description",
  },
  {
    titleKey: "talkTypes.carousel.title",
    descriptionKey: "talkTypes.carousel.description",
  },
];

export const TalkNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      handles={[
        { type: "source", position: Position.Right, id: `${id}-source` },
      ]}
      type={NodeType.TALK}
      width="400px"
    >
      <NodeLabel
        value={data?.talkName || id}
        onChange={(val) => updateNodeField(id, "talkName", val)}
      />
      {talkTypes.map((data, index) => (
        <SelectionCard data={data} key={index} />
      ))}
    </BaseNode>
  );
};
