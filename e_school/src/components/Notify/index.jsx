import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.css'
export default class Notify extends Component {
  render() {
    let {notify} = this.props
    //如果通知标题太长，就省略显示
    notify.content = notify.content.length>18?notify.content.slice(0,17)+'...':notify.content
    return (
      <div id='notify'>
        <img src="/icons/通知.png" alt="notify-icon" />
        <div className='notifyContent'>{notify.content}</div>
        <Link to={notify.to}>
          <div className='seeDetails'>查看详情 &gt;</div>
        </Link>
      </div>
    )
  }
}
