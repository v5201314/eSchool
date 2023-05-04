import React, { Component } from 'react'

import './index.css'
export default class Notify extends Component {
  render() {
    return (
      <div id='notify'>
        <img src="/icons/通知.png" alt="notify-icon" />
        <div className='notifyContent'>平台最新分享规则更新预告</div>
        <div className='seeDetails'>查看详情 &gt;</div>
      </div>
    )
  }
}
