import React from "react";
import { useStore } from "../../store/store";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BaseHandle } from "../common/BaseHandle";
import { NODE_REGISTRY } from "../../config/nodeRegistry";
import { useTranslation } from "react-i18next";
import { GoSidebarExpand } from "react-icons/go";
import { RiShareBoxLine } from "react-icons/ri";
import { ControlLabel } from "../common/ControlLabel";

export const BaseNode = ({ type, id, children, handles = [], width }) => {
  const { t } = useTranslation();
  const removeNode = useStore((state) => state.removeNode);
  const config = NODE_REGISTRY[type];

  return (
    <div className="flex">
      <div
        style={{
          width: width || "240px",
        }}
        className="node-card !relative hover:text-brand-primary"
      >
        <div className="bg-brand-primary_lite/60 p-2 rounded-md border border-brand-primary/20">
          <div className="font-medium flex justify-between pb-1">
            <div className="flex gap-2">
              {config?.icon && <span>{config.icon}</span>}
              <span className="text-sm">{t(config.labelKey)}</span>
            </div>
            <button onClick={() => removeNode(id)} title="Delete Node">
              <IoCloseCircleOutline size={22} className="text-brand-dark" />
            </button>
          </div>
          {config?.infoKey && (
            <p className="text-xs text-brand-light py-1">{t(config.infoKey)}</p>
          )}
        </div>
        <div className="p-2">{children}</div>
      </div>
      <div
        className="node-sub-card"
        style={{
          width: "240px",
        }}
      >
        {handles.map((handle, index) => (
          <BaseHandle
            key={`${id}-handle-${index}`}
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={handle.style}
          />
        ))}
        <div className="flex items-center justify-between bg-brand-primary_lite/70 px-2 py-3 rounded-t-md font-medium text-xs text-brand-dark border-b border-brand-primary/20">
          <GoSidebarExpand size={18} />
          <span>Output</span>
          <RiShareBoxLine size={18} />
        </div>
        <div className="bg-brand-primary_lite/80 text-xs px-2 text-brand-light py-2">
          Type {`"{{"`} in downstream nodes to leverage output fields.
        </div>
        <div className="p-2">
          <div className="flex items-center justify-between text-sm pb-2 font-semibold border-b-2 border-b-brand-light/20">
            <span>Output Fields</span>
            <span>Type</span>
          </div>
          <div className="pt-2">
            {config.outputs.map((op) => (
              <div key={op.outputField} className="mt-2">
                <ControlLabel label={op.outputField} controlType={op.type} />
                <p className="text-xs text-brand-light pr-12">
                  {op.outputFieldDes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
