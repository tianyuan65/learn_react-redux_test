/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore，专门用于创建redux中最为核心的store对象
    // 引入redux-thunk后，引入名为applyMiddleware的中间件，中文叫执行中间件
import {createStore,applyMiddleware} from 'redux'

// 引入汇总之后的reducer
import reducer from './reducers/index'

// 引入redux-thunk，用于store接收函数类型的action，并执行里面的异步任务
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

// 暴露store，applyMiddleware必须作为createStore的第二个参数传递进去，且applyMiddleWare也是函数，调用时需要把thunk作为参数传递进去
// 下载并引入开发者工具后，需要向createStore中作为第二个参数传递进去，此时之前引入的applyMiddleware函数就需要作为composeWithDevTools的参数被传递进去，这样开发者工具和thunk都可以正常使用
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))


// 若给store传递的action是一般类型的对象，那store就把action交给reducers来处理；若给store传递的是函数，那store就会调用，再把里面的异步任务交给reducers

