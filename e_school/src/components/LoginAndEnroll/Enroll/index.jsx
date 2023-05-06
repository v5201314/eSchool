import React, { Component } from 'react'

import axios from 'axios'

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
    userNameIsRepeat: false,

    //验证码的src
    verifyCodeSrc: "http://192.168.1.103:10010/common/verify/",

    //验证码是否错误(0/错误，1/正确)
    isVerifyCode: 1,

    //注册返回的信息
    enrollMsg: ""
  }


  //用户对象
  userObj = {
    userName: "",
    password: "",
    phone: "",
    graphicCaptcha: ""
  }

  //点击更新验证码
  updateVerifyCode = (event) => {
    //给验证码的src后面拼接上 时间戳，刷新验证码
    const verifyCodeSrc = "http://192.168.1.103:10010/common/verify/" + new Date().getTime()
    this.setState({ verifyCodeSrc })
  }

  //验证用户名的正则
  regexp = /^[a-zA-Z0-9]{5,13}$/
  //验证手机号的正则
  patt = /^[1][3-9][\d]{9}/
  //验证密码的正则
  pwdz = /^[a-zA-Z0-9]{6,13}$/

  //验证表单信息的方法
  //验证通过，就把数据存到 userObj 中
  formVerify = (type, event) => {
    const { value } = event.target
    switch (type) {
      //用户名的验证
      case "userNameVerify":
        if (this.regexp.test(value)) {
          axios.get("http://192.168.1.103:10010/user",{
            params:{
                username:value
            }
          }).then(
            res=>{
              if(res.data.code===0){
                this.setState({userNameIsRepeat:true})
              }else{
                this.setState({userNameIsRepeat:false})
                this.userObj.userName=value
              }
            }
          )
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
  setGraphicCaptcha = (event) => {
    this.userObj.graphicCaptcha = event.target.value
  }


  //提交表单，注册
  submitForm = () => {
    const { userNameVerify, phoneVerify, passwordVerify, ConfirmPasswordVerify, userNameIsRepeat } = this.state
    if (!userNameIsRepeat && phoneVerify && ConfirmPasswordVerify && passwordVerify && userNameVerify) {
      //如果满足所有条件就提交 
      axios.get(`http://192.168.1.103:10010/common/inVerify`, {
        params: {
          verify: this.userObj.graphicCaptcha,
        }

      }).then(
        response => {
          if (response.data.code === 0) {
            this.setState({
              isVerifyCode: 0,
              enrollMsg: response.data.msg,
            })
            const verifyCodeSrc = "http://192.168.1.103:10010/common/verify/" + new Date().getTime()
            this.setState({ verifyCodeSrc })
          } else {
            //继续提交
            axios.post(`http://192.168.1.103:10010/user/save`, {             
                "username": this.userObj.userName,
                "password": this.userObj.password,
                "phoneNumber": this.userObj.phone,    
            }).then(
              res=>{
                if(res.data.code === 0){
                  this.setState({
                    isVerifyCode: 0,
                    enrollMsg: res.data.msg,
                  })
                }else{
                  this.setState({
                    isVerifyCode: 3,
                    enrollMsg: res.data.msg,
                  })
                }
              }
            )
    }

  },
      )
}
  }

render() {
  const { isVerifyCode, userNameVerify, phoneVerify, passwordVerify, ConfirmPasswordVerify, userNameIsRepeat, verifyCodeSrc, enrollMsg } = this.state
  return (
    <div id='enroll'>
      <div>
        <div>
          <p>
            <span>*</span>用户名:
          </p>
        </div>

        <input type="text" onBlur={(event) => this.formVerify("userNameVerify", event)} placeholder='仅包含字母、数字(5-13位)' />
        <p style={{ display: userNameVerify === true ? 'none' : 'block' }} className='prompt'>{userNameIsRepeat ? "用户名重复" : "格式不正确"}</p>
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
        <img src={verifyCodeSrc} alt="" onClick={this.updateVerifyCode} className='verifyCode' />
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
      <span className='prompt' style={{ display: isVerifyCode === 0||isVerifyCode===3 ? "block" : "none" ,color:isVerifyCode===3?"green":"red"}}>{enrollMsg}</span>
    </div>
  )
}
}
