# 虚拟DOM
1. state数据
2. JSX模版
3. 数据+模板组合，生成真实的DOM

1. state 发生改变
2. 数据+模板组合，生成真实的DOM，替换原始的DOM

缺陷：
1. 第一次，第二次都生成完整的DOM
2. 第二次DOM替换第一次DOM，非常耗性能

改进

1. state数据
2. JSX模版
3. 数据+模板组合，生成真实的DOM

> DocumentFragment，文档片段接口，表示一个没有父级文件的最小文档对象。它被作为一个轻量版的 Document 使用，用于存储已排好版的或尚未打理好格式的 XML 片段。最大的区别是因为 <font color=red>DocumentFragment 不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会导致性能等问题。</font>

1. state 发生改变
2. 数据+模板组合，生成真实的DOM
3. 新的DOM（DoucumentFragment）和原始的DOM做比对，找出差异
4. 替换差异DOM

结论：
性能提升不明显：
1. 节省了全部替换的性能开销
2. 多了查找的性能开销

再次改进

1. state数据
2. JSX模版
3. 数据+模板组合，生成虚拟DOM(虚拟DOM就是一个js对象，用它描述真实的DOM)
```javascript
['div', { id: 'demo'}, 'nice']
```

4. 用虚拟DOM生成真实DOM显示
```javascript
<div id="demo">nice</div>
```

5. state发生变化
6. 数据+模板生成新的虚拟`DOM`（极大提升性能）
```javascript
['div', { id: 'demo'}, 'nice change']
```
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是div里的内容（极大提升性能）
8. 直接操作DOM改变div内容

结论：
1. 数据+模板生成新的虚拟`DOM`极大提升性能
2. 虚拟DOM的对比也极大提升性能
3. web application的api很耗性能，详细可以看之前写的文章

比较真实的DOM耗性能，比较js对象不消耗性能

理解：
JSX -> createElement -> 虚拟DOM（JS对象）-> 真实DOM

# 虚拟DOM的diff算法（diffrence）
寻找虚拟DOM的差异



