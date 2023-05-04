import React, { Component } from 'react'


import UserInfo from './UserInfo'
import TimeInfo from './TimeInfo/'
import OrdersInfo from './OrdersInfo'
import Notify from '../../components/Notify'
import OtherFeatures from '../../components/OtherFeatures'
import './index.css'
export default class MyInfo extends Component {
  state = {
    notify:'',
    otherFeatures:[
      {
        introduce:'任务发布',
        src:'/icons/myInfo/形状 43 拷贝 2.png'
      },
      {
        introduce:'接收任务清单',
        src:'/icons/myInfo/形状 43.png'
      },
      {
        introduce:'任务积分统计',
        src:'/icons/myInfo/形状 44.png'
      },
      {
        introduce:'学习记录',
        src:'/icons/myInfo/形状 45.png'
      },
      {
        introduce:'学习积分统计',
        src:'/icons/myInfo/形状 46-2.png'
      },
      {
        introduce:'学习报名',
        src:'/icons/myInfo/形状 47-2.png'
      },
      {
        introduce:'同学录',
        src:'/icons/myInfo/形状 48.png'
      },
      {
        introduce:'学习积分统计',
        src:'/icons/myInfo/形状 46.png'
      },
      {
        introduce:'学习报名',
        src:'/icons/myInfo/形状 47.png'
      },
    ]
  }
  render() {
    const {otherFeatures} = this.state
    return (
      <div id='MyInfo' className='wrapper'>
        <UserInfo/>
        <TimeInfo/>
        <OrdersInfo/>
        <Notify/>
        <OtherFeatures otherFeatures={otherFeatures}/>
      </div>
    )
  }
}
