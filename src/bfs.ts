const INVALID_ARGUMENT = 'INVALID_ARGUMENT';

const bfs = (graph: any): string[] => {
  if (typeof graph !== 'object' || graph === null) {
    throw new Error(INVALID_ARGUMENT);
  }
  const result: string[] = [];
  const queue: string[] = ['A'];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      result.push(node);
      const neighbors = graph[node] || [];
      queue.push(...neighbors);
    }
  }
  return result;
};

export default bfs;
