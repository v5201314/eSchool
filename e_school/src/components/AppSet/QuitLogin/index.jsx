import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css'
class QuitLogin extends Component {

  render() {
    return (
      <div ref={this.props.firstRef} id='quitLogin'>
        <p>
            退出不会清空数据，下次登录依然可以使用。
        </p>
        <input type="button"/>
        <input type="button"/>
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

  }
)(QuitLogin)