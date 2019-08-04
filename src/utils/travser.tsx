interface Node {
  children?: Array<Node>;
  [propName: string]: any;
}

interface NewNode {
  [propName: string]: any;
}

/**
 * 递归处理数组数据，对节点进行数据转换处理
 * @param {array} arr 数组
 * @param {function} transform 转换回调
 */
function loop(arr: Array<Node>, transform: Function, level: number): Array<NewNode> {
  let result: Array<NewNode> = [];

  arr.forEach(node => {
    if (!node) return;
    if (node.children && node.children.length) {
      let newChildren = loop(node.children, transform, level + 1);
      let newNode: NewNode | undefined = transform({ ...node, level }, newChildren);
      if (newNode) result.push(newNode);
    } else {
      let newNode: NewNode | undefined = transform({ ...node, level });
      if (newNode) result.push(newNode);
    }
  });

  return result;
}

/**
 * 遍历树或多棵树
 * @param {array|object} data 树形数据或多棵树数据
 */
export default function trasver(data: Array<Node> | Node, transform: Function) {
  if (Array.isArray(data)) {
    return loop(data, transform, 1);
  } else if (data) {
    return loop([data], transform, 1)[0];
  }
  return null;
}
