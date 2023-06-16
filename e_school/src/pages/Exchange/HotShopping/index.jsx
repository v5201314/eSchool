import React, { Component } from 'react'
import GoodsHead from '../../../components/GoodsHead'
import CommodityCommon from '../../../components/CommodityCommon'

export default class HotShopping extends Component {
    state = {
        goodsHead: {
          info: "热门商品",
          //跳转地方
          to: '',
          toInfo:"全部热门"
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
        },
        {
          goodsId:'3',
          classify:'儿童书包',
          goodsName:'护脊减负书包',
          energy:1500,
          imgSrc:'/images/-e-图层 8.png',
          to:''
        },
        {
          goodsId:'4',
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
