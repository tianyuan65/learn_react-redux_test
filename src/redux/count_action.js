/*
    该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'

// 加法，同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction=data=> ({type:INCREMENT,data})
// 减法，同步action，就是指action的值为Object类型的一般对象
export const createDecrementAction=data=>({type:DECREMENT,data})
// 异步action，就是指action的值为函数
    //为什么异步action的返回值必须是函数类型的？ 因为其他类型的值无法开启一个异步任务，但在函数中就可以规定
    // 异步action中一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction=(data,time)=>{
    // 这是个异步action
    return (dispatch)=>{
        // 这是定时器，也就是异步任务
        setTimeout(()=>{
            // 通知redux，加data
            dispatch(createIncrementAction(data))
        },time)
    }
}

