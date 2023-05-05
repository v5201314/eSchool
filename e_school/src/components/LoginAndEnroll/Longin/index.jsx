import React, { Component } from 'react'

import {connect} from 'react-redux'
import { changeUserIDAction } from '../../../redux/actions/userId'
import './index.css'
class Login extends Component {
    submitFrom = ()=>{
        this.props.changeUserIDAction(111)
    }
  render() {
    return (
      <div id='login'>
        <input type="text" placeholder='用户名'/>
        <input type="text" placeholder='密码'/>
        <div id='loginButton' onClick={this.submitFrom}>立即登录</div>
      </div>
    )
  }
}
export default connect(
    ()=>{

    },
   {
    changeUserIDAction

    })(Login)