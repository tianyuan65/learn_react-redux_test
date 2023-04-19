/*
    该文件用于汇总所有的reducer为一个总的reducer
 */
// 引入combineReducers用于汇总多个reducer
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import person from './person'

// 使用combineReducers函数将所有的reducer，以对象的方式整合/汇总
    // combineReducers调用时需要传入的对象，就是redux帮我保存的总状态对象
export default combineReducers({
    count,
    people:person
})

