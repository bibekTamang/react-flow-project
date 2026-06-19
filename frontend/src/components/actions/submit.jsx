import React, { useState } from "react";
import { useStore } from "../../store/store";
import { useNotificationStore } from "../../store/notificationStore";
import { pipelineService } from "../../services/pipelineService";
import { PiRocketLaunch } from "react-icons/pi";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const addNotification = useNotificationStore(
    (state) => state.addNotification,
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (nodes.length === 0) {
      addNotification("Cannot submit an empty pipeline.", "warning");
      return;
    }

    setIsLoading(true);

    try {
      const data = await pipelineService.parsePipeline(nodes, edges);
      const successMessage = `Nodes:  ${data.num_nodes}
Edges:  ${data.num_edges}
DAG:  ${data.is_dag ? "Yes" : "No (Contains cycle)"}`;

      addNotification(
        successMessage,
        data.is_dag ? "success" : "warning",
        5000,
      );
    } catch (error) {
      addNotification(error.message || "Failed to analyze pipeline.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      disabled={isLoading}
      className="btn-primary flex items-center gap-3"
    >
      <PiRocketLaunch />
      {isLoading ? "Analyzing..." : "Submit Pipeline"}
    </button>
  );
};
