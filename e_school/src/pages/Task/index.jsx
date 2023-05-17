import React, { Component } from 'react'

import SearchBox from '../../components/SearchBox'
import CarouselMap from '../../components/CarouselMap'
import Notify from '../../components/Notify'
import ContentArea from './ContentArea'

import './index.css'
export default class Task extends Component {
  state = {
    //轮播图需要的数据
    carouselMaps: [
      {
        //图片src
        imgSrc: '/images/图层 13.png',
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
    ],
    //通知栏需要的信息
    notify: {
      content: "“两高”联手建立全国执行与法律监督工作平台,推进新发展",
      to: '',
    },
  }
  render() {
    const { carouselMaps,notify } = this.state
    return (
      <div id='task' className='wrapper'>
        <SearchBox />
        <div className='taskMain'>
          <CarouselMap carouselMaps={carouselMaps} />
          <Notify notify={notify}/>
          <ContentArea/>
        </div>
      </div>
    )
  }
}
