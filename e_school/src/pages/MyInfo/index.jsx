import React, { Component } from 'react'
import { connect } from 'react-redux'


import UserInfo from './UserInfo'
import TimeInfo from './TimeInfo/'
import OrdersInfo from './OrdersInfo'
import Notify from '../../components/Notify'
import OtherFeatures from '../../components/OtherFeatures'

import { permissionsAxios } from '../../utils/api'

import './index.css'
class MyInfo extends Component {
  state = {
    //通知栏需要的信息
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
    
      //第一个对象，用户的基本信息
      userInfo:{
        id:0,
        nickname:'你的小可爱',
        vip:'4',
        avatar:'/images/图层 14.jpg',
        Referrer:'张三',
        inventCode:'FEOOXY',
      },
      //第二个对象，用户的光阴值信息
      timeInfo:{
        totalValue:888,
        usefulValue:9,
        todayValue:0,
        yesterdayValue:0,
      },
      //第三个对象，用户的订单信息
      ordersInfo:{
        
        shoppingCart:0,
        ordersFalse:0,
        ordersTrue:0,
      }
    
  }

  //组件挂载完毕的生命周期函数
  componentDidMount(){
    //获取本地的 userInfo ，如果没有就向服务器请求
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo===null){
    if(this.state.userInfo.id===undefined){
    permissionsAxios('GET','/user/login',{
    }).then(
      res=>{
        if(res.data.code===0){
          console.log(res);
        }else{
          localStorage.setItem("userInfo",JSON.stringify(res.data.data.tokenValue))
        }
      }
    )
    //获取timeInfo
    permissionsAxios('GET','/timeValue',{
      params:{
        id:this.props.userId
      },
    }).then(
      res=>{
        if(res.data.code===0){
        }else{
          localStorage.setItem("timeInfo",JSON.stringify(res.data.data.tokenValue))
        }
      }
    )
    }

    this.setState({userInfo:JSON.parse(localStorage.getItem('userInfo'))})
    this.setState({timeInfo:JSON.parse(localStorage.getItem('timeInfo'))})

  }}

  render() {
    const {notify,otherFeatures,userInfo,timeInfo,ordersInfo} = this.state
    return (
      <div id='MyInfo' className='wrapper'>
        <UserInfo userInfo={userInfo} />
        <TimeInfo timeInfo={timeInfo }/>
        <OrdersInfo ordersInfo={ordersInfo} />
        <Notify notify={notify}/>
        <OtherFeatures otherFeatures={otherFeatures}/>
        <div style={{height:'41px'}}></div>
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