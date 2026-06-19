import { apiClient } from './apiClient';

export const pipelineService = {
  parsePipeline: (nodes, edges) => {
    return apiClient('/pipelines/parse', {
      method: 'POST',
      body: { nodes, edges },
    });
  },
};