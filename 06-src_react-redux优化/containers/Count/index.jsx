/*
    容器组件，它不能我亲自动手写，需要借助react-redux，先下载react-redux库
*/

import React, { Component } from 'react'
// 引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux，connect是一个函数；connect函数调用的返回值依然是一个函数
import {connect} from 'react-redux'

// 定义UI组件
class Count extends Component {
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
        {/* 读取状态 */}
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

// 使用connect()()，创建并暴露一个Count容器组件，connect函数再一次调用时，就可以接到容器组件(CountContainer)，传入Count的UI组件作为参数，就会把UI组件和容器组件联系起来(这是固定写法)
// connect在第一次调用时需要传入两个参数，且这两个参数必须都是函数，作用就是传递状态
export default connect(
    // 这个state就是redux帮我保存的状态
    state=> ({count:state}),

    // mapDispatchToProps的一般写法
    /*dispatch=> ({
        // 通知redux执行加法
        jia:number=>dispatch(createIncrementAction(number)),
        // 通知redux执行减法
        jian:number=>dispatch(createDecrementAction(number)),
        // 通知redux执行异步任务
        jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    })*/

    // mapDispatchToProps的简写，只需要给在UI组件中调用的函数传递对应的action对象(同步的话返回的是对象；异步的话返回的就是函数)，react-redux中自动帮我调dispatch方法
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction
    }
)(Count)

