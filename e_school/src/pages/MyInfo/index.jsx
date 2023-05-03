import React, { Component } from 'react'


import UserInfo from './UserInfo'
import TimeInfo from './TimeInfo/'
import './index.css'
export default class MyInfo extends Component {
  render() {
    return (
      <div id='MyInfo' className='wrapper'>
        <UserInfo/>
        <TimeInfo/>
        <div className='ordersInfo'></div>
        <div className='notify'></div>
        <div className='otherFeatures'></div>
      </div>
    )
  }
}
