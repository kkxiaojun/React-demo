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

如果没有JSX，我们也可以写html页面，只是需要使用createElement直接写，JSX模版只是为了方便写模板

# 虚拟DOM的diff算法（diffrence）
目的：寻找原始虚拟DOM和新的虚拟DOM的差异

1. 同层比对，只要父节点不一样，就替换，从上往下
2. keys，提升虚拟DOM比对的性能，设置为index会导致虚拟DOM对比不稳定（因为无法保证新的虚拟DOM的key与原始的虚拟DOM的key保持一致）
```javascript
// 用index作为key
 this.state.mapList.map((item, index) => {
  return (
    <TodoItem 
    content={item} 
    index={index} 
    key={index}
    deleteItem={this.btnDelete} />
  )
})

// key值与当前项的对应关系：
a: 0
b: 1
c: 2

// 如果删除 a , 原始虚拟dom中key值与当前项的对应关系
b:1
c:2

// 但是重新计算的的虚拟dom中key值与当前项目的对应关系为
b:0
c:1

// 会发现，原始虚拟dom与新的虚拟dom，key值对应关系不一致，就会导致不稳定

```
需要补充：
1. 图文例子说明
2. 简单代码描述
3. 总结

猜想，是用key值生成一张缓存映射表，当新的虚拟dom生成时，就根据key去缓存映射表中找出对应的（命中缓存，304），进行比较。如果找不到，就按正常的流程找。

# 

