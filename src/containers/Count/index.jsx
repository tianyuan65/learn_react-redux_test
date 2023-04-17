/*
    容器组件，它不能我亲自动手写，需要借助react-redux，先下载react-redux库
*/
// 引入Count的UI组件
import CountUI from '../../components/Count'

// 引入connect用于连接UI组件与redux，connect是一个函数；connect函数调用的返回值依然是一个函数
import {connect} from 'react-redux'

// a函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——状态
function a() {
    return {n:900}
}
// b函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value——状态
function b() {
    return {jia:()=>{console.log(1);}}
}


// 使用connect()()，创建并暴露一个Count容器组件，connect函数再一次调用时，就可以接到容器组件(CountContainer)，传入Count的UI组件作为参数，就会把UI组件和容器组件联系起来(这是固定写法)
// connect在第一次调用时需要传入两个参数，且这两个参数必须都是函数
export default connect(a,b)(CountUI)

