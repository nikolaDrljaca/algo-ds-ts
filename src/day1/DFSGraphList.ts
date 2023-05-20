function walk(
  graph: WeightedAdjacencyList,
  curr: number,
  needle: number,
  seen: boolean[],
  path: number[],
): boolean {
  //we've seen this and not found it, go elsewhere
  if (seen[curr]) return false;
  //pre
  seen[curr] = true;
  path.push(curr);
  if (curr === needle) {
    return true;
  }
  //recurse, for each vertex in adjacency list
  const adj = graph[curr];

  for (let i = 0; i < adj.length; i++) {
    const edge = adj[i];
    if (walk(graph, edge.to, needle, seen, path)) {
      return true;
    }
  }

  //post
  path.pop();
  return false;
}

export default function dfs(
  graph: WeightedAdjacencyList,
  source: number,
  needle: number,
): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);
  if (path.length === 0) return null;
  return path;
}
