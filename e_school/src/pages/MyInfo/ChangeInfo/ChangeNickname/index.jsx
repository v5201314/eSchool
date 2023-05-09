import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css'
class ChangeNickname extends Component {
  state = {
    disabledValue:true
  }

  myRef=React.createRef()

  verifyNIck = ()=>{
    if(this.myRef.current.value.trim()===''){
      this.setState({disabledValue:true})
    }else{
      this.setState({disabledValue:false})
    }
  }

  submitNickname = ()=>{
    //在此处发起 axios 请求
    console.log(this.myRef.current.value);
  }

  render() {
    const {userId} = this.props
    const {disabledValue} = this.state
    console.log(userId);
    return (
      <div id='changeNickname'>
        <input ref={this.myRef} type="text" onBlur={this.verifyNIck} placeholder='取一个响亮的名字吧!'/>
        <button disabled={disabledValue}  className={disabledValue?"mainButtonFlase":"mainButton"} onClick={this.submitNickname}>提交</button>
      </div>
    )
  }
}


export default connect(
  (state) => {
    return {
      userId:state.userId
    }
  },
  {

  }
)(ChangeNickname)