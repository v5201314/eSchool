import React, { Component } from 'react'

import SearchBox from '../../components/SearchBox'
import OtherFeatures from '../../components/OtherFeatures'
import HotFrame from '../../components/HotFrame'

import './index.css'
export default class Learn extends Component {
  
  state = {
    otherFeatures:[
      {
        introduce:'话费充值',
        src:'/icons/myInfo/形状 43 拷贝 2.png'
      },
      {
        introduce:'油卡充值',
        src:'/icons/myInfo/形状 43.png'
      },
      {
        introduce:'QQ充值',
        src:'/icons/myInfo/形状 44.png'
      },
      {
        introduce:'游戏充值',
        src:'/icons/myInfo/形状 45.png'
      },
      {
        introduce:'QQ充值',
        src:'/icons/myInfo/形状 44.png'
      },
      {
        introduce:'游戏充值',
        src:'/icons/myInfo/形状 45.png'
      },
      {
        introduce:'QQ充值',
        src:'/icons/myInfo/形状 44.png'
      },
      {
        introduce:'游戏充值',
        src:'/icons/myInfo/形状 45.png'
      },
      {
        introduce:'QQ充值',
        src:'/icons/myInfo/形状 44.png'
      },
      {
        introduce:'游戏充值',
        src:'/icons/myInfo/形状 45.png'
      },
    ],
    //热度框需要的数据
    hotFrame: [
      {
        title: "选好课 进大厂",
        content: "进互联网公司必学",
        imgSrc: "/icons/图层 11.png"
      },
      {
        title: "选好课 进大厂",
        content: "进互联网公司必学",
        imgSrc: "/icons/图层 11.png"
      }
    ]
  }

  render() {
  const {otherFeatures,hotFrame} = this.state
    return (
      <div id="Learn" className='wrapper'>
         <SearchBox />
         <div className='learnMain'>
         
          <OtherFeatures otherFeatures={otherFeatures}/>
          <HotFrame hotFrame={hotFrame}/>
          <div style={{height:'72px'}}></div>
        </div>
      </div>
    )
  }
}
