import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeUserIDAction } from '../../../redux/actions/userId'
import { changeTabsIdAction } from '../../../redux/actions/tabsId'

import { permissionsAxios } from '../../../utils/api'

import './index.css'
class QuitLogin extends Component {

  tureQuit = ()=>{
    permissionsAxios("DELETE","/user/logout")
    this.props.changeUserIDAction(0)
    this.props.changeTabsIdAction(0)
  }

  falesQuit = ()=>{
   const obj = this.props.firstRef.current
   const rty = this.props.rtyRef.current
   obj.style.top=document.body.scrollHeight+'px';
   rty.style.display = "none"
  }
  

  render() {
    return (
      <div id='rty' ref={this.props.rtyRef} >

     
      <div ref={this.props.firstRef} id='quitLogin'>
        <p>
            退出不会清空数据，下次登录依然可以使用。
        </p>
        <div className='tureQuit' onClick={this.tureQuit} >确认退出</div>
        <div className='falesQuit'onClick={this.falesQuit}>取消</div>
      </div>
      </div>
    )
  }
}

export default connect(
  (state)=>{
    return{
      isShowQuit:state.isShowQuit
    }
  },
  {
    changeUserIDAction,
    changeTabsIdAction
  }
)(QuitLogin)