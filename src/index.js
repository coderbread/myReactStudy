import React from 'react'
import ReactDom from 'react-dom'


// const div1 = React.createElement('div', {title: 'its a div'}, '这是一个div')
let name = 'Bread'
const div1 = <div title = "its a div" >{name},这是一个div</div>

ReactDom.render(div1, document.getElementById('app1'))



let x = 1
let y = 2
const arr1 = [
  <h3 key = "00">你好</h3>,
  <h5 key = "01">世界</h5>
]

//将普通字符串数组转为JSX数组并渲染到页面上
const arrStr = ['刘德华','周杰伦','郭富城','渣渣辉']

//遍历数组,并返回JSX形式的字符串
const tempStr1 = arrStr.map(item => <h5 key={item}>{item}</h5>) 
//Each child in a list should have a unique "key" prop.

ReactDom.render(<div>
  <hr/>
  <span>{x + y}</span>
  <hr/>
  {arr1}
  <hr/>
  {tempStr1}
  <hr/>
  <p className="myPra" title={x}>JSX的一些注意点：className</p>
</div>, document.getElementById('app2'))



//组件创建并父向子传值
const person1 = {
  name: 'Bread',
  age: '18'
}

import Hello from '@/components/Hello'

ReactDom.render(<div>
  <h3>类组件</h3>
  <Hello {...person1}></Hello>
</div>, document.getElementById('app3-组件'))