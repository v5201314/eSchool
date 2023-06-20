import React, { Component, Fragment } from 'react'

import Head from './Head'
import CarouselMap from '../../components/CarouselMap'
import LifeServices from './LifeServices'
import HotShopping from './HotShopping'
import HotFrame from '../../components/HotFrame'

import './index.css'
export default class Exchange extends Component {
  state = {
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
    ],
    //热度框需要的数据
    hotFrame: [
      {
        title: "生活类",
        content: "厨房配件/生活用品",
        imgSrc: "/icons/exChange/组 3.png"
      },
      {
        title: "其他类",
        content: "游戏娱乐/出行旅游",
        imgSrc: "/icons/exChange/组 3.png"
      }
    ]
  }

  render() {
    const { carouselMaps,hotFrame } = this.state
    return (
      <div id='Exchange' className='wrapper'>
        <Head />
        <div className='box'>
          <CarouselMap carouselMaps={carouselMaps} />
          <LifeServices />
          <HotShopping />
          <HotFrame hotFrame={hotFrame}/>
          <div style={{ height: "100px" }}></div>
        </div>


      </div>
    )
  }
}
