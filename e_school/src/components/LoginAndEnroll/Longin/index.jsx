import React, { Component } from 'react'
import axios from 'axios'

import { SERVERURL } from '../../../constantValue'

import { connect } from 'react-redux'
import { changeUserIDAction } from '../../../redux/actions/userId'

import './index.css'
class Login extends Component {
  state = {
     //用户名是否合法
     userNameVerify: true,
     //密码是否合法
     passwordVerify: true,

    //填写信息是否正确(0/错误，1/正确)
    isLoginInfo: 1,
    //登录的错误信息
    loginMsg: "234242"
  }

  //用户对象
  userObj = {
    username: "",
    password: "",
  }
  //验证用户名的正则
  regexp = /^[a-zA-Z0-9]{5,13}$/
  //验证密码的正则
  pwdz = /^[a-zA-Z0-9]{6,13}$/

  //验证用户名的方法
  usernameVerify = (event)=>{
    const {value} = event.target
    if(this.regexp.test(value)){
      this.userObj.username=value
      this.setState({
        userNameVerify:true,
        isLoginInfo:1
      })
    }else{
      this.setState({
        userNameVerify:false,
        isLoginInfo:0,
        loginMsg:"用户名不合法"
      })
    }
  }
  //验证密码的方法
  passwordVerify = (event)=>{
    const {value} = event.target
    if(this.regexp.test(value)){
      this.userObj.password=value
      this.setState({
        passwordVerify:true,
        isLoginInfo:1
      })
    }else{
      this.setState({
        passwordVerify:false,
        isLoginInfo:0,
        loginMsg:"密码不合法"
      })
    }
  }


  //提交表单 登录
  submitFrom = () => {
     this.props.changeUserIDAction(111)
    // const {userNameVerify,passwordVerify} = this.state
    // if(userNameVerify&&passwordVerify){
    //   console.log(this.userObj);
    //   axios.post(SERVERURL+`/user/login`,{
    //     "username": this.userObj.username,
    //     "password": this.userObj.password,
    //   }).then(
    //     res=>{
    //       if(res.data.code===0){
    //         this.setState({
    //           userNameVerify:res.data.msg,
    //           isLoginInfo:1
    //         })
    //       }else{
    //         this.props.changeUserIDAction(res.data.data.id)
    //       }
    //     }
    //   )
    // }
    
  }
  render() {
    const { isLoginInfo, loginMsg } = this.state
    return (
      <div id='login'>
        <input type="text" onBlur={this.usernameVerify} placeholder='用户名' />
        <input type="password" onBlur={this.passwordVerify} placeholder='密码' />
        <p className='forgotPassword'>忘记密码？</p>
        <div id='loginButton' onClick={this.submitFrom}>立即登录</div>
        <span className='prompt' style={{ display: isLoginInfo === 0 ? "block" : "none" }}>{loginMsg}</span>
      </div>
    )
  }
}
export default connect(
  (state) => {
    return {

    }
  },
  {
    changeUserIDAction

  })(Login)