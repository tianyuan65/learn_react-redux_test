import React, { Component } from 'react'


export default class Count extends Component {
    // 初始化状态里标识求和的值，属性名为count，其值为0
    state={bagName:'Hermes'}
    
    // 加法
    increment=()=>{
        //获取用户选择的数字 
        const {value}=this.selectNumber
        this.props.jia(value*1)
    }
    // 减法
    decrement=()=>{
      const {value}=this.selectNumber
      this.props.jian(value*1)
    }
    // 当前求和为奇数时加
    incrementIfOdd=()=>{
        const {value}=this.selectNumber
        if (this.props.count %2 !== 0) {
          this.props.jia(value*1)
        }
    }
    // 异步加
    incrementIfAsync=()=>{
        const {value}=this.selectNumber
        this.props.jiaAsync(value*1,500)
    }

  render() {
    // console.log('UI组件接收到的props是',this.props);
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementIfAsync}>异步加</button>

      </div>
    )
  }
}
