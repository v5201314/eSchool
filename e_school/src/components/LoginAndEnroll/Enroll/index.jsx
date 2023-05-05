import React, { Component } from 'react'

import './index.css'
export default class Enroll extends Component {
  state = {
    //用户名是否合法
    userNameVerify: true,
    //密码是否合法
    passwordVerify: true,
    //两次密码是否相等
    ConfirmPasswordVerify: true,
    //手机号是否合法
    phoneVerify: true,

    //用户名是否重复
    userNameIsRepeat:false
  }

  //用户对象
  userObj = {
    userName: "",
    password: "",
    phone: "",
    graphicCaptcha:""
  }

  //验证用户名的正则
  regexp = /^[a-zA-Z0-9]{5,13}$/
  //验证手机号的正则
  patt = /^[1][3-9][\d]{9}/
  //验证密码的正则
  pwdz = /^[a-zA-Z0-9]{6,13}$/

  //验证表单信息的方法
  formVerify = (type, event) => {
    const { value } = event.target
    switch (type) {
      //用户名的验证
      case "userNameVerify":
        if (this.regexp.test(value)) {
          //发起 axios 请求
          this.setState({ userNameVerify: true })
          
        }

        break;
      //密码的验证
      case "passwordVerify":
        if (this.pwdz.test(value)) {
          this.setState({ passwordVerify: true })
          //存储密码到 用户对象
          this.userObj.password = value;
        } else {
          this.setState({ passwordVerify: false })
        }
        break;
      //确认密码
      case "ConfirmPasswordVerify":
        if (this.userObj.password === value) {
          this.setState({ ConfirmPasswordVerify: true })
        } else {
          this.setState({ ConfirmPasswordVerify: false })
        }
        break;
      //手机号的验证
      case "phoneVerify":
        if (this.patt.test(value)) {
          this.setState({ phoneVerify: true })
          this.userObj.phone = value;
        } else {
          this.setState({ phoneVerify: false })
        }
        break;
      default:
        break;
    }
  }


  //添加图形验证码
  setGraphicCaptcha =(event)=>{
    this.userObj.graphicCaptcha= event.target.value
  }


  //提交表单，注册
  submitForm = ()=>{
    const { userNameVerify, phoneVerify, passwordVerify, ConfirmPasswordVerify,userNameIsRepeat } = this.state
    if(!userNameIsRepeat&&phoneVerify&&ConfirmPasswordVerify&&passwordVerify&&userNameVerify){
      //如果满足所有条件就提交
    }
  }

  render() {
    const { userNameVerify, phoneVerify, passwordVerify, ConfirmPasswordVerify,userNameIsRepeat } = this.state
    return (
      <div id='enroll'>
        <div>
          <div>
            <p>
              <span>*</span>用户名:
            </p>
          </div>

          <input type="text" onBlur={(event) => this.formVerify("userNameVerify", event)} placeholder='仅包含字母、数字(5-13位)' />
          <p style={{ display: userNameVerify === true ? 'none' : 'block' }} className='prompt'>{userNameIsRepeat?"用户名重复":"格式不正确"}</p>
        </div>
        <div>
          <div>
            <p>
              <span>*</span>密码:
            </p>
          </div>

          <input type="password" onBlur={(event) => this.formVerify("passwordVerify", event)} placeholder='包含字母、数字(6-13位)' />
          <p style={{ display: passwordVerify === true ? 'none' : 'block' }} className='prompt'>格式不正确</p>
        </div>
        <div>
          <div>
            <p>
              <span>*</span>确认密码:
            </p>
          </div>

          <input type="password" onBlur={(event) => this.formVerify("ConfirmPasswordVerify", event)} placeholder='请再次输入密码' />
          <p style={{ display: ConfirmPasswordVerify === true ? 'none' : 'block' }} className='prompt'>密码不同</p>
        </div>
        <div>
          <div>
            <p>
              <span>*</span>手机号:
            </p>
          </div>

          <input type="text" onBlur={(event) => this.formVerify("phoneVerify", event)} placeholder='请输入手机号' />
          <p style={{ display: phoneVerify === true ? 'none' : 'block' }} className='prompt'>格式不正确</p>
        </div>


        <div>
          <div>
            <p>
              <span>*</span>图形验证码:
            </p>
          </div>

          <input type="text" onBlur={this.setGraphicCaptcha} placeholder='图形验证码' />
        </div>
        <div>
          <div>
            <p>
              <span>*</span>短信验证码:
            </p>
          </div>

          <input type="text" placeholder='短信验证码' />
          <button>获取验证码</button>
        </div>
        <div id='enrollButton' onClick={this.submitForm}>
          立即注册
        </div>
      </div>
    )
  }
}
