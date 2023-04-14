import React from "react";
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

// 在index.js中开始监测，只要redux中的状态发生任何的变化，把整个App组件重新渲染一次，如此，App中的所有的子组件都需要重新渲染
store.subscribe(()=>{
    ReactDOM.render(<App/>,document.getElementById('root'))
})
