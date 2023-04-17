import React, { Component } from 'react'
// 引入store用于获取redux中保存的状态
import store from '../../redux/store'

export default class Count extends Component {
    // 初始化状态里标识求和的值，属性名为count，其值为0
    state={bagName:'Hermes'}

    // componentDidMount(){
    //   // 监测redux中保存的状态任何的变化，只要出现变化，就调用render
    //   store.subscribe(()=>{
    //     // 假更新，数据没动，但render重新渲染，就是强制更新
    //     // 只要有setState并调用，就算里面什么也没有传递，render也会重新渲染
    //     this.setState({})
    //   })
    // }
    
    // 加法
    increment=()=>{
        //获取用户选择的数字 
        const {value}=this.selectNumber
        store.dispatch({type:'increment',data:value*1})
    }
    // 减法
    decrement=()=>{
      const {value}=this.selectNumber
      store.dispatch({type:'decrement',data:value*1})
    }
    // 当前求和为奇数时加
    incrementIfOdd=()=>{
        const {value}=this.selectNumber
        const count=store.getState()
        if(count %2 !== 0){
          store.dispatch({type:'increment',data:value*1})
        }
    }
    // 异步加
    incrementIfAsync=()=>{
        const {value}=this.selectNumber
        setTimeout(()=>{
          store.dispatch({type:'increment',data:value*1})
        },500)
    }

  render() {
    return (
      <div>
        <h1>当前求和为{store.getState()}</h1>
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
