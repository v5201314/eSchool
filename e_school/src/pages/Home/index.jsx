import React, { Component } from 'react'

import Head from './Head'
import CarouselMap from '../../components/CarouselMap'
import Notify from '../../components/Notify'
import OtherFeatures from '../../components/OtherFeatures'
import NewCourses from './NewCourses'
import ExchangeCenter from './ExchangeCenter'
import WelfareEvents from './WelfareEvents'
import NewToday from './NewToday'
import ActiveTasks from './ActiveTasks'
import CommunityActivities from './CommunityActivities'

import './index.css'
export default class Home extends Component {
  state = {
    //通知栏需要的信息
    notify:{
      content:"“两高”联手建立全国执行与法律监督工作平台,推进新发展",
      to:'',
    },
    //其他功能需要的icon与介绍
    otherFeatures:[
      {
        introduce:'任务',
        src:'/icons/myInfo/形状 43 拷贝 2.png'
      },
      {
        introduce:'课程',
        src:'/icons/myInfo/形状 43.png'
      },
      {
        introduce:'兑换',
        src:'/icons/myInfo/形状 44.png'
      },
      {
        introduce:'社区地图',
        src:'/icons/myInfo/形状 45.png'
      },
      {
        introduce:'个人中心',
        src:'/icons/myInfo/形状 46-2.png'
      },
      {
        introduce:'社区新闻',
        src:'/icons/myInfo/形状 47-2.png'
      },
    ],
    //轮播图需要的数据
    carouselMaps: [
      {
          //图片src
          imgSrc: '/images/图层 1.png',
          //去哪里？
          to: '',
          //图片key
          key: 0,
      },
      {
          //图片src
          imgSrc: '/images/云朵穿心.jpg',
          //去哪里？
          to: '',
          //图片key
          key: 1,
      }, {
          //图片src
          imgSrc: '/images/可爱兔子.jpg',
          //去哪里？
          to: '',
          //图片key
          key: 2,
      },
      {
          //图片src
          imgSrc: '/images/风景 1.jpg',
          //去哪里？
          to: '',
          //图片key
          key: 3,
      }
  ]
  }
  render() {
    const {notify,otherFeatures,carouselMaps} = this.state
    return (
      <div id='home' className='wrapper'>
        <Head/>
        <div style={{height:'29px'}}></div>
        <CarouselMap carouselMaps={carouselMaps}/>
        <Notify notify={notify}/>
        <OtherFeatures otherFeatures={otherFeatures}/>
        <NewCourses/>
        <ExchangeCenter/>
        <WelfareEvents/>
        <NewToday/>
        <ActiveTasks/>
        <CommunityActivities/>
        <div style={{height:'41px'}}></div>
      </div>
    )
  }
}
