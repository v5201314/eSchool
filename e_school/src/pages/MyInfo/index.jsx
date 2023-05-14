import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios from 'axios'
import { SERVERURL } from '../../constantValue'

import UserInfo from './UserInfo'
import TimeInfo from './TimeInfo/'
import OrdersInfo from './OrdersInfo'
import Notify from '../../components/Notify'
import OtherFeatures from '../../components/OtherFeatures'
import './index.css'
class MyInfo extends Component {
  state = {
    notify:{
      content:'平台最新分享规则更新预告',
      to:'',
    },
    //其他功能需要的icon与介绍
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
    ],
    //用户的信息
    user:[
      //第一个对象，用户的基本信息
      {
        id:'0',
        nicName:'你的小可爱',
        vip:'4',
        avatar:'/images/图层 14.jpg',
        Referrer:'张三',
        invitationCode:'FEOOXY',
      },
      //第二个对象，用户的光阴值信息
      {
        timeValue:888,
        WithdrawableTime:9,
        todayTime:0,
        yesterdayTime:0,
      },
      //第三个对象，用户的订单信息
      {
        
        shoppingCart:0,
        ordersFalse:0,
        ordersTrue:0,
      }
    ]
  }

  //组件挂载完毕的生命周期函数
  componentDidMount(){
    axios.get(SERVERURL+`/user/`+this.props.userId,{
      
    }).then(
      (res)=>{
        console.log(res);
    })
  }

  render() {
    const {otherFeatures,user} = this.state
    return (
      <div id='MyInfo' className='wrapper'>
        <UserInfo userInfo={user[0]} />
        <TimeInfo timeInfo={user[1]} />
        <OrdersInfo ordersInfo={user[2]} />
        <Notify notify={this.state.notify}/>
        <OtherFeatures otherFeatures={otherFeatures}/>
      </div>
    )
  }
}

export default connect(
  (state)=>{
    return{
      userId:state.userId
    }
  },
  {

  }
)(MyInfo)