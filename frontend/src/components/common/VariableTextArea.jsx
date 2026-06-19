import React, { useEffect, useRef } from "react";
import { Textarea } from "@headlessui/react";
import { ControlLabel } from "./ControlLabel";
import { useStore } from "../../store/store";

export const VariableTextarea = ({
  id,
  label,
  value,
  onChange,
  registerVariables = true,
}) => {
  const textareaRef = useRef(null);
  const prevVariablesRef = useRef("");
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  useEffect(() => {
    if (!registerVariables) {
      if (prevVariablesRef.current !== "[]") {
        prevVariablesRef.current = "[]";
        updateNodeField(id, "variables", []);
      }
      return;
    }

    const safeValue = value || "";
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [];
    let match;

    while ((match = regex.exec(safeValue)) !== null) {
      matches.push(match[1]);
    }

    const uniqueVariables = [...new Set(matches)];
    const stringifiedVars = JSON.stringify(uniqueVariables);

    if (prevVariablesRef.current !== stringifiedVars) {
      prevVariablesRef.current = stringifiedVars;
      updateNodeField(id, "variables", uniqueVariables);

      const currentEdges = useStore.getState().edges;
      const orphanedEdges = currentEdges.filter(
        (edge) =>
          edge.target === id &&
          !uniqueVariables.includes(edge.targetHandle?.replace(`${id}-`, "")),
      );

      orphanedEdges.forEach((edge) => {
        useStore.getState().removeEdge(edge.id);
      });
    }
  }, [value, registerVariables, updateNodeField, id]);

  return (
    <div className="mt-2">
      <ControlLabel label={label} controlType="Text" />
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => updateNodeField(id, "text", e.target.value)}
        className="nodrag w-full resize-none overflow-hidden rounded-md border border-gray-200 bg-gray-50 p-2 text-xs focus:outline-none focus:ring-1 focus:ring-brand-primary"
        placeholder={
          registerVariables
            ? "Type {{variable}} here E.g, Question: {{input_0.text}}"
            : "Answer the question based on Context in a proffesional manner."
        }
      />
    </div>
  );
};
