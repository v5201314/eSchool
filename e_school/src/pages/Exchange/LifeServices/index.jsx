import React, { Component } from 'react'

import GoodsHead from '../../../components/GoodsHead'
import OtherFeatures from '../../../components/OtherFeatures'

import './index.css'
export default class LifeServices extends Component {
    state = {
        goodsHead: {
            info: "兑换中心",
            //跳转地方
            to: '',
            toInfo:"快人一步"
          },
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
          ],
    }
  render() {
    const {goodsHead,otherFeatures} = this.state
    return (
      <div id='LifeServices'>
        <GoodsHead goodsHead={goodsHead}/>
        <OtherFeatures otherFeatures={otherFeatures}/>
      </div>
    )
  }
}
