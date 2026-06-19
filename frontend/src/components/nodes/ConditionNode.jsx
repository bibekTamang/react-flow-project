import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { NodeLabel } from "../common/NodeLabel";
import { useStore } from "../../store/store";
import { NodeType } from "../../config/nodeTypes";
import { AiOutlineExclamationCircle, AiOutlinePlus } from "react-icons/ai";
import { PathConditionCard } from "../common/PathConditionCard";
import { Badge } from "../common/Badge";
import { Button } from "../actions/Button";
import { useTranslation } from "react-i18next";

export const ConditionNode = ({ id, data }) => {
  const { t } = useTranslation();
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode
      id={id}
      handles={[
        { type: "target", position: Position.Left, id: `${id}-target` },
        { type: "source", position: Position.Right, id: `${id}-source` },
      ]}
      type={NodeType.CONDITION}
      width="500px"
    >
      <NodeLabel
        value={data.conditionName || id}
        onChange={(val) => updateNodeField(id, "conditionName", val)}
      />
      <div className="text-xs font-semibold text-brand-primary border border-brand-primary/20 bg-brand-primary_lite p-2 flex items-center gap-2 rounded-md">
        <AiOutlineExclamationCircle className="flex-shrink-0" size={18} />
        <span>{t("node-text.conditionNode.nodeInfo")}</span>
      </div>
      <div className="mt-4">
        <Badge text="If" />
        <PathConditionCard />
        <Badge text="Else" />
      </div>
      <Button
        label="Add Clause"
        icon={<AiOutlinePlus size={16} />}
        className="bg-white w-full py-2 text-brand-dark mt-2 border border-brand-light/10"
      />
    </BaseNode>
  );
};
