import React, { Component } from 'react'
import GoodsHead from '../../../components/GoodsHead'
import CommodityCommon from '../../../components/CommodityCommon'

export default class ExchangeCenter extends Component {
    state = {
        goodsHead: {
          info: "兑换中心",
          //跳转地方
          to: ''
        },
        commodityCommon:[
          {
          goodsId:'1',
          classify:'儿童书包',
          goodsName:'护脊减负书包',
          energy:1500,
          imgSrc:'/images/-e-图层 8.png',
          to:''
        },
        {
          goodsId:'2',
          classify:'儿童书包',
          goodsName:'护脊减负书包',
          energy:1500,
          imgSrc:'/images/-e-图层 8.png',
          to:''
        }
      ]
      }
  render() {
    const { goodsHead,commodityCommon } = this.state
    return (
      <div id='exchangeCenter'>
        <GoodsHead goodsHead={goodsHead}/>
        <CommodityCommon commodityCommon={commodityCommon}/>
      </div>
    )
  }
}
