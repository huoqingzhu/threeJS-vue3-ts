# Three.js 学习记录

 [线上预览地址](http://123.56.85.24/trees/#/home)

# 引入 three.js

npm i -s three

# 使用three.js

tree.js 在vue使用鼠标改变大小时会报错误,错误如下
Unable to preventDefault inside passive event listener invocation.
解决方法：
在node_modules找到three/examples/jsm/controls/OrbitControls.js
将
`('wheel', onMouseWheel, false)`
替换成
`('wheel', onMouseWheel, { passive: false })`
