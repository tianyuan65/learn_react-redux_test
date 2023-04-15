/*
    1. 该文件用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数，它从store接收参数，进行加工后，给store返回一个新的函数
    2. reducer函数会接收两个参数，分别为之前的状态(preState)和动作对象(action)
*/
const initState=0  //初始化状态
export default function countReducer(preState=initState,action) {
    // 从action对象中获取type和data
    const {type,data}=action
    // 根据type决定如何加工数据
    switch (type) {
        // 如果是加
        case 'increment':
            // console.log('@');
            return preState + data
        // 如果是减
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}