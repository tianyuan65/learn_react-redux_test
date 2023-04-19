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
            return [data,...preState]
            // 默认返回的是preState
        default:
            return preState;
    }
}