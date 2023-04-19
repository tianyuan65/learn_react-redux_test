import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {

    addPerson=()=>{
        // 获取用户的输入
        const name=this.nameNode.value
        const age=this.ageNode.value*1
        const personObj={id:nanoid(),name,age}
        // console.log(personObj);  //{id: 'AHPZwlqeZEnZ9FX7qH7sL', name: 'tom', age: '12'}
        this.props.jiaRen(personObj)
        this.nameNode.value=''
        this.ageNode.value=''
    }

    render() {
        return (
        <div>
            <h2>我是Person组件,上方组件求和为{this.props.he}</h2>
            <input ref={c=>this.nameNode=c} type="text" placeholder='输入名字'/>
            <input ref={c=>this.ageNode=c} type="text" placeholder='输入年龄'/>
            <button onClick={this.addPerson}>添加</button>
            <ul>
                {
                    this.props.rens.map((p)=>{
                        return <li key={p.id}>{p.name}--{p.age}</li>
                    })
                }
            </ul>
        </div>
        )
    }
}

export default connect(
    // 这个state是redux帮我保存的状态
    state=>({rens:state.rens,he:state.he}),  //映射状态
    {jiaRen:createAddPersonAction}  //映射操作状态的方法
)(Person)
