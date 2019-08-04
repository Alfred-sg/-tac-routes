import travser from '../../utils/travser';

interface Child {
  [propName: string]: any;
}

describe("test travser", () => {
  // 转换。TODO: level 没有加到子节点上
  test('transform', () => {
    const data = travser([{
      label: "label",
      value: "value",
      children: [{
        label: "child-label",
        value: "child-value",
      }]
    }], (child: Child) => {
      return child;
    });

    expect(data).toEqual([
      { label: 'label', value: 'value', children: [
        {
          label: "child-label",
          value: "child-value"
        }
      ], level: 1 }
    ]);
  });

  // 扁平化。TODO: 节点的顺序有待优化
  test('flattern', () => {
    const data: any[] = [];
    travser([{
      label: "label",
      value: "value",
      children: [{
        label: "child-label",
        value: "child-value",
      }]
    }], (child: Child) => {
      data.push({
        label: child.label,
        value: child.value
      });
    });

    expect(data).toEqual([
      { label: 'child-label', value: 'child-value' },
      { label: 'label', value: 'value' }
    ]);
  });
});