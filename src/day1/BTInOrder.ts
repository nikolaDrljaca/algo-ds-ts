function walk(curr: BinaryNode<number> | null, path: number[]) {
  if (!curr) {
    return;
  }
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);
}

function walkFn(
  curr: BinaryNode<number> | null,
  onEach: (value: number) => void,
) {
  if (!curr) {
    return;
  }
  walkFn(curr.left, onEach);
  onEach(curr.value);
  walkFn(curr.right, onEach);
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = [];
  walk(head, path);
  console.log(path);
  walkFn(head, (value) => {
    console.log(value);
  });
  return path;
}
