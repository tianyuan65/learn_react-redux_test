/*
    容器组件，它不能我亲自动手写，需要借助react-redux，先下载react-redux库
*/
// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入action
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux，connect是一个函数；connect函数调用的返回值依然是一个函数
import {connect} from 'react-redux'

/*
    1. mapStateToProps函数返回的是一个对象：
    2. 返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3. mapStateToProps用于传递状态
*/
// react-redux帮我调用mapStateToProps函数的时候，已经帮我把状态传过去了，只需要将redux里保存着的状态(state)作为参数传进a函数中，并传递给UI组件即可
function mapStateToProps(state) {
    return {count:state}
}

/*
    1. mapDispacthToProps函数返回的是一个对象：
    2. 返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    3. mapDispacthToProps用于传递操作状态的方法
*/
function mapDispacthToProps(dispatch) {
    // UI组件只要调用jia函数，就会接收到number(它是要加的那个数字)，然后就会通知redux传递action对象(也就是type和data的值)
    return {
        // 通知redux执行加法
        jia:number=>dispatch(createIncrementAction(number)),
        // 通知redux执行减法
        jian:number=>dispatch(createDecrementAction(number)),
        // 通知redux执行异步任务
        jiaAsync:(number,time)=>dispatch(createIncrementAsyncAction(number,time))
    }
}


// 使用connect()()，创建并暴露一个Count容器组件，connect函数再一次调用时，就可以接到容器组件(CountContainer)，传入Count的UI组件作为参数，就会把UI组件和容器组件联系起来(这是固定写法)
// connect在第一次调用时需要传入两个参数，且这两个参数必须都是函数，作用就是传递状态
export default connect(mapStateToProps,mapDispacthToProps)(CountUI)

