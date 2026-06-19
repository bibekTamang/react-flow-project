from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with your frontend URL (e.g., "http://localhost:3000")
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the expected structure of the incoming JSON payload
class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: PipelineData):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # 1. Create an Adjacency List for the graph
    # Map each node ID to a list of target node IDs it points to
    adj_list = {node["id"]: [] for node in nodes}
    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source in adj_list:
            adj_list[source].append(target)

    # 2. Determine if the graph is a DAG using Depth-First Search (DFS)
    visited = set()
    rec_stack = set() # Keeps track of the current path to detect cycles

    def is_cyclic(node_id):
        # Mark the current node as visited and add to recursion stack
        visited.add(node_id)
        rec_stack.add(node_id)

        # Visit all neighbors
        for neighbor in adj_list.get(node_id, []):
            if neighbor not in visited:
                if is_cyclic(neighbor):
                    return True
            elif neighbor in rec_stack:
                # If neighbor is already in the current path, we found a cycle!
                return True

        # Remove the node from recursion stack before returning
        rec_stack.remove(node_id)
        return False

    # Run the cycle check for every node (handles disconnected subgraphs)
    is_dag = True
    for node in nodes:
        if node["id"] not in visited:
            if is_cyclic(node["id"]):
                is_dag = False
                break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }