import React from 'react'

// export default function Hello(person1) {
//   console.log(person1)
//   return <div>这是 Hello 组件 -- {person1.name} -- {person1.age}</div>
// }

export default class Hello extends React.Component{

  constructor(){
    super()
    //私有属性
    this.state = {
      msg: '我是状态组件'
    }

  }

  render(){
  return <div>这是 Hello 组件 -- {this.props.name} -- {this.props.age} -- {this.state.msg}</div>//this 表示实例对象
  }
}