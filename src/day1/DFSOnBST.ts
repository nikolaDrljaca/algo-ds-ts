function walk(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) {
    return false;
  }
  if (curr.value === needle) {
    return true;
  }
  if (needle <= curr.value) {
    return walk(curr.left, needle);
  }
  return walk(curr.right, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
  return walk(head, needle);
}
