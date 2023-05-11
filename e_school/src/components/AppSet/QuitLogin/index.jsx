import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeUserIDAction } from '../../../redux/actions/userId'
import { changeTabsIdAction } from '../../../redux/actions/tabsId'

import './index.css'
class QuitLogin extends Component {

  tureQuit = ()=>{
    this.props.changeUserIDAction(0)
    this.props.changeTabsIdAction(0)
  }

  falesQuit = ()=>{
   const obj = this.props.firstRef.current
   obj.style.top=document.body.scrollHeight+'px';
  }

  render() {
    return (
      <div ref={this.props.firstRef} id='quitLogin'>
        <p>
            退出不会清空数据，下次登录依然可以使用。
        </p>
        <div className='tureQuit' onClick={this.tureQuit} >确认退出</div>
        <div className='falesQuit'onClick={this.falesQuit}>取消</div>
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