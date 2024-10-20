const INVALID_ARGUMENT = 'INVALID_ARGUMENT';

const dfs = (graph: any): string[] => {
  if (typeof graph !== 'object' || graph === null) {
    throw new Error(INVALID_ARGUMENT);
  }

  const result: string[] = [];
  let counterNoNeighbors: number = 0;
  const visitNode = (node: string) => {
    result.push(node);
    const neighbors = graph[node] || [];
    if (neighbors.length > 0) {
      for (const neighbor of neighbors) {
        visitNode(neighbor);
      }
    } else {
      counterNoNeighbors += 1;
    }
  };

  for (const node in graph) {
    if (!result.includes(node)) {
      visitNode(node);
    }
  }
  const firstElem: string[] = [];
  if (result.length === counterNoNeighbors) {
    firstElem.push(result[0]);
    return firstElem;
  }
  return result;
};

export default dfs;
