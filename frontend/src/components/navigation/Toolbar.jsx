// toolbar.js
import { SubmitButton } from "../actions/submit";
import { DraggableNode } from "../common/DraggableNode";
import { GoSidebarCollapse } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { NODE_REGISTRY } from "../../config/nodeRegistry";
import { useTranslation } from "react-i18next";

export const PipelineToolbar = () => {
  const { t } = useTranslation();
  const nodeRegistry = Object.entries(NODE_REGISTRY);

  return (
    <div className="">
      <div className="flex justify-between bg-white px-4 py-2 border-b-2 border-gray-200">
        <div className="flex items-center gap-2 text-sm font-medium text-brand-dark">
          <GoSidebarCollapse size={16} />
          <span>Pipelines</span>
          <IoIosArrowForward size={14} />
          <span>Untitled Pipeline 1</span>
        </div>
        <div>
          <SubmitButton />
        </div>
      </div>
      <div className="flex gap-2 bg-gray-100 py-4 px-8">
        {nodeRegistry.map(([type, config]) => (
          <DraggableNode
            key={type}
            type={type}
            label={t(config.titleKey)}
            icon={config.icon}
          />
        ))}
      </div>
    </div>
  );
};
