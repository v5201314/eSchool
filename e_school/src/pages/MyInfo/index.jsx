import React, { Component } from 'react'


import UserInfo from './UserInfo'
import TimeInfo from './TimeInfo/'
import OrdersInfo from './OrdersInfo'
import Notify from '../../components/Notify'
import './index.css'
export default class MyInfo extends Component {
  render() {
    return (
      <div id='MyInfo' className='wrapper'>
        <UserInfo/>
        <TimeInfo/>
        <OrdersInfo/>
        <Notify/>
        <div className='otherFeatures'></div>
      </div>
    )
  }
}
