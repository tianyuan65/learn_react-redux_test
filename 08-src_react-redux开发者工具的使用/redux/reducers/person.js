/*
    该文件用于创建一个为Person组件服务的reducer
 */
import { ADD_PERSON } from "../constant"; 

// 初始化人的列表
const initState=[{id:'001',name:'tom',age:10}]
export default function personReducer(preState=initState,action) {
    // console.log('@');
    const {type,data}=action
    switch (type) {
        // 若添加一个人
        case ADD_PERSON:
            // 返回最新的状态和保存之前的状态
            return [data,...preState]
            // 这么写的意思是使用unshift()方法把最新的状态塞进preState这个数组中，
                // 这会导致personReducer这个原先是纯函数的函数成为不纯的函数
            // redux的reducer函数必须是一个纯函数
            // preState.unshift(data)
            // return preState
        default:
            // 默认返回的是preState
            return preState;
    }
}